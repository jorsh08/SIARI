import React, { createContext, useState } from 'react'
import dataLugares from '../Data/datosLugares'
import dataMonumentos from '../Data/datosLugaresMonumentos'
import dataParques from '../Data/datosLugaresParques'
import dataReacreativos from '../Data/datosLugaresRecreativos'

export const ContextFil = createContext()


export const FiltroProvider = ({children}) => {

    const [filtro, setFiltro] = useState(true)
    const [buscar, setBuscar] = useState('')
    const [lugares, setLugares] = useState(dataLugares)
    const [tabs] = useState(['Todo', 'Monumentos', 'Recreativos', 'Parques'])
    const [Tab, setTab] = useState('Todo')

    const handleFiltro = () => {filtro ? setFiltro(false):setFiltro(true) }

    const handleTab = (tab) => {
        setTab(tab)
        if (tab == 'Recreativos'){
            setLugares(dataReacreativos)
        }
        if (tab == 'Monumentos'){
            setLugares(dataMonumentos)
        }
        if (tab == 'Parques'){
            setLugares(dataParques)
        }
        if (tab == 'Todo'){
            setLugares(dataLugares)
        }
    }

    const buscando = texto => {
        if (texto == ''){
            if (Tab == 'Recreativos'){
                setLugares(dataReacreativos)
            }
            if (Tab == 'Parques'){
                setLugares(dataParques)
            }
            if (Tab == 'Monumentos'){
                setLugares(dataMonumentos)
            }
            if (Tab == 'Todo'){
                setLugares(dataLugares)
            }
        }else{
            if (Tab == 'Recreativos'){
                let auxList = dataReacreativos.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setLugares(auxList)
            }
            if (Tab == 'Parques'){
                let auxList = dataParques.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setLugares(auxList)
            }
            if (Tab == 'Monumentos'){
                let auxList = dataMonumentos.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setLugares(auxList)
            }
            if (Tab == 'Todo'){
                let auxList = dataLugares.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setLugares(auxList)
            }
            
        }
    }

    return (
        <ContextFil.Provider
        value={{
            filtro,
            buscar,
            lugares,
            Tab,
            tabs,
            setBuscar,
            handleFiltro,
            buscando,
            handleTab
        }}>
            {children}
        </ContextFil.Provider>
    )
}