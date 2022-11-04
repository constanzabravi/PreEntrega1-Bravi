import moto from './assets/moto.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'
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
            const categoriesAdapted = response.docs.map(doc => {
                const data = doc.data()
                const id = doc.id
                return { id, ...data }
            })
            setCategories(categoriesAdapted)
        })
    }, [])

    return (
        <nav className="nav">
            <Link to='/'>
                <img src={moto} alt='Home'/>
            </Link> 
            <Link className="Option" to='/'>
                Home
            </Link>
            <div className="categorias">
          {
            categories.map(cat => (
              <Link key={cat.id} to={`/category/${cat.slug}`} className={'Option'}>{cat.label}</Link>
            ))
          }
            </div>
            <CartWidget />
        </nav >
    )
}

export default NavBar 