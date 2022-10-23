import cart from './assets/cart.svg'
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from "../../CartContext/CartContext";


const CartWidget = () => {
 
    const { totalQuantity } = useContext (CartContext);
    return (
        <div className='carritoStyle'>
        <img className= 'imgCard marginCarrito' src={cart} alt='cart'/> 
        <div className='marginCarrito'>
        <sup>{totalQuantity}</sup>
        </div>
       </div>
    )
}

export default CartWidget