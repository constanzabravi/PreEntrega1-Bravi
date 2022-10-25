import { useState, useContext } from 'react';


import { Link } from "react-router-dom";



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


  const [buttonText, setButtonText] = useState("Agregar al carro"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

 
  


  return (
    <div id="contador">
      <button className="btn btn-dark" id='button' onClick={increment}>+</button>
      <p id='numero'>{quantity}</p>
      <button className="btn btn-dark" id='button' onClick={decrement} >-</button>


      <button className="btn btn-dark" id='button'  onClick={() =>{ onAdd(quantity); setButtonText("Elemento agregado") }}>{buttonText}</button>

      <Link to={'/cart'} className="btn btn-dark" id='button'  >Ir al carrito</Link>

 
 
  


    </div>
  )
}

export default ItemCount;