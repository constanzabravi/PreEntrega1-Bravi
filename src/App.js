import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from "./CartContext/CartContext"
import Cart from "./components/Cart/Cart"

function App() {
  return (
    
    <Fragment>
      <CartProvider>
      <BrowserRouter> 
      {/* Se ordenan segun la ruta de navegación.
      Los que se muestran siempre se indican con el componente Routes -condicionales
      Los que no, van afuera del componente Routes  */}
        <NavBar />

        <Routes>
          {/* La parte dinámica la escribo luego de ':' */}
          < Route path='/' element={<ItemListContainer />} />
          < Route path='/category/:categoryId' element={<ItemListContainer />} />
          < Route path='/item/:productId' element={<ItemDetailContainer />} />
          < Route path='*' element={<h1>404 ERROR NOT FOUND</h1>} />
          < Route path="/Cart" element={<Cart />} />
        </Routes>

      </BrowserRouter>
      </CartProvider>
    </Fragment>
  );
}

export default App;
