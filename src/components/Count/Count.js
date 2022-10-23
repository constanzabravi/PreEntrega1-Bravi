import React from "react"
import { useState } from 'react'

let stock = 10

const Counter = () => {

    const [count, setCount] = useState(0)

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
            <button onClick={onAdd}>agregar al carrito</button>
        </div >
    )
}

export default Counter