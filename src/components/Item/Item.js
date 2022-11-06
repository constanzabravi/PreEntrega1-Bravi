import { useNavigate } from 'react-router-dom'
import './Item.css'

const Item = ({ img, name, description, id, price }) => {
    const navigate = useNavigate()

    return (
        <div className="container page-wrapper">
            <div className="page-inner">
                <div className="row">
                    <div className="el-wrapper">
                        <div className="box-up">
                            <img className="img1" src={img} alt={name} />
                            <div className="img-info">
                                <div className="info-inner">
                                    <span className="p-name">{name}</span>
                                    <span className="p-company">{description}</span>
                                </div>
                                <div className="a-size">Precio: ${price}</div>
                            </div>
                        </div>

                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner"></div>
                            </div>
                            <div className="cart">
                                <span className="add-to-cart">
                                    <span className="txt" onClick={() => navigate(`/item/${id}`)}>VER DETALLE</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Item