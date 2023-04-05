import React, {createContext, useEffect, useState} from 'react'
import data from '../Data/datosLugares'
import dataMonumentos from '../Data/datosLugaresMonumentos'
import dataParques from '../Data/datosLugaresParques'
import dataReacreativos from '../Data/datosLugaresRecreativos'

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>  {

    const [lugar, setLugar] = useState([])
    const [contenedorInformacion, setContenedorLista] = React.useState(false)
    const [puntoTuristico, setPuntoTuristicoInfo] = React.useState({})
    const [lista, setLista] = React.useState(data)
    const [tabs] = useState(['Todos', 'Parques', 'Monumentos', 'Recreativos'])
    const [tab, setTab] = useState('Todos')
    const [buscar, setBuscar] = useState('')
    const [filtro, setFiltro] = useState(false)

    const handleFiltro = () => {filtro ? setFiltro(false):setFiltro(true) }

    const handleTab = (tab) => {
      setTab(tab)
    }

    const buscando = texto => {
      if (texto == ''){
          if (tab == 'Recreativos'){
              setLista(dataReacreativos)
          }
          if (tab == 'Parques'){
              setLista(dataParques)
          }
          if (tab == 'Monumentos'){
              setLista(dataMonumentos)
          }
          if (tab == 'Todos'){
              setLista(data)
          }
      }else{
          if (tab == 'Recreativos'){
              let auxList = dataReacreativos.filter(item => {
                  return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
              })
              setLista(auxList)
          }
          if (tab == 'Parques'){
              let auxList = dataParques.filter(item => {
                  return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
              })
              setLista(auxList)
          }
          if (tab == 'Monumentos'){
              let auxList = dataMonumentos.filter(item => {
                  return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
              })
              setLista(auxList)
          }
          if (tab == 'Todos'){
              let auxList = data.filter(item => {
                  return item.nombre.toLowerCase().indexOf(texto.toLowerCase())>-1
              })
              setLista(auxList)
          }
          
      }
    }

    async function mostrarInformacion(imagen, nombre){
      setContenedorLista(true)
      setFiltro(false)
      setPuntoTuristicoInfo({nombre: nombre, imagen: imagen})
    }

    async function cargarLugares(){
      const res = await fetch('http://alexramval.pythonanywhere.com/turismo/getUbicaciones')
      const data = await res.json()
    }

    useEffect(()=>{
      buscando(buscar)
    },[tab])

  return (
    <AuthContext.Provider value={{
        contenedorInformacion,
        lista,
        puntoTuristico,
        buscar,
        filtro,
        tabs,
        tab,
        setTab,
        setContenedorLista,
        setPuntoTuristicoInfo,
        setFiltro,
        setBuscar,
        buscando,
        handleFiltro,
        handleTab,
        mostrarInformacion
    }}>
        {children}
    </AuthContext.Provider>
  )
}