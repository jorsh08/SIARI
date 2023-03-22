import React, { createContext, useState } from 'react'

export const ContextFil = createContext()


export const FiltroProvider = ({children}) => {

    const [filtro, setFiltro] = useState(true)

    const [buscador, setBuscador] = useState('')

    const handleFiltro = () => {filtro ? setFiltro(false):setFiltro(true) }

    return (
        <ContextFil.Provider
        value={{
            filtro,
            buscador,
            setBuscador,
            handleFiltro
        }}>
            {children}
        </ContextFil.Provider>
    )
}