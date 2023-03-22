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
    const [lugaresPrev] = useState(dataLugares)

    const [monumentos, setMonumentos] = useState(dataMonumentos)
    const [monumentosPrev] = useState(dataMonumentos)

    const [parques, setParques] = useState(dataParques)
    const [parquesPrev] = useState(dataParques)

    const [recreativos, setRecreativos] = useState(dataReacreativos)
    const [recreativosPrev] = useState(dataReacreativos)

    const handleFiltro = () => {filtro ? setFiltro(false):setFiltro(true) }

    const buscando = texto => {
        console.log(texto)
        if (texto == ''){
            setLugares(lugaresPrev)
            setMonumentos(monumentosPrev)
            setParques(parquesPrev)
            setRecreativos(recreativosPrev)
        }else{
            let auxList = dataLugares.filter(item => {
                return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
            })
            setLugares(auxList)
            auxList = dataMonumentos.filter(item => {
                return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
            })
            setMonumentos(auxList)
            auxList = dataParques.filter(item => {
                return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
            })
            setParques(auxList)
            auxList = dataReacreativos.filter(item => {
                return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
            })
            setRecreativos(auxList)
        }
    }

    return (
        <ContextFil.Provider
        value={{
            filtro,
            buscar,
            lugares,
            monumentos,
            recreativos,
            parques,
            setBuscar,
            handleFiltro,
            buscando
        }}>
            {children}
        </ContextFil.Provider>
    )
}