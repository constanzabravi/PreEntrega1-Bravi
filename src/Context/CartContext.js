import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalQty = getQuantity()
    setTotalQuantity(totalQty)
  }, [cart])

  useEffect(() => {
    const total = getTotal()
    setTotal(total)
  }, [cart])

  // función para agregar un producto al carrito(no acepta duplicados y lo setea a la nueva cantidad)

  const addItem = (productToAdd, quantity) => {
    if(!isInCart(productToAdd.id)) {
        productToAdd.quantity = quantity
        setCart([...cart, productToAdd])
    } else {
        const cartUpdated = cart.map(prod => {
            if(prod.id === productToAdd.id) {
                const productUpdated = {
                    ...prod,
                    quantity: quantity
                }

                return productUpdated
            } else {
                return prod
            }
        })

        setCart(cartUpdated)
    }
}

// función para limpiar el carrito
const clearCart = () => {
  setCart([]);
};

// función que devuelva true o false si hay un producto que esté en el carrito
const isInCart = (id) => {
  return cart.some((prod) => prod.id === id);
};

// función para remover un producto del carrito
const removeItem = (id) => {
  const productLess = cart.filter((prod) => prod.id !== id);
  setCart(productLess);
};

const getTotal = () => {
  let total = 0
  cart.forEach(prod => {
    total += prod.quantity * prod.price
  })
  return total
}


  const getQuantity = () => {
    let accu = 0

    cart.forEach(prod => {
      accu += prod.count
    })

    return accu
  }


const getProductQuantity = (id) => {
  const product = cart.find(prod => prod.id === id)
  return product.quantity
}
return (
  <CartContext.Provider value={{ 
    cart, isInCart, getQuantity, addItem, removeItem, clearCart, totalQuantity, getProductQuantity, total }}>
    {children}
  </CartContext.Provider>
);
  };
  export const useCart = () => {
    return useContext(CartContext)}
    
export default CartProvider;