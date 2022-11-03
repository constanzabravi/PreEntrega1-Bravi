import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext } from 'react'
import { NotificationContext } from '../../Notification/NotificationService'
import { CartContext } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'
//Componente de visualización de ItemDetailContainer con contador

const ItemDetail = ({ id, img, name, category, price, stock, description }) => {

    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    // Funciones del contador
    //Paso los datos
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id,
            name,
            category,
            price,
            description,
            quantity,
            stock,
        }
        //Agrego el producto
        addItem(productToAdd)
        setNotification('success', `Se agrego correctamente ${quantity} ${name}`)
    }

    const quantityAdded = getProductQuantity(id)

    return (
        <div className="center row row-cols-1 row-cols-md-4 g-1">
            <div className="col">
                <div className="card h-100">
                    <img className="img card-img-top" src={img} alt={name} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <h6>Categoría: {category}</h6>
                        <p className="card-text">Descripción: {description}</p>
                        <p className="card-text">Precio: ${price}</p>
                        <p className="card-text">Stock: {stock}</p>

                        <footer>
                        {stock !==0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} category={category}/>
                        :<h2 className='stock'>SIN STOCK</h2>}
                        {isInCart(id) && <Link to= '/cart' className= 'ButtonF'>FINALIZAR COMPRA</Link>}
                        </footer>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail