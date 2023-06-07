import React, {createContext, useEffect, useState} from 'react'
import dataUsuario from '../Data/Perfil/Perfil'
import dataLugares from '../Data/datosLugares'

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>  {

    const [NombreUbicaciones] = useState({8: 'AlvaroObregon', 9: 'RelojSol', 10: 'RelojMundial', 11:'Palacio', 12:'Bibloteca', 13: 'Catedral'})
    const [informacion, setInformacion] = React.useState({})
    const [ubicaciones, setUbicaciones] = React.useState(dataLugares)
    const [usuario] = useState(dataUsuario)


    const ocultarInfoPunto = () => {
        setInformacion({nombre: null, imagen: null, info: false})
    }

    const cargarLugares = async () => {
        const data = await fetch('https://alexramval.pythonanywhere.com/turismo/getRealidad')
        const res = await data.json()
        setUbicaciones(res)
    }
   
    useEffect(()=>{
        //cargarLugares();
    },[])

  return (
    <AuthContext.Provider value={{
        informacion,
        ubicaciones,
        usuario,
        NombreUbicaciones,
        ocultarInfoPunto,
        setInformacion,
    }}>
        {children}
    </AuthContext.Provider>
  )
}