import { useEffect, useState } from "react" //llamado a la API con useEffect
import './ItemDetailContainer.css'
import { getProductById } from "../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
//Este hook permite traer los parámetros dinámicos de App.js
import { DotSpinner } from '@uiball/loaders'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({}) //esto es un objeto
    const [cargando, setCargando] = useState(true)
    const { productId } = useParams()

    //ejecuto la funcion getProductbyId -simulacion de Api- cuando se monte el componente o cambie el productId
    //cuando lo ejecute y se resuelva la promesa, devuelve el objeto con un producto
    //ese producto lo guardo como estado en el componente, creo el estado.
    //Finalmente, este componente se encarga de la lógica, y se visualiza con ItemDetail
    useEffect(() => {
        setCargando(true)
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setCargando(false)
        })
    }, [productId])

    if (cargando) {
        return ( 
        <div className= "center">
        <h3 className= "center">Cargando el detalle del producto</h3>
        <DotSpinner  size={40} speed={0.9} color="black" className= "center"/>
        </div>
        )
    }

    return (
        <div>
            <h1 className= "center">Detalle de producto</h1>
            <ItemDetail key={product.id} {...product} />
        </div>
    )
}

export default ItemDetailContainer