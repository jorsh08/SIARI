import React, {createContext, useState} from 'react'
import Seguidos from '../Data/datosSeguidores'

export const contextoSeguidos = createContext();

export const SeguidosProvider = ({children}) => {

    const [buscar, setBuscar] = useState('')
    const [seguidos, setSeguidos] = useState(Seguidos)

    const buscando = texto => {
        if (texto == ''){
            setSeguidos(Seguidos)
        }else{
            let auxList = seguidos.filter(item => {
                return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
            })
            setSeguidos(auxList)
        }
    }

    return (
        <contextoSeguidos.Provider
            value={{
                seguidos,
                buscar,
                setBuscar,
                buscando
            }}>
                {children}
        </contextoSeguidos.Provider>
    )
}