import { ScrollView, StyleSheet, View } from 'react-native'
import { EventosProvider } from '../../../Contextos/PerfilEventos'
import {colores} from '../../../Constantes/tema'
import React from 'react'
import EncabezadoSecundario from '../../EncabezadoSecundario'
import Filtro from './Filtro'
import Lista from './Lista'
import Tabs from './Tabs'

const Eventos = () => {
  return (
    <EventosProvider>
        <View style={styles.fondo}>
          <ScrollView>
              <View style={{flexDirection: 'row'}}><EncabezadoSecundario titulo={'Eventos organizados'}/></View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}><Filtro/></View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}><Tabs/></View>      
              <View style={{flexDirection: 'row', justifyContent: 'center'}}><Lista/></View>                          
          </ScrollView>
        </View>
    </EventosProvider>
  )
}

export default Eventos

const styles = StyleSheet.create({
    fondo:{
      backgroundColor: colores.Fondo,
      flex: 1,
    },
  
  })