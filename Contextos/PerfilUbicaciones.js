import React, {createContext, useState} from 'react'
import ubicacionesPerfil from '../Data/Perfil/Lugares/datosLugaresPerfil'
import ubicacionesAprobados from '../Data/Perfil/Lugares/datosLugaresPerfilAprobados'
import ubicacionesDenegados from '../Data/Perfil/Lugares/datosLugaresPerfilDenegados'
import ubicacionesFinalizados from '../Data/Perfil/Lugares/datosLugaresPerfilFinalizados'
import ubicacionesPendientes from '../Data/Perfil/Lugares/datosLugaresPerfilPendientes'

export const contextoUbicaciones = createContext()

export const UbicacionesProvider = ({children}) => {

    const [buscar, setBuscar] = useState('')
    const [ubicaciones, setUbicaciones] = useState(ubicacionesPerfil)
    const [filtro, setFiltro] = useState(false)
    const [tabs] = useState(['Todos', 'Aprobados', 'Pendientes', 'Finalizados','Denegados'])
    const [tab, setTab] = useState('Todos')

    const handleFiltro = () => {filtro ? setFiltro(false):setFiltro(true) }

    const handleTab = (i) => {
        setTab(i)
        if (i == 'Todos'){
            setUbicaciones(ubicacionesPerfil)
        }
        if (i == 'Aprobados'){
            setUbicaciones(ubicacionesAprobados)
        }
        if (i == 'Pendientes'){
            setUbicaciones(ubicacionesPendientes)
        }
        if (i == 'Finalizados'){
            setUbicaciones(ubicacionesFinalizados)
        }
        if (i == 'Denegados'){
            setUbicaciones(ubicacionesDenegados)
        }
    }

    const buscando = texto => {
        if (texto == ''){
            if (tab=='Todos'){
                setUbicaciones(ubicacionesPerfil)
            }
            if (tab=='Aprobados'){
                setUbicaciones(ubicacionesAprobados)
            }
            if (tab=='Pendientes'){
                setUbicaciones(ubicacionesPendientes)
            }
            if (tab=='Finalizados'){
                setUbicaciones(ubicacionesFinalizados)
            }
            if (tab=='Denegados'){
                setUbicaciones(ubicacionesDenegados)
            }
        }else{
            if (tab=='Todos'){
                let auxList = eventosPerfil.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setUbicaciones(auxList)
            }
            if (tab=='Aprobados'){
                let auxList = eventosAprobados.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setUbicaciones(auxList)
            }
            if (tab=='Pendientes'){
                let auxList = eventosPendientes.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setUbicaciones(auxList)
            }
            if (tab=='Finalizados'){
                let auxList = eventosFinalizados.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setUbicaciones(auxList)
            }
            if (tab=='Denegados'){
                let auxList = eventosDenegados.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setUbicaciones(auxList)
            }
            
        }
    }


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