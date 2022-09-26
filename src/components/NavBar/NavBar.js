import moto from '../CartWidget/assets/moto.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css' 

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={moto} alt='cart' />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <button className="margin nav-item nav-link active">Home</button>
                    <button className="margin nav-item nav-link">Nosotros</button>
                    <button className="margin nav-item nav-link">Productos</button>
                    <button className="margin nav-item nav-link">Contacto</button>
                </div>
            </div>
            <CartWidget />
        </nav >
    )
}

export default NavBar 