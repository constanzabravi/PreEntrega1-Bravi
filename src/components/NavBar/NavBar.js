import moto from './assets/moto.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../ServicesFirebase'

const NavBar = () => {
    const [categories, setCategories] = useState([])
//Consultar categorias. Traigo documentos de la coleccion categories
//Para eso creo la referencia con esta función collection, con la base de datos y la categoria determinada

useEffect(() => {
    const collectionRef = collection(db, 'categories') 
    getDocs(collectionRef).then(response => {
        const categoriesAdapted = response.docs.map(doc =>{
            const data = doc.data()
            const id = doc.id
            return {id, ...data}
        })
        setCategories(categoriesAdapted)
    })
 }, [])

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
{ categories.map(cat => {
                return(
                <Link key={cat.id} to={`/category/${cat.slug}`}> {cat.label} </Link>
              )})
            } 
</div>
</div>


            
            <CartWidget />
        </nav >
    )
}

export default NavBar 