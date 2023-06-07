import { StyleSheet, ScrollView, View } from 'react-native'
import { EventosProvider } from '../../../Contextos/PerfilEventosFavorito';
import React from 'react'
import ListadoEventos from './ListadoEventos'

const EventosFavoritos = () => {

    return(
        <EventosProvider>
            <View style={styles.contPrin}>
                <ScrollView>
                        <ListadoEventos/>
                </ScrollView>
            </View>
        </EventosProvider>
    )
};

const styles = StyleSheet.create({
    contPrin:{
        flex: 1,
        backgroundColor: '#efeae4',
    },
    
    
});

export default EventosFavoritos