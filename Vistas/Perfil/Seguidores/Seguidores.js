import { StyleSheet, View } from 'react-native'
import React from 'react'
import EncabezadoSecundario from '../../EncabezadoSecundario'
import Filtro from './Filtro'
import Lista from './Lista'
import {colores} from '../../../Constantes/tema'
import { SeguidoresProvider } from '../../../Contextos/Seguidores'

const Seguidores = () => {
  return (
    <SeguidoresProvider>
      <View style={styles.fondo}>
        <View style={{flexDirection: 'row'}}><EncabezadoSecundario titulo={'Seguidores'}/></View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}><Filtro/></View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 20}}><Lista/></View>
      </View>
    </SeguidoresProvider>
    
  )
}

export default Seguidores

const styles = StyleSheet.create({
  fondo:{
    backgroundColor: colores.Fondo,
    flex: 1,
  },

})