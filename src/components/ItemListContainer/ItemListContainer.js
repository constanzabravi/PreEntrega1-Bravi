import { useParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { getProducts } from "../../ServicesFirebase/firestore/products"
import useAsync from "../Hooks/useAsync"

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const getProductsWithCategory = () => getProducts(categoryId)
    //Uso el custom hooks de useAsync, paso dependencias que dependen de categoryId
    //Estoy usando el product
    const { data: products, error, cargando } = useAsync(getProductsWithCategory, [categoryId])


    // Mostrar si esto está cargando, y cambia el estado de useState a falso cdo se resuelva la promesa en finally
    if (cargando) {
        return (
            <div className='center'>
                <h1>Cargando...</h1>
                <DotSpinner size={40} speed={0.9} color="black" className="center" />
            </div>
        )
    }

    //Si tengo un error:
    if(error){
        return <h1>Hubo un error</h1>
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