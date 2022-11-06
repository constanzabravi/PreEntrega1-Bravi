import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'
//Este hook permite traer los parámetros dinámicos de App.js
import { DotSpinner } from '@uiball/loaders'
import { useAsync } from '../../Hooks/useAsync'
import { getProductById } from '../../ServicesFirebase/firestore/products'

const ItemDetailContainer = () => {
    // const [product, setProduct] = useState({}) //esto es un objeto
    const { productId } = useParams()

    //Hook para navegar hacia la página anterior 
    const navigate = useNavigate()

    const getProductsFromFirestore = () => getProductById(productId)
    const { data: products, error, cargando } = useAsync(getProductsFromFirestore, [productId])

    if (error) {
        <>
        <h1>¡Hubo un error!</h1>
        <p>Pero no te preocupes, no es culpa tuya</p>
        </>
    }

    if (cargando) {
        return (
            <div className="center">
                <h3 className="center">Cargando el detalle del producto..</h3>
                <DotSpinner size={40} speed={0.9} color="black" className="center" />
            </div>
        )
    }

    return (
        <div>
            {/* Botón para volver hacia la página anterior */}
            <button className="volver" onClick={() => navigate(-1)} >Volver</button>
            <h1 className="center">Detalle de producto</h1>
            <ItemDetail  {...products} />
        </div>
    )
}

export default ItemDetailContainer