import { getDocs, collection, query, where } from 'firebase/firestore' //Query: sirve para buscar base de dato/colecciion y aplicar filtro y Where: indica condicion
import { db } from ".."
import {getDoc, doc} from 'firebase/firestore'
import { createAdaptedProductFromFirestore } from '../../Adapter/productAdapter'

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        //Referencia a la colección 
        const collectionRef = categoryId
            //Filtado, referencia de base de datos y where, donde el campo category sea igual a categoryId
            ? query(collection(db, 'productos'), where('category', '==', categoryId))
            : collection(db, 'productos')

        //Traigo los documentos de la colección de firebase con la función getDocs (de db)
        getDocs(collectionRef).then(response => {
            //Guardar productos adaptados
            //Transformo el array con metodo map
            //La transformacion sale de la respuesta de la propiedad docs que es el array que contiene los productos.
            const productsAdapted = response.docs.map(doc => {
               //Retorno el producto de esta funcion
                return createAdaptedProductFromFirestore(doc)
            })
            //Para poder setear este dato tiene que ser un resolve:
            resolve(productsAdapted)
        }).catch(error => {
            reject(error)
        })
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
            const docRef = doc(db, 'productos', productId) 
            
        getDoc(docRef)
            .then(response => {
                const productAdapted = createAdaptedProductFromFirestore(response)
                resolve(productAdapted)
            })
            .catch(error => {
                reject(error)
            })
    })
}