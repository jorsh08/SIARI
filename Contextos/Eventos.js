import React, { createContext, useEffect, useState } from 'react'
import Eventos from '../Data/datosEventos'

export const contextoEventos = createContext()

export const EventosProvider = ({children}) => {

    const [eventos] = React.useState(Eventos)
    const [tEventos, setTEventos] = React.useState([])
    const [marcadores, setMarcadores] = React.useState({})
    const [marcadoresC, setMarcadoresC] = React.useState([])
    const [listado, setListado] = useState(true)
    const btnListado = () => setListado(true)
    const btnCalendario = () => setListado(false)

    function sMarcadores () {
      let marcadores = {};
      let iC=0;
      let marcadoresAux = [];
      let fechas=[];
      let marcadoresC = [];
      let coloresE = ['#62b461','#f85d5a','#F7DC72','#4D57F7','#C46033','#91796E','#97F89B','#F9A6A4']
      eventos.forEach(evento => {
        if (!marcadores.hasOwnProperty(evento.fecha)) {
            marcadoresAux.push({fecha: {}})
            marcadores[evento.fecha] = {};
            marcadoresAux[evento.fecha] = [];
            fechas.push(evento.fecha);
        }
        (iC>coloresE.length)?iC=0:iC;
            marcadoresAux[evento.fecha].push({color:coloresE[iC]});
            marcadoresC.push(coloresE[iC])
            iC++;
        });
        setMarcadoresC(marcadoresC);
            fechas.forEach(fecha =>{
            marcadores[fecha]=({dots: marcadoresAux[fecha]});
        });
            setMarcadores(marcadores);
        }

    useEffect(()=>{
        setTEventos(["hola","Recreativo"]);
        sMarcadores()
    },[]);

    return (
        <contextoEventos.Provider 
        value={{
            eventos,
            tEventos,
            listado,
            setListado,
            btnListado,
            btnCalendario,
            marcadores,
            marcadoresC
        }}>
            {children}
        </contextoEventos.Provider>
    )
}