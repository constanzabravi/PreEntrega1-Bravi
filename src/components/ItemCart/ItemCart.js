import React from 'react'
import '../ItemCart/ItemCart.css'
import '../asyncMock'
import { useCartContext } from '../../CartContext/CartContext'



const ItemCart = ({id, img, name, price, quantity}) => {
    const {removeProduct} = useCartContext ();

return (    
    <div>
        <img src={img} alt={name}/>
        <h1>{name}</h1>
        <p>Precio U: ${price}</p>
        <p>Subtotal: ${quantity * price}</p>
        <button onClick={()=>removeProduct(id)}> Eliminar</button>

    </div>
)
}

export default ItemCart