import { addDoc } from "firebase/firestore"

const products = [
    {
        id: '1',
        name: 'Casco',
        price: 20000,
        category: 'Cascos',
        img: 'https://motocity.com.ar/media/catalog/product/cache/2fac267d4110f9f65e5d0a9520c3c587/d/_/d_nq_np_957641-mla52106425351_102022-o.jpg',
        stock: 10,
        description: 'Cubierta trasera para moto Rinaldi RMX 35 con cámara de 100/90-19 M 57 x 1 unidad'
    },
    {
        id: '2',
        name: 'Baul',
        price: 12000,
        category: 'Baul',
        img: '/Images/baul.jpg',
        stock: 10,
        description: 'Baul Multiuso C/tapa /manija /rueda 125lts 79,4x44,8x35,2'
    },
    {
        id: '3',
        name: 'Baulera',
        price: 9000,
        category: 'Baul',
        img: '/Images/baulera.jpg',
        stock: 10,
        description: 'Baulera C/ojo De Gato Universal (mediana) 41*30*40 V.c. 819'
    },
    {
        id: '4',
        name: 'Amortiguador Guerrero',
        price: 7000,
        category: 'Amortiguador',
        img: '/Images/amortiguador2.webp',
        stock: 10,
        description: 'Guerrero Trip 110 / Smash/ Blitz 110 (juego) Fa'
    },
    {
        id: '5',
        name: 'Amortiguador Honda',
        price: 9000,
        category: 'Amortiguador',
        img: '/Images/amortiguador.jpg',
        stock: 10,
        description: 'Amortiguador Honda Wave 110 S M/nuevo (juego) Far 30057'
    },
    {
        id: '5',
        name: 'Baulera',
        price: 9000,
        category: 'Baul',
        img: '/Images/baulerablanca.webp',
        stock: 10,
        description: 'Baulera C/ojo De Gato Blanco (2 Cascos) V.c. 875c 48 Litros'
    },
    {
        id: '6',
        name: 'Filtro de Aceite',
        price: 3000,
        category: 'Filtro',
        img: '/Images/filtro.webp',
        stock: 10,
        description: 'Filtro Aceite Benelli Tnt 300 / Trk 502 Orig-b 260146090010'
    },
    {
        id: '7',
        name: 'Filtro de Aire',
        price: 2000,
        category: 'Filtro',
        img: '/Images/filtroaire.webp',
        stock: 10,
        description: 'Filtro Aire Honda Xr 250 Tornado Bmb Am-12.20'
    },
    {
        id: '8',
        name: 'Candado',
        price: 2000,
        category: 'Seguridad',
        img:'/Images/candado.webp',
        stock: 10,
        description: 'Candado traba U, grande'
    },
    {
        id: '9',
        name: 'Aceite de Aire',
        price: 1200,
        category: 'Aceite',
        img: '/Images/elfmoto.webp',
        stock: 10,
        description: 'Elf Moto 4 Cruise X 1 Lt 20w-50'
    },
]

// products.forEach(async prod => {
//     await addDoc(collection(db, 'products'))
// })


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

// Retorno una promesa que es un objeto que maneja los estados de una accion. Da 2 funciones, RESOLVE (1er parametro) y REJECT (2do)
// Resuelvo promesa con un valor, en este caso usamos un settimeout para simular el retardo dentro de la promesa, y esa funcion que se ejecuta 1 seg despues, ejecuta Resolve para cambiar el estado de la promesa y devolver el array de productos 