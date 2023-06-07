import { StyleSheet, ScrollView, View, Text } from 'react-native'
import React from 'react'
import ListadoEventos from "./EventosFavoritos/ListadoEventos";
import  EventosProvider  from '../../Contextos/PerfilEventosFavorito';
import  EventosFavoritos  from "./EventosFavoritos/EventosFavoritos";

const Eventos = () => {
    

    return(
            <EventosFavoritos/>
    )
}

const styles = StyleSheet.create({
    contPrin:{
        flex: 1,
        backgroundColor: '#efeae4',
    },
    
    
})

export default Eventos