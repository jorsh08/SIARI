import { StyleSheet, View, ScrollView,Text } from 'react-native'
import React from 'react'
import { NotificacionesProvider, contextoNotificaciones } from '../../Contextos/Notificaciones'
import Filtro from './Filtro'
import Encabezado from '../Encabezado'
import ListadoEventos from './ListadoNotificaciones'

const Notificaciones = () => {
  return (
    <NotificacionesProvider>
        <View style={[styles.fondo, {flexDirection: 'row'}]}>
            <ScrollView >
                <View style={{ alignItems: 'center', flexDirection: 'column'}}>
                    <Encabezado titulo={'Notificaciones'}/>
                    
                </View>
                    <ListadoEventos/>
            </ScrollView>
        </View>
    </NotificacionesProvider>
  )
}

export default Notificaciones

const styles = StyleSheet.create({
    fondo: {
        height: '100%', 
        backgroundColor: '#efeae4',
    }
})