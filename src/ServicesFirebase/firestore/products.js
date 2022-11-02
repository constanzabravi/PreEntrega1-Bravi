// const getProducts = () => {

//     //Referencia a la colección 
//     const collectionRef = categoryId
//         //Filtado, referencia de base de datos y where, donde el campo category sea igual a categoryId
//         ? query(collection(db, 'productos'), where('category', '==', categoryId))
//         : collection(db, 'productos')

//     //Traigo los documentos de la colección de firebase con la función getDocs (de db)
//     getDocs(collectionRef).then(response => {
//         console.log(response)

//         //Guardar productos adaptados
//         //Transformo el array con metodo map
//         //La transformacion sale de la respuesta de la propiedad docs que es el array que contiene los productos.
//         const productsAdapted = response.docs.map(doc => {
//             //Los campos de datos los obtengo con el método data
//             const data = doc.data()
//             console.log(data)
//             //El id es de Firestore, está aparte entonces lo tengo que transformar/juntar con lo que obtuve del metodo data

//             return { id: doc.id, ...data }
//         })
//         console.log(productsAdapted)
//         setProducts(productsAdapted)

//         // setProducts(response)
//     }).catch(error => {
//         console.log(error)
//     }).finally(() => {
//         setCargando(false)
//     })
// }