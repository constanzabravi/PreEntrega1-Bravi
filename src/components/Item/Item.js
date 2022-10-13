import { useNavigate } from 'react-router-dom'

const Item = ({ img, name, category, id, price }) => {
    const navigate = useNavigate()

    return (
        <div className="col">
            <div className="card h-100">
                <img className="img" src={img} alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Categoría: {category}</h6>
                    <p className="card-text">${price}</p>
                    <button onClick={() => navigate(`/item/${id}`)}>VER DETALLE</button>
                </div>
            </div>
        </div>


    )

}

export default Item