import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }


  return (
    <div>
      <div id="contador">
        <button className="Space btn btn-dark" id='button' onClick={increment}>+</button>
        <p id='numero'> {quantity}</p>
        <button className="Space btn btn-dark" id='button' onClick={decrement} >-</button>
      </div>
      <div id="contador">
        <button className="Space btn btn-dark" id='button' onClick={() => onAdd(quantity)} >AGREGAR AL CARRITO</button>
      </div>
    </div>
  )
}

export default ItemCount;