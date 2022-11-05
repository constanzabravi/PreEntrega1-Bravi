
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
            <div className="divcenter">
                <h2 className="h12"> No hay elementos en el carrito </h2>
                <button className="volver"> <Link to='/'> Comenzar compra</Link></button>
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
                <p>Total a pagar: ${total}</p>
                <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
                <button><Link className='Button' to='/checkout' >Completá tus datos para finalizar la compra</Link></button>
            </div>
        </div>
    )
}

export default Cart 