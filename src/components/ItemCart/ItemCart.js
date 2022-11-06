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
        <h3 className="name">{name}</h3> 
        <div className='wrapper2'>
        <p className="titles"><b>Precio del producto:</b> ${price}</p>
        <p className="titles"><b>Cantidad:</b> {quantity}</p>
        <p className="titles"><b>Subtotal:</b> ${quantity * price}</p>
        <button className='buttonwhite' onClick={() => handleRemove(id)}>Eliminar</button>
        </div>
    </div>
)
}

export default ItemCart