import React from "react";
import { useState, useEffect, createContext } from "react";

//Acciones (lógica) del carrito 
//CONTEXT: inyecta dependecias ('burbuja' de valor, funciones, objetos o referencias) a los componentes que le indico, sin necesidad de acceder por props.
// 1) Creo el context 
// 2) Tengo que decir a qué parte de la app le voy a compartir este 'valor'
// 3) Lo consumo

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

//Creo componente proveedor del valor que da todos los componentes hijos
//Al ser componente de alto orden, la props es children, que luego la retornamos
//A totalQuantity lo comparto por value en el return

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]) //Guardo los productos
    const [totalQuantity, setTotalQuantity] = useState(0) //Total de los productos
    const [total, setTotal] = useState(0)

    //El setTotalQuantity lo voy a ejecutar unicamente si me cambia el cart
    //Obtengo la cantidad total  cuando cambia el carrito y seteo el total 
    //¡¡¡ ASÍ SE SINCRONIZAN LOS ESTADOS !!!!

    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart])//eslint-disable-line

    useEffect(() => {
        const total = getTotal()
        setTotal(total)
    }, [cart])//eslint-disable-line


    //Función para agregar producto en el estado y si se toca nuevamente el botón, avisa que ya se agregó

    const addItem = (productToAdd, quantity) => {
        //Función para saber si el producto está en el carrito
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if (prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }

                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    //Validación para saber si está en el carrito 
    const isInCart = (id) => { return cart.find(prod => prod.id === id) ? true : false }

    //Funcion para remover/filtrar productos, todos los que tengan distinto ID al que le estoy pasando me los devuelve al array Y SE ELIMINAN sin mutar el estado.  
    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }
    //Funcion con acumulador con cart para recorrer el array y de cada producto le sumo al acumulador
    //Finalmente retorno el acumulador, devolviendo cantidad total de productos. (Función para saber la cantidad)

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu
    }
    //Función para obtener el total de los productos en el carrito 
    const getTotal = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })
        return accu
    }

    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)
        return product?.quantity
    }

    //Cart.Context.Provider es quien lo va a compartir a todos los hijos
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, clearCart, totalQuantity, getQuantity, total, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )

}