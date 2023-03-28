import React, {createContext, useState} from 'react'
import eventosPerfil from '../Data/datosEventosPerfil'
import eventosAprobados from '../Data/datosEventosPerfilAprobados'
import eventosDenegados from '../Data/datosEventosPerfilDenegados'
import eventosFinalizados from '../Data/datosEventosPerfilFinalizados'
import eventosPendientes from '../Data/datosEventosPerfilPedientes'

export const contextoEventos = createContext()

export const EventosProvider = ({children}) => {

    const [buscar, setBuscar] = useState('')
    const [eventos, setEventos] = useState(eventosPerfil)
    const [filtro, setFiltro] = useState(false)
    const [tabs] = useState(['Todos', 'Aprobados', 'Pendientes', 'Finalizados','Denegados'])
    const [tab, setTab] = useState('Todos')

    const handleFiltro = () => {filtro ? setFiltro(false):setFiltro(true) }

    const handleTab = (i) => {
        setTab(i)
        if (i == 'Todos'){
            setEventos(eventosPerfil)
        }
        if (i == 'Aprobados'){
            setEventos(eventosAprobados)
        }
        if (i == 'Pendientes'){
            setEventos(eventosPendientes)
        }
        if (i == 'Finalizados'){
            setEventos(eventosFinalizados)
        }
        if (i == 'Denegados'){
            setEventos(eventosDenegados)
        }
    }

    const buscando = texto => {
        if (texto == ''){
            if (tab=='Todos'){
                setEventos(eventosPerfil)
            }
            if (tab=='Aprobados'){
                setEventos(eventosAprobados)
            }
            if (tab=='Pendientes'){
                setEventos(eventosPendientes)
            }
            if (tab=='Finalizados'){
                setEventos(eventosFinalizados)
            }
            if (tab=='Denegados'){
                setEventos(eventosDenegados)
            }
        }else{
            if (tab=='Todos'){
                let auxList = eventosPerfil.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setEventos(auxList)
            }
            if (tab=='Aprobados'){
                let auxList = eventosAprobados.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setEventos(auxList)
            }
            if (tab=='Pendientes'){
                let auxList = eventosPendientes.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setEventos(auxList)
            }
            if (tab=='Finalizados'){
                let auxList = eventosFinalizados.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setEventos(auxList)
            }
            if (tab=='Denegados'){
                let auxList = eventosDenegados.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setEventos(auxList)
            }
            
        }
    }


    return (
        <contextoEventos.Provider value={{
            eventos,
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
        </contextoEventos.Provider>
    )
}