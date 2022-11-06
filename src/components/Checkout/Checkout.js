import { useState, useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { useNavigate } from "react-router-dom"
import FormularioCliente from '../Form/Form'
import Swal from "sweetalert2";
import './Checkout.css'
import { useOrders } from "../../ServicesFirebase/firestore/orders"

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

    const { clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const { createOrder } = useOrders()

    const getOrder = () => {

        setLoading(true)
        createOrder(datosCompra).then(response => {
            if (response.result === 'orderCreated') {
                clearCart()
                setTimeout(() => {
                    navigate('/')
                }, 2000)
                Swal.fire({
                    title: "Gracias por su compra",
                    text: `El id de su orden es: ${response.id}`,
                    icon: "success",
                    buttons: true,
                    dangerMode: true,
                })

                navigate('/')
            } else {
                Swal.fire({
                    title: "Algunos productos no se encuentran en stock",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                navigate('/cart')
            }

        }).catch(error => {
            Swal.fire({
                title: `${error}`,
                icon: false,
                buttons: true,
                dangerMode: true,
                timer: 6000,
                customClass: "swAlert"
            })
        }).finally(() => {
            setLoading(false)
        })
    }
    if (loading) {
        return (<h1 className="center">Se esta procesando su pedido...</h1>)
    }
    //Parte visual del componente lógico que deriva a generar pedido

    return (
        //Llamo al form con la funcion de completodatos que modificaba el state
        <div className="container text-center">
            <div className=".col-md-6 .offset-md-3">
                <FormularioCliente completoDatos={completoDatos} />
                {personalData
                    ? <button className="confirmar animate__animated animate__backInDown" onClick={getOrder}>CONFIRMAR COMPRA</button>
                    : ""}
            </div>
        </div>
    )
}

export default Checkout
