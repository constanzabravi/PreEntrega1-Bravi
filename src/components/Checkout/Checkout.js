
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../ServicesFirebase/index'


const docRef = doc(db, 'products')


    return (
        <div>git 
            <h1>Checkout</h1>
            <button onClick={createOrder}>generar orden</button>
        </div>
    )


export default Checkout