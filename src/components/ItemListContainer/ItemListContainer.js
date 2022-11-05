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
                <h1>Cargando tu mejor experiencia...</h1>
                <DotSpinner size={40} speed={0.9} color="black" className="center" />
            </div>
        )
    }

    //Si tengo un error:
    if (error) {
        return <h1>Hubo un error</h1>
    }

    // Para devolver esto basado en el estado de la promesa, necesito un estado que controle el estado de la promesa en itemlistcontainer
    // tengo que transformar los arrays en componentes con el metodo MAP, realizado en ItemList
    // ya transformado el array de componentes, tengo que insertarlos en el DIV como HIJOS 
    return (
        <div>
           {!categoryId && <div className="space">
                <h1 className="title1">No importa donde vayas,<br /> te acompañamos <br />en tu camino.</h1>
            </div>
             }
            <h2 className="title2">Nosotros</h2>
            <article className='center'>
                <h3>Somos una distribuidora mayorista de motopartes</h3>
                <p>Si tenés un comercio y te interesa vender nuestros productos, contactanos para recibir asesoramiento.</p>
            </article>
            <h2 className="title2">Listado de nuestros productos</h2>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer