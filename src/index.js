import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Explicación:
//App son los objetos encadenados que generan un solo objeto. Ese objeto final termina como argumento de la función render: 

root.render(<App />);
reportWebVitals();
