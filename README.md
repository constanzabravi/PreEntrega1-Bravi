## Proyecto de E-Commerce con [REACTJS] - [CODERHOUSE].

# _DYE Motopartes_

DYE Motopartes es un proyecto de tienda online con carrito de compras, creado con React DOM (utilizando componentes de [React]) y [Firebase] como servidor en la nube. El objetivo de esta tienda es que el consumidor pueda realizar compras de productos en la tienda y crear su orden correspondiente de pedido.

## ¿Cómo se inicializa la app?

1) Podés descargar la carpeta del proyecto o bien, clonarla desde la terminal. Para realizar la clonacion del proyecto, ejecutar en la consola: **`git clone`** https://github.com/constanzabravi/ProyectoReact
2) Instalar NPM usando el comando **`npm i`** en la ruta donde se encuentra "package.json" desde la terminal.
3) La App se inicia a través de la terminal con el comando **`npm start`**, luego de haber instalado las dependencias del node-module correspondiente, que se especifican en el siguiente apartado.

## ¿Qué tecnologías y dependencias usé para realizar la app?

#Tecnologías

[![htmlico]](https://es.wikipedia.org/wiki/HTML) [![cssico]](https://es.wikipedia.org/wiki/CSS) [![jsico]](https://es.wikipedia.org/wiki/JavaScript) [![firebasee]](https://firebase.google.com/?hl=es-419&gclid=Cj0KCQjw4PKTBhD8ARIsAHChzRLWIosyPDP7QsTRQvzxeUDwT5-bl1RI3l8ZZf1a39VK85fas4xrBq0aAu-JEALw_wcB&gclsrc=aw.ds) [![reactico]](https://es.reactjs.org/) [![gitico]](https://git-scm.com/)

#Dependencias

:small_blue_diamond: "@emotion/react": "^11.10.5",
:small_blue_diamond: "@emotion/styled": "^11.10.5",
:small_blue_diamond: "@testing-library/jest-dom": "^5.16.5",
:small_blue_diamond: "@testing-library/react": "^13.4.0",
:small_blue_diamond: "@testing-library/user-event": "^13.5.0",
:small_blue_diamond: "@uiball/loaders": "^1.2.6",
:small_blue_diamond: "animate.css": "^4.1.1",
:small_blue_diamond: "babel-plugin-macros": "^3.1.0",
:small_blue_diamond: "bootstrap": "^5.2.1",
:small_blue_diamond: "firebase": "^9.12.1",
:small_blue_diamond: "react": "^18.2.0",
:small_blue_diamond: "react-bootstrap": "^2.5.0",
:small_blue_diamond: "react-dom": "^18.2.0",
:small_blue_diamond: "react-hook-form": "^7.39.1",
:small_blue_diamond: "react-router-dom": "^6.4.2",
:small_blue_diamond: "react-scripts": "5.0.1",
:small_blue_diamond: "react-toastify": "^9.1.1",
:small_blue_diamond: "sweetalert2": "^11.6.5",
:small_blue_diamond: "sweetalert2-react-content": "^5.0.7",
:small_blue_diamond: "web-vitals": "^2.1.4"

## Utilización de Firebase

Para conectar tu proyecto con firestore, completá tus datos siguiendo el ejemplo de variables de entorno respetando los datos de la colección de productos.

-REACT_APP_apiKey=
-REACT_APP_authDomain=
-REACT_APP_projectId=
-REACT_APP_storageBucket=
-REACT_APP_messagingSenderId=
-REACT_APP_appId=
## Componentes utilizados

:small_blue_diamond: **NavBar**

Contiene el logo de la tienda, las categorías y el carrito con los productos agregados y el precio total.

:small_blue_diamond: **ItemListContainer**

Contiene imagen presentanción, los productos y filtrado por categoría.

:small_blue_diamond: **ItemList**

Contiene el mapeado de los productos necesarios.

:small_blue_diamond: **ItemDetailContainer**

Contiene el detalle del producto seleccionado.

:small_blue_diamond: **ItemDetail**

Contiene un detalle mas especifico del producto seleccionado como el nombre, la descripción, el stock, la categoría, permite seleccionar la cantidad del producto para comprar mediante ItemCount, agregarlo al carrito y finalizar la compra.

:small_blue_diamond: **Item**

Contiene la visualización del producto con sus detalles y un botón de "Ver Detalle" que redirige a ItemDetail.

:small_blue_diamond: **Cart**

Contiene el resumen de la compra.

:small_blue_diamond: **CartWidget**

Visualiza la cantidad de productos en el carrito y el precio total.

:small_blue_diamond: **Form**

Contiene un formulario con nombre y apellido, dirección, numero de teléfono y doble correo electrónico con la finalidad de verificar si  coinciden.

:small_blue_diamond: **ItemCart**

Contiene un detalle de los productos seleccionados en el carrito por separado mas una botón por cada uno para poder eliminarlos.

:small_blue_diamond: **ItemCount**

Permite seleccionar la cantidad del producto.


## Versionado

Se utilizó [Git] para el sistema de versionado. Para seguir sus actualizaciones, se usó y usará [GitHub].


### :heart: Agradecimiento :heart:

Este proyecto es todo gracias al profe Seba Zuviria, te quiero mucho :)
