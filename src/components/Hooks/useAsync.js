import { useState, useEffect } from "react"


//Esta funcion asíncrona (cualquiera que sea) hace toda la logica del componente, sirve para poder reutilizarse
//Recibo dependencia/s por parametro del useEffect
const useAsync = (asyncFn, dependencias) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    // Estado que controla el estado de carga:
    const [cargando, setCargando] = useState(true)

    //En dependencias (al final) espera un array y se puede armar lío me entendes lo que te digo
    if (!Array.isArray(dependencias)) {
        dependencias = []
    }


    //Defino el estado de products con el llamado a la api simulada, dependiendo si es categoría o producto
    useEffect(() => {
        setCargando(true)

        //Obtengo los productos, y el then tiene que retornar una promesa (firebase/products)
        //ATENCION: esta funcion la abstraigo arriba
        //Ejecuta funcion de callback
        asyncFn()
            .then(data => {
                setData(data) //Va a setear datos al estado data (arriba)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setCargando(false)
            }
            )
    }, [...dependencias]) //eslint-disable-line

    //useAsync tiene que devolver un objeto con datos y -cargando-
    return {
        data,
        error,
        cargando
    }

}

export default useAsync