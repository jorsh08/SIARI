import { StyleSheet, View } from 'react-native'
import React from 'react'
import EncabezadoSecundario from '../../EncabezadoSecundario'
import Filtro from './Filtro'
import Lista from './Lista'
import {colores} from '../../../Constantes/tema'
import { SeguidosProvider } from '../../../Contextos/Seguidos'

const Seguidos = () => {
  return (
    <SeguidosProvider>
      <View style={styles.fondo}>
        <View style={{flexDirection: 'row'}}><EncabezadoSecundario titulo={'Seguidos'}/></View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}><Filtro/></View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 20}}><Lista/></View>
      </View>
    </SeguidosProvider>
    
  )
}

export default Seguidos

const styles = StyleSheet.create({
  fondo:{
    backgroundColor: colores.Fondo,
    flex: 1,
  },

})