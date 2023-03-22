import { StyleSheet, ScrollView, View } from 'react-native'
import { EventosProvider } from '../../Contextos/Eventos';
import React from 'react'
import SeleccionEventos from './SeleccionEventos'
import Encabezado from '../Encabezado';
import Listado from './Listado';

const Eventos = () => {

    return(
        <EventosProvider>
            <View style={styles.contPrin}>
                <ScrollView>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Encabezado titulo={'Eventos'}/>
                        <SeleccionEventos/>
                    </View>
                        <Listado/>
                </ScrollView>
            </View>
        </EventosProvider>
    )
}

const styles = StyleSheet.create({
    contPrin:{
        flex: 1,
        backgroundColor: '#efeae4',
    },
    
    
})

export default Eventos