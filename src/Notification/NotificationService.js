import { useState, createContext } from "react"
import React from 'react'

//El Context me comparte la función y dentro del provider voy a tener los componentes hijos
//Envuelvo toda la aplicación 

const Notification = ({ message, severity }) => {
    const notificationStyles = {
        position: "absolute",
        top: 100,
        right: 10,
        height: "auto",
        width: "auto",
        backgroundColor: severity === "success" ? "green" : "red",
        color: "black",
        padding: "20px 20px 20px 20px",
    }

//Si message -string vacío- viene vacío, se corta su ejecución con el return:
if (message === '') return

    return ( //Acá va un mensaje dinámico
        <div style={notificationStyles}>
            {message}
        </div>
    )
}

//Logica del servicio de notificaciones

//Exporto la referencia
export const NotificationContext = createContext()

//Acá va un mensaje que viene de afuera del context y lo tengo que guardar en el provider
export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    //Guardar datos con los estilos y mensajes.    
    const setNotification = (severity, message, time = 2) => {
        setSeverity(severity) //Seteo la severidad (ej, es rojo o verde)
        setMessage(message) //Seteo el mensaje (qué voy a mostrar)
        setTimeout(() => {
            setMessage('')
        }, time * 1000); //Tiempo en el que aparece el mensaje y desaparece
    }

        return (
            <NotificationContext.Provider value={{setNotification}}>
                <Notification severity={severity} message={message} />
                {children}
            </NotificationContext.Provider>
        )

    }

export default NotificationContext
