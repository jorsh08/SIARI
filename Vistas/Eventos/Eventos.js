import { StyleSheet, ScrollView, View } from 'react-native'
import { EventosProvider } from '../../Contextos/Eventos';
import React from 'react'
import SeleccionEventos from './SeleccionEventos'
import Encabezado from '../Encabezado';
import Listado from './Listado';
import Filtro from './Filtro';
import Tabs from './Tabs';

const Eventos = () => {

    return(
        <EventosProvider>
            <View style={styles.contPrin}>
                <ScrollView>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Encabezado titulo={'Eventos'}/>
                        <SeleccionEventos/>
                        <Filtro/>
                        <Tabs/>
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