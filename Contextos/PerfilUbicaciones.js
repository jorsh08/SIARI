import React, {createContext, useEffect, useState} from 'react'
import ubicacionesPerfil from '../Data/Perfil/Lugares/datosLugaresPerfil'
import ubicacionesAprobados from '../Data/Perfil/Lugares/datosLugaresPerfilAprobados'
import ubicacionesDenegados from '../Data/Perfil/Lugares/datosLugaresPerfilDenegados'
import ubicacionesPendientes from '../Data/Perfil/Lugares/datosLugaresPerfilPendientes'

export const contextoUbicaciones = createContext()

export const UbicacionesProvider = ({children}) => {
    
    const [ubicaciones, setUbicaciones] = useState(ubicacionesPerfil)
    const [buscar, setBuscar] = useState('')
    const [filtro, setFiltro] = useState(false)
    const [tabs] = useState(['Todos', 'Aprobadas', 'Pendientes', 'Denegadas'])
    const [tab, setTab] = useState('Todos')

    const handleFiltro = () => {filtro ? setFiltro(false):setFiltro(true) }

    const handleTab = (tab) => {
        setTab(tab)
    }

    const buscando = texto => {
        if (texto == ''){
            if (tab=='Todos'){
                setUbicaciones(ubicacionesPerfil)
            }
            if (tab=='Aprobadas'){
                setUbicaciones(ubicacionesAprobados)
            }
            if (tab=='Pendientes'){
                setUbicaciones(ubicacionesPendientes)
            }
            if (tab=='Denegadas'){
                setUbicaciones(ubicacionesDenegados)
            }
        }else{
            if (tab=='Todos'){
                let auxList = ubicacionesPerfil.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setUbicaciones(auxList)
            }
            if (tab=='Aprobados'){
                let auxList = ubicacionesAprobados.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setUbicaciones(auxList)
            }
            if (tab=='Pendientes'){
                let auxList = ubicacionesPendientes.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setUbicaciones(auxList)
            }
            if (tab=='Denegados'){
                let auxList = ubicacionesDenegados.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setUbicaciones(auxList)
            }
            
        }
    }

    useEffect(()=>{
        buscando(buscar)
    },[tab])

    return (
        <contextoUbicaciones.Provider value={{
            ubicaciones,
            buscar,
            filtro,
            tabs,
            tab,
            handleFiltro,
            handleTab,
            setTab,
            setFiltro,
            setBuscar,
            buscando,
        }}>
            {children}
        </contextoUbicaciones.Provider>
    )
}