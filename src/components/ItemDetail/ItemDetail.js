import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { useCart } from '../../CartContext/CartContext'
import { useContext, useState } from 'react'
import '../asyncMock'

//Componente de visualización de ItemDetailContainer 

const ItemDetail = ({ id, img, name, category, price, stock, description }) => {
    const [goToCart, setGoToCart] = useState (false)

    const { addItem } = useCart();

    const onAdd = (count) => {
        const productToAdd = {
            id,
            name,
            category,
            price,
            description
        }
        setGoToCart(true);
        addItem(productToAdd, count);

    }

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

                        {goToCart
                            ? <Link to='/cart'>Terminar Compra</Link>
                            : <ItemCount onAdd={onAdd} stock={stock} />
                        }

                    </div>
                </div>
            </div>
        </div>


    )
}

export default ItemDetail