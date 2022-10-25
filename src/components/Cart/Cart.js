import { useContext } from "react";
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
                            <li className="element1">  ${prod.price}</li>
                            <li className="element1">  Cantidad = {prod.quantity}</li>
                            <li className="element1"> Stock = {prod.stock}</li>
                            <button className="generator1" onClick={() => removeItem(prod.id)}>remover</button>

                        </ul>

                    </div>


                ))

            }
            <button className="generator">Generar orden</button>
            <button className="generator2"> Precio total: $ {getTotal(cart)}</button>
            <button className="generator3" onClick={() => clearCart(cart)}>Vaciar el carrito</button>

        </div>

    )

}
export default Cart