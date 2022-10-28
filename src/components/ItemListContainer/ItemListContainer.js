import { useEffect, useState } from "react" //llamado el estado y lo creo más abajo
import { useParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { getDocs, collection, query, where } from 'firebase/firestore' //Query: sirve para buscar base de dato/colecciion y aplicar filtro y Where: indica condicion
import { db } from "../../ServicesFirebase"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    // Estado que controla el estado de la promesa:
    const [cargando, setCargando] = useState(true)

    const { categoryId } = useParams()

    //Defino el estado de products con el llamado a la api simulada, dependiendo si es categoría o producto
    useEffect(() => {
        setCargando(true)

        //Referencia a la colección 
        const collectionRef = categoryId
        //Filtado, referencia de base de datos y where, donde el campo category sea igual a categoryId
        ? query(collection(db, 'productos'), where ('category', '==', categoryId))
        : collection(db, 'productos')

        //Traigo los documentos de la colección de firebase con la función getDocs (de db)
        getDocs(collectionRef).then(response => {
            console.log(response)

            //Guardar productos adaptados
            //Transformo el array con metodo map
            //La transformacion sale de la respuesta de la propiedad docs que es el array que contiene los productos.
            const productsAdapted = response.docs.map(doc => {
                //Los campos de datos los obtengo con el método data
                const data = doc.data()
                console.log(data)
                //El id es de Firestore, está aparte entonces lo tengo que transformar/juntar con lo que obtuve del metodo data

                return {id: doc.id, ...data}
            })
console.log(productsAdapted)
setProducts(productsAdapted)

            // setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setCargando(false)
        })
    }, [categoryId])

    // Mostrar si esto está cargando, y cambia el estado de useState a falso cdo se resuelva la promesa en finally
    if (cargando) {
        return (
            <div className='center'>
                <h1>Cargando...</h1>
                <DotSpinner size={40} speed={0.9} color="black" className="center" />
            </div>
        )
    }

    // Para devolver esto basado en el estado de la promesa, necesito un estado que controle el estado de la promesa en itemlistcontainer
    // tengo que transformar los arrays en componentes con el metodo MAP, realizado en ItemList
    // ya transformado el array de componentes, tengo que insertarlos en el DIV como HIJOS 
    return (
        <div>
            <h1 className="title">DYE Motopartes</h1>
            <h2 className="title">Listado de productos</h2>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer