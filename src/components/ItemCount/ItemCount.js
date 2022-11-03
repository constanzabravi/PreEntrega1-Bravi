import { useState } from 'react'


const ItemCount = ({ stock = 0, initial = 1, onAdd})=> {
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
    <div id="contador">
      <button className="btn btn-dark" id='button' onClick={increment}>+</button>
      <p id='numero'>{quantity}</p>
      <button className="btn btn-dark" id='button' onClick={decrement} >-</button>
      <button className="btn btn-dark" id='button' onClick={() => onAdd(quantity)} >Agregar al carrito</button>
   
    </div>
  )
}

export default ItemCount;