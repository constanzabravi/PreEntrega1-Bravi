import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext' 
import './ItemCart.css'


const ItemCart = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)
    const handleRemove = (id) => {
        removeItem(id)
    }
return (    
    <div className='containerCart'>
        <h2 className="name">{name}</h2> 
        <div>
        <p className="titles">Precio del producto: ${price}</p>
        <p className="titles">Cantidad: {quantity}</p>
        <p className="titles">Subtotal: ${quantity * price}</p>
        <button className='ButtonCartItem' onClick={() => handleRemove(id)}>Eliminar</button>
        </div>
    </div>
)
}

export default ItemCart