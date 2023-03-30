import { ScrollView, StyleSheet, View } from 'react-native'
import { UbicacionesProvider } from '../../../Contextos/PerfilUbicaciones'
import {colores} from '../../../Constantes/tema'
import React from 'react'
import EncabezadoSecundario from '../../EncabezadoSecundario'
import Filtro from './Filtro'
import Lista from './Lista'
import Tabs from './Tabs'

const Ubicaciones = () => {
  return (
    <UbicacionesProvider>
        <View style={styles.fondo}>
          <ScrollView>
              <View style={{flexDirection: 'row'}}><EncabezadoSecundario titulo={'Mis ubicaciones'}/></View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}><Filtro/></View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}><Tabs/></View>      
              <View style={{flexDirection: 'row', justifyContent: 'center'}}><Lista/></View>                          
          </ScrollView>
        </View>
    </UbicacionesProvider>
  )
}

export default Ubicaciones

const styles = StyleSheet.create({
    fondo:{
      backgroundColor: colores.Fondo,
      flex: 1,
    },
  
  })