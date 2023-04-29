import React, { createContext, useState, } from 'react'
import {Text} from 'react-native'
export const contextoNotificaciones = createContext();

export const NotificacionesProvider = ({children}) => {

    const [text] = useState('Prueba');

    return (
        <contextoNotificaciones.Provider value={{
            text
        }}>
            {children}
        </contextoNotificaciones.Provider>
    )
}
