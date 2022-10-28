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
                            <li>  ${prod.price}</li>
                            <li>  Cantidad = {prod.quantity}</li>
                            <li> Stock = {prod.stock}</li>
                            <button  onClick={() => removeItem(prod.id)}>Remover</button>
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