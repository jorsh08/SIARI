import React, {createContext, useEffect, useState} from 'react'
import data from '../Data/datosLugares'
import data2 from '../Data/datosEventos'

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>  {
    
    const [listado, setListado] = useState(true)
    const [PuntosTuristicos, setPuntoTuristico] = useState(data)
    const [contenedorInformacion, setContenedorLista] = React.useState(false)
    const [puntoTuristico, setPuntoTuristicoInfo] = React.useState({})

    const [lista, setLista] = React.useState([])

    const handlePuntos = (btn) => {
      setContenedorLista(false)
      setPuntoTuristicoInfo('')
      if (btn == 'Eventos'){
        setPuntoTuristico(data2)
      }else{
        setPuntoTuristico(data)
      }
    }

    function getLista(){
      let lista = []
      PuntosTuristicos.forEach( element => {
          lista.push({latitude: parseFloat(element.latitude), longitude: parseFloat(element.longitude), id: element.id, nombre: element.nombre, icono: element.icono, informacion: element.informacion, imagen: element.imagen})
      });
      setLista(lista)
    }

    const btnListado = () => setListado(false)
    const btnCalendario = () => setListado(true)

    

  return (
    <AuthContext.Provider value={{
        PuntosTuristicos,
        listado,
        contenedorInformacion,
        lista,
        puntoTuristico,
        setContenedorLista,
        btnListado,
        btnCalendario,
        handlePuntos,
        getLista,
        setPuntoTuristicoInfo
    }}>
        {children}
    </AuthContext.Provider>
  )
}