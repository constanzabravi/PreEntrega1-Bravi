
import React from "react";
import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0
})

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)

  console.log(cart, 'cartcontext')

  useEffect(() => {
      
 
      const totalQty = getQuantity()
      setTotalQuantity(totalQty)
  }, [cart])

  const addItem = (productToAdd) => {
      console.log('additem')
      if(!isInCart(productToAdd.id)) {
          setCart([...cart, productToAdd])
      } else {
      console.log('ya esta en el carrito')
      }
  }

  const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
  }

  const removeItem = (id) => {
      const cartWithoutProduct = cart.filter(prod => prod.id !== id)
      setCart(cartWithoutProduct)
  }
  const getQuantity = () => {
      let accu = 0

      cart.forEach(prod => {
          accu += prod.quantity
      })

      return accu
  }
  const getTotal = () => {
      let accu = 0

      cart.forEach(prod => {
          accu = prod.quantity * prod.price
      })

      return accu
  }

  const clearCart = () => {
      setCart([])
  }


  return (
      <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, getTotal, clearCart}}>
          {children}
      </CartContext.Provider>
  )
}