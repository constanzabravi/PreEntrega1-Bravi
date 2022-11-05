import { useState, useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from "../../ServicesFirebase/index"
import { useNavigate } from "react-router-dom"
import FormularioCliente from '../Form/Form'
import Swal from "sweetalert2";

//Función para comprar y confirmar enviando datos a firebase
const Checkout = () => {
    const [loading, setLoading] = useState(false)
//Callback 
    const [personalData, setPersonalData] = useState(false)
    const [datosCompra, setDatosCompra] = useState({})

//Funcion que al ejecutarse modifica state de personaldata
    const completoDatos = (name, surname, address, phone, email) => {
        setDatosCompra({ name, surname, address, phone, email })
        setPersonalData(true)
    }

    const { cart, totalQuantity, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)
        //Donde guardo los errores
        try {
            const objOrder = {
                buyer: datosCompra,
                items: cart,
                total: totalQuantity
            }
            //Creo el Batch
            const batch = writeBatch(db)
            //Guardo productos fuera del stock en un array
            //Si este array está vacio, todos los productos tienen el stock correcto
            //Si tiene algun producto, significa que no tiene stock
            const outOfStock = []
            //Productos con los ids en el carrito
            const ids = cart.map(prod => prod.id)
            //Consulto en la base de datos esos productos
            const productsRef = collection(db, 'productos')
            //Consulto por los productos que únicamente están agregados al carrito, y con documentid los filtro
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            //Me traigo los docs actualizados de la base de datos
            const { docs } = productsAddedFromFirestore
            //Una vez que tengo esos productos los recorro
            //Comparo el valor del stock de los productos con la cantidad de ese producto que agregó el usuario al carrito
            docs.forEach(doc => {
                //Con esta función obtengo el stock de los campos
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                //Obtengo la cantidad con el id que el usuario agregó (quantity) al carrito del producto, y lo encuentro en el carrito, trayendome la cantidad con el contador
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
                //Una vez que tengo los valores los comparo, si el valor que tengo en la base de datos es > o = a la cantidad que agrego el usuario, puede vender correctamente.
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    //Todos los productos que pasen la validación se guardan en batch, los que no, en outofstock
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)
                Swal.fire({
                    title: "Gracias por su compra",
                    text:`El id de su orden es: ${orderAdded.id}`,
                    icon: "success",
                    buttons: true,
                    dangerMode: true,
                
                })
            } else {
                Swal.fire({
                    title: "Algunos productos no se encuentran en stock",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                
                })
            }


        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return <h1>Se esta procesando su pedido...</h1>
    }

      //Parte visual del componente lógico que deriva a generar pedido

    return (
        //Llamo al form con la funcion de completodatos que modificaba el state
        <div>
            {/* Botón para volver hacia la página anterior */}
            <button className="volver" onClick={() => navigate(-1)} >Volver</button>
            <FormularioCliente completoDatos={completoDatos} />
            {personalData
                ? <button onClick={createOrder}>Generar Pedido</button>
                : ""}
        </div>
    )
}

export default Checkout