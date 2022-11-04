import { useNavigate } from 'react-router-dom'
import './Item.css'

const Item = ({ img, name, description, id, price }) => {
    const navigate = useNavigate()

    return (
        <div class="container page-wrapper">
            <div class="page-inner">
                <div class="row">
                    <div class="el-wrapper">
                        <div class="box-up">
                            <img className="img1" src={img} alt={name} />
                            <div class="img-info">
                                <div class="info-inner">
                                    <span class="p-name">{name}</span>
                                    <span class="p-company">{description}</span>
                                </div>
                                <div class="a-size">Precio: ${price}</div>
                            </div>
                        </div>

                        <div class="box-down">
                            <div class="h-bg">
                                <div class="h-bg-inner"></div>
                            </div>
                            <a class="cart">
                                <span class="add-to-cart">
                                    <span class="txt" onClick={() => navigate(`/item/${id}`)}>VER DETALLE</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Item