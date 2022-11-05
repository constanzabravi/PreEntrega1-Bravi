import { useState, useEffect } from "react" //llamado a la API con useEffect
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'
import useAsync from "../Hooks/useAsync"
import { getProductById } from '../../ServicesFirebase/firestore/products'

const ItemDetailContainer = () => {
    const { productId } = useParams()

    const getProductsFromFirestore = () => getProductById(productId)
    
    const {data:products, error, cargando} = useAsync(getProductsFromFirestore, [productId])    //Hook para navegar hacia la página anterior 
    const navigate = useNavigate()

    if (error){
        <h1>Hubo Un error</h1>
    }

    if (cargando) {
        return (
            <div className="center">
                <h3 className="center">Cargando el detalle del producto</h3>
                <DotSpinner size={40} speed={0.9} color="black" className="center" />
            </div>
        )
    }

    return (
        <div>
             {/* Botón para volver hacia la página anterior */}
            <button className="volver" onClick={() => navigate(-1)} >Volver</button>
            <h1 className="center">Detalle de producto</h1>
            <ItemDetail key={products.id} {...products} />
        </div>
    )
}

export default ItemDetailContainer