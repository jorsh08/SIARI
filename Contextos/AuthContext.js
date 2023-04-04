import React, {createContext, useEffect, useState} from 'react'
import data from '../Data/datosLugares'
import iconoParque from '../assets/1.png'
import iconoIglesia from '../assets/2.png'
import iconoRecreativo from '../assets/4.png'

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>  {

    const [lugar, setLugar] = useState([])
    
    const [PuntosTuristicos] = useState(data)
    const [contenedorInformacion, setContenedorLista] = React.useState(false)
    const [puntoTuristico, setPuntoTuristicoInfo] = React.useState({})
    const [lista, setLista] = React.useState([])
    const tipoIcono = [iconoIglesia, iconoRecreativo, iconoParque]

    function getLista(){
      let lista = []
      PuntosTuristicos.forEach( element => {
          lista.push({latitude: parseFloat(element.latitude), longitude: parseFloat(element.longitude), id: element.id, nombre: element.nombre, icono: element.icono, informacion: element.informacion, imagen: element.imagen, tipoIcono: element.tipoIcono})
      });
      setLista(lista)
    }

    async function cargarLugares(){
      const res = await fetch('http://alexramval.pythonanywhere.com/turismo/getUbicaciones')
      const data = await res.json()
    }

    useEffect(()=> {
      //cargarLugares()
    },[])
    
  return (
    <AuthContext.Provider value={{
        PuntosTuristicos,
        contenedorInformacion,
        lista,
        puntoTuristico,
        tipoIcono,
        setContenedorLista,
        getLista,
        setPuntoTuristicoInfo
    }}>
        {children}
    </AuthContext.Provider>
  )
}