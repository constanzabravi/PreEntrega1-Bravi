
import { React, useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, total, clearCart } = useContext(CartContext)

    return (
        <div>
            {cart.map(prod => (
                <div>
                    <h1>
                        {prod.name}
                    </h1>
                    <ul>
                        <li>  ${prod.price}</li>
                        <li>  Cantidad = {prod.quantity}</li>
                        <li> Stock = {prod.stock}</li>
                        <button onClick={() => removeItem(prod.id)}>Remover</button>
                    </ul>
                </div>
            ))
            }
<<<<<<< HEAD

            <Link to='/checkout' className="btn btn-dark" id='button'>Checkout</Link>
            <button> Precio total: $ {getTotal(cart)}</button>
=======
            <button> Generar orden</button>
            <h1> Precio total: $ {total}</h1>
>>>>>>> d5646d6aa49f7bf84d3f5ee5a7a03f52a2666661
            <button onClick={() => clearCart(cart)}>Vaciar el carrito</button>
        </div>

    )

}
export default Cart
