import './NavBar.css'
// import logo from "./assets"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">ProgramAR</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height': 100 + 'px'}}>
                        <li className="nav-item">
                            <a className="text-white nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-white nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="text-white nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cursos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Curso de Frontend Developer</a></li>
                                <li><a className="dropdown-item" href="#">Curso de Backend Developer</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" href="#">Curso de Data Science</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="text-white nav-link disabled">Ayuda</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="search"></input>
                        <button className="btn btn-dark" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar 