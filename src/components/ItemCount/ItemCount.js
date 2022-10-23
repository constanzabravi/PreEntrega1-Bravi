import { useState } from "react"


const ItemCount = ({ stock = 10, initial = 0, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>

            <h5>Cantidad</h5>
            <h6> {count} </h6>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>

            {count > 0 ?
                <button id="cartButton"  onClick={() => onAdd(count)}>
                    Agregar al Carrito
                </button>
                :
                <button id="cartButton" className="disabled" onClick={() => onAdd(count)}>
                    Agregar al Carrito
                </button>
            }

        </div>
    )
}

export default ItemCount