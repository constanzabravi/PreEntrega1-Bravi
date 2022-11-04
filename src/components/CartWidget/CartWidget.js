import cart from './assets/cart.svg'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from "../../CartContext/CartContext";

//Traigo el totalQuantity de Context, CartContext.

const CartWidget = () => {

    //La función getQuantity de Context me retorna el valor
    //Si bien no tengo un useEffect relacionado, funciona porque en App que tiene el provider esta cambiando un estado
    //y vuelve a ejecutar el render - todos los hijos.Por lo tanto se ejecuta siempre.

    const { totalQuantity, total } = useContext(CartContext);

    return (
        <div className='carritoStyle'>
            <Link to='/cart'>  <img id="carrito" className='imgCard marginCarrito' src={cart} alt="cart" /></Link>
            <div className='marginCarrito'>
                PRODUCTOS AGREGADOS: {totalQuantity}
            <br/>
                TOTAL: ${total}
            </div>
        </div>
    )
}

export default CartWidget