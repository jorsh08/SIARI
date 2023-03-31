import React, { createContext, useEffect, useState } from 'react'
import Eventos from '../Data/datosEventos'
import EventosNocturnos from '../Data/datosEventosNocturnos'
import EventosRecreativos from '../Data/datosEventosRecreativos'

export const contextoEventos = createContext()

export const EventosProvider = ({children}) => {
    
    const [marcadores, setMarcadores] = React.useState({})
    const [marcadoresC, setMarcadoresC] = React.useState([])
    const [listado, setListado] = useState(true)
    const [filtro, setFiltro] = useState(false)
    const [buscar, setBuscar] = useState('')
    const [eventos, setEventos] = React.useState(Eventos)
    const [tabs] = useState(['Todo', 'Recreativo', 'Nocturno', 'Test', 'Test1'])
    const [Tab, setTab] = useState('Todo')

    const btnListado = () => setListado(true)
    const btnCalendario = () => setListado(false)
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
        sMarcadores()
    },[]);

    useEffect(()=>{
        buscando(buscar)
    },[Tab])

    return (
        <contextoEventos.Provider 
        value={{
            eventos,
            listado,
            marcadores,
            marcadoresC,
            filtro,
            buscar,
            Tab,
            tabs,
            setTab,
            setBuscar,
            setListado,
            btnListado,
            btnCalendario,
            handleFiltro,
            buscando,
            handleTab
        }}>
            {children}
        </contextoEventos.Provider>
    )
}