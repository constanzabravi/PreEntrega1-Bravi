import { useEffect, useState } from "react" //llamado el estado y lo creo más abajo
import { useParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'
import { getProducts, getProductsByCategory } from "../asyncMock" //llamado de api simulada
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    // estado que controla el estado de la promesa:
    const [cargando, setCargando] = useState(true)
    const { categoryId } = useParams()

    //defino el estado de products con el llamado a la api simulada, dependiendo si es categoría o producto
    useEffect(() => {
        setCargando(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setCargando(false)
        })
    }, [categoryId])

    // mostrar si esto está cargando, y cambia el estado de useState a falso cdo se resuelva la promesa en finally
    if (cargando) {
        return (
            <div className='center'>
                <h1>Cargando...</h1>
                <DotSpinner size={40} speed={0.9} color="black" className="center" />
            </div>
        )
    }

    // para devolver esto basado en el estado de la promesa, necesito un estado que controle el estado de la promesa en itemlistcontainer
    // tengo que transformar los arrays en componentes con el metodo MAP, realizado en ItemList
    // ya transformado el array de componentes, tengo que insertarlos en el DIV como HIJOS 
    return (
        <div>
            <h1 className="title">DYE Motopartes E-commerce</h1>
            <h2 className="title">Listado de productos</h2>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer