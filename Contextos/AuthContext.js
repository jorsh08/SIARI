import React, {createContext, useState} from 'react'
import data from '../Data/datosLugares'

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>  {
    
    const [PuntosTuristicos] = useState(data)

  return (
    <AuthContext.Provider value={{
        PuntosTuristicos,
    }}>
        {children}
    </AuthContext.Provider>
  )
}