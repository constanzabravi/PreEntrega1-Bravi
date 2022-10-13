import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='carritoStyle'>
        <img className= 'imgCard marginCarrito' src={cart} alt='cart'/> <span className='marginCarrito'>0</span>
        </div>
    )
}

export default CartWidget