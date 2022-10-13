import moto from './assets/moto.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/'>
                <img src={moto} alt='Home' />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/category/Amortiguador'>
                        <button className="margin nav-item nav-link">Amortiguadores</button>
                    </Link>
                    <Link to='/category/Cubiertas'>
                    <button className="margin nav-item nav-link">Cubiertas</button>
                    </Link>
                    <Link to='/category/Filtro'>
                    <button className="margin nav-item nav-link">Filtros</button>
                    </Link>
                    <Link to='/category/Baul'>
                    <button className="margin nav-item nav-link">Baul</button>
                    </Link>
                </div>
            </div>
            <CartWidget />
        </nav >
    )
}

export default NavBar 