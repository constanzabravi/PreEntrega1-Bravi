import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from "./CartContext/CartContext"
import Cart from "./components/Cart/Cart"
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div>
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
              < Route path='/cart' element={<Cart />} />
              < Route path='/checkout' element={<Checkout />}/>  
              < Route path='*' element={<h1>404 ERROR NOT FOUND</h1>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
