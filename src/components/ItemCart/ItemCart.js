import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext' 



const ItemCart = ({ id, name, img, quantity, price }) => {
    const { removeItem } = useContext(CartContext)
    const handleRemove = (id) => {
        removeItem(id)
    }
return (    
    <div className='containerCart'>
        <h1 className="name">{name}</h1>
        {img}
        <p className="price">Precio del producto: ${price}</p>
        <p className="cantidad">Cantidad: {quantity}</p>
        <p className="SubTotal">Subtotal: ${quantity * price}</p>
        <button className='ButtonCartItem' onClick={() => handleRemove(id)}>Eliminar</button>

    </div>
)
}

export default ItemCart