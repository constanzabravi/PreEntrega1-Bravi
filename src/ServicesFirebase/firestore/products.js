import { getDocs, collection, query, where, orderBy } from 'firebase/firestore' //Query: sirve para buscar base de dato/colecciion y aplicar filtro y Where: indica condicion
import { getDoc, doc } from 'firebase/firestore'
import { db } from ".."
import { createAdaptedProductFromFirestore } from '../../Adapter/productAdapter'
import { createAdaptedCategoryFromFirestore } from '../../Adapter/categoryAdapter'

//Refactorizacion de itemlistcontainer 

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

//Refactorizacion del itemdetailcontainer 

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

//Refactorización de categorias de navbar 

export const getProductByCategory=()=>{

    return new Promise((resolve, reject) => {
    
        const collectionRef = query (collection(db, 'categories'), orderBy("order"));

        getDocs(collectionRef).then(response =>{
            const categoriesAdapted = response.docs.map(doc => {
                return createAdaptedCategoryFromFirestore(doc)
            })
            resolve(categoriesAdapted)
            })
            .catch(error => {
                reject(error)
            })
    })
}