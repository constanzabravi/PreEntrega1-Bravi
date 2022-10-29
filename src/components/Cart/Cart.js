
import { React, useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

const Cart = () => {
    const { cart, removeItem, getTotal, clearCart } = useContext(CartContext)

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
            <button> Generar orden</button>
            <button> Precio total: $ {getTotal(cart)}</button>
            <button onClick={() => clearCart(cart)}>Vaciar el carrito</button>
        </div>

    )

}
export default Cart