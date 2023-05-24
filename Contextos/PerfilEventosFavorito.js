import React, { createContext, useEffect, useState } from 'react'
import Eventos from '../Data/Perfil/Eventos/Favoritos/datosEventosPerfilFavoritos'
import EventosNocturnos from '../Data/Perfil/Eventos/Favoritos/datosEventosNocturnosPerfilFavoritos'
import EventosRecreativos from '../Data/Perfil/Eventos/Favoritos/datosEventosRecreativosPerfilFavoritos'

export const contextoEventos = createContext()

export const EventosProvider = ({children}) => {
    

    const [listado, setListado] = useState(true)
    const [filtro, setFiltro] = useState(false)
    const [buscar, setBuscar] = useState('')
    const [eventos, setEventos] = React.useState(Eventos)
    const [tabs] = useState(['Todo', 'Recreativo', 'Nocturno', 'Test', 'Test1'])
    const [Tab, setTab] = useState('Todo')

    const btnListado = () => setListado(true)
    const handleFiltro = () => {filtro ? setFiltro(false):setFiltro(true) }

    const handleTab = (tab) => {
        setTab(tab)
    }
    
    const buscando = texto => {
        if (texto == ''){
            if (Tab == 'Recreativo'){
                setEventos(EventosRecreativos)
            }
            if (Tab == 'Nocturno'){
                setEventos(EventosNocturnos)
            }
            if (Tab == 'Todo'){
                setEventos(Eventos)
            }
        }else{
            if (Tab == 'Recreativo'){
                let auxList = EventosRecreativos.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setEventos(auxList)
            }
            if (Tab == 'Nocturno'){
                let auxList = EventosNocturnos.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setEventos(auxList)
            }
            if (Tab == 'Todo'){
                let auxList = Eventos.filter(item => {
                    return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
                })
                setEventos(auxList)
            }
        }
    }

    async function cargarLugares(){
        const res = await fetch('http://alexramval.pythonanywhere.com/turismo/getUbicaciones')
        const data = await res.json()
        //setEventos(data)
      }

    useEffect(()=>{
        buscando(buscar)
    },[Tab])

    
  
      useEffect(()=>{
          cargarLugares()
      },[])

    return (
        <contextoEventos.Provider 
        value={{
            eventos,
            listado,
            filtro,
            buscar,
            Tab,
            tabs,
            setTab,
            setBuscar,
            setListado,
            btnListado,
            handleFiltro,
            buscando,
            handleTab
        }}>
            {children}
        </contextoEventos.Provider>
    )
}