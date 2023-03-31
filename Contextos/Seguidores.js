import React, {createContext, useState} from 'react'
import Seguidores from '../Data/datosSeguidores'

export const contextoSeguidores = createContext();

export const SeguidoresProvider = ({children}) => {

    const [buscar, setBuscar] = useState('')
    const [seguidores, setSeguidores] = useState(Seguidores)

    const buscando = texto => {
        if (texto == ''){
            setSeguidores(Seguidores)
        }else{
            let auxList = Seguidores.filter(item => {
                return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
            })
            setSeguidores(auxList)
        }
    }

    return (
        <contextoSeguidores.Provider
            value={{
                seguidores,
                buscar,
                setBuscar,
                buscando
            }}>
                {children}
        </contextoSeguidores.Provider>
    )
}