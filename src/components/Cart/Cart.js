
import { Link } from 'react-router-dom'
import {CartContext} from '../../CartContext/CartContext'
import ItemCart from "../ItemCart/ItemCart"
import { useContext } from "react"



const Cart = () => {
    const {cart, totalQuantity, total, clearCart} = useContext(CartContext)


    if(totalQuantity === 0) {
        return (
        <div>
        <p> No hay elementos en el carrito </p>
        <button> <Link to='/'> Comenzar compra</Link></button>
        </div>
    )
}
    return (
        <div>
            {cart.map(products => <ItemCart key={products.id} {...products}/>) }
            <p>Total a pagar: ${total}</p>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <button><Link className='Button' to='/checkout' >Completá tus datos para finalizar la compra</Link></button>
        </div>

    )
}

export default Cart 