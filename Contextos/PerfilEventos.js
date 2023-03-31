import React, {createContext, useState, useEffect} from 'react'
import eventosPerfil from '../Data/Perfil/Eventos/datosEventosPerfil'
import eventosAprobados from '../Data/Perfil/Eventos/datosEventosPerfilAprobados'
import eventosDenegados from '../Data/Perfil/Eventos/datosEventosPerfilDenegados'
import eventosFinalizados from '../Data/Perfil/Eventos/datosEventosPerfilFinalizados'
import eventosPendientes from '../Data/Perfil/Eventos/datosEventosPerfilPedientes'

export const contextoEventos = createContext()

export const EventosProvider = ({children}) => {

    const [buscar, setBuscar] = useState('')
    const [eventos, setEventos] = useState(eventosPerfil)
    const [filtro, setFiltro] = useState(false)
    const [tabs] = useState(['Todos', 'Aprobados', 'Pendientes', 'Finalizados','Denegados'])
    const [tab, setTab] = useState('Todos')

    const handleFiltro = () => {filtro ? setFiltro(false):setFiltro(true) }

    const handleTab = (tab) => {
        setTab(tab)
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

    useEffect(()=>{
        buscando(buscar)
    },[tab])

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