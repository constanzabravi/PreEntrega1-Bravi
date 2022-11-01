import { useState, useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { NotificationContext } from '../../Notification/NotificationService'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from "../../ServicesFirebase/index"
import { useNavigate } from "react-router-dom"

//Función para comprar y confirmar enviando datos a firebase
const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, totalQuantity, clearCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)
        //Donde guardo los errores
        try {

            const objOrder = {
                buyer: {
                    name: { name },
                    phone: { phone },
                    mail: { email },
                    address: { address }
                },
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
            const productsRef = collection(db, 'products')

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
                    //Stock de base de datos menos el stock que el usuario tiene agregado al carrito.
                    batch.update(doc.ref, { stock: stockDb - prodQuantity }) //Referencia directa sin decir en qué coleccion está
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
                }, 3000)

                setNotification('success', `El id de su orden es: ${orderAdded.id}`)
            } else {
                setNotification('error', 'Hay productos que están fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    //Validación del form

    const submit = (e) => {

        e.prevetDefault()

        if (name.value === null || name.value === '') {

            alert('complete los campos')

        }
        if (email.value === null || email.value === '') {
            alert('complete los campos')
        }
        if (phone.value === null || phone.value === '') {
            alert('complete los campos')
        }
        if (address.value === null || address.value === '') {
            alert('complete los campos')
        }


        return false;

    }

    //Parte visual del componente lógico de arriba
    return (
        <div className="formulario">
            <h1>Formulario</h1>
            <h2>Complete el siguiente formulario para realizar su orden de compra</h2>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre y Apellido" />
            <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Dirección" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Teléfono" />
            <button onClick={createOrder}>Generar pedido</button>
            <button onClick={(e) => this.submit(e)}>Validar datos</button>

        </div>
    )
}

export default Checkout