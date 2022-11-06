
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../CartContext/CartContext'
import ItemCart from "../ItemCart/ItemCart"
import { useContext } from "react"
import './Cart.css'


const Cart = () => {
    const { cart, totalQuantity, total, clearCart } = useContext(CartContext)

    //Hook para navegar hacia la página anterior 
    const navigate = useNavigate()

    if (totalQuantity === 0) {
        return (
            <div className="container text-center">
                <div className=".col-md-6 .offset-md-3">
                    <h2 className="h12"> ¡Hey! <br/> Aún no seleccionaste ningún producto </h2>
                    <button className="confirmar2"> <Link to='/'> Comenzar compra</Link></button>
                </div>
            </div>
        )
    }
    return (
        <div>
            {/* Botón para volver hacia la página anterior */}
            <button className="volver" onClick={() => navigate(-1)} >Volver</button>
            <div className="body3">
                <h1 className="h12">Resumen de compra</h1>
                {cart.map(products => <ItemCart key={products.id} {...products} />)}
                <p className="titles"><b>Total a pagar:</b> ${total}</p>
                <button onClick={() => clearCart()} className="buttonwhite">Limpiar carrito</button> <br />
                <button className='buttonwhite'><Link to='/checkout'>Completá tus datos para finalizar la compra</Link></button>
            </div>
        </div>
    )
}

export default Cart 