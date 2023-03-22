import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useContext } from 'react'
import Lugar from './Lugar'
import {ContextFil} from '../../Contextos/Lugares'

const Lista = ({tipo}) => {

    const { lugares, monumentos, recreativos, parques } = useContext(ContextFil)

  return (
    <View style={{flexDirection: 'column', justifyContent: 'center'}}>
        {
            (tipo == 'todos')?
            lugares.map(lugar=>(<TouchableOpacity key={lugar.id} onPress={()=>alert('o.0')}><Lugar nombre={lugar.nombre} imagen={lugar.imagen} persona={lugar.persona} direccion={lugar.direccion} horario={lugar.horario} tipo={lugar.tipo}/></TouchableOpacity>)):<View/> 
        }
        {
            (tipo == 'monumentos')? 
            monumentos.map(lugar=>(<TouchableOpacity key={lugar.id}><Lugar nombre={lugar.nombre} imagen={lugar.imagen} persona={lugar.persona} direccion={lugar.direccion} horario={lugar.horario} tipo={lugar.tipo}/></TouchableOpacity>)):<View/> 
        }
        {
            (tipo == 'recreativos')? 
            recreativos.map(lugar=>(<TouchableOpacity key={lugar.id}><Lugar nombre={lugar.nombre} imagen={lugar.imagen} persona={lugar.persona} direccion={lugar.direccion} horario={lugar.horario} tipo={lugar.tipo}/></TouchableOpacity>)):<View/> 
        }
        {
            (tipo == 'parques')? 
            parques.map(lugar=>(<TouchableOpacity key={lugar.id}><Lugar nombre={lugar.nombre} imagen={lugar.imagen} persona={lugar.persona} direccion={lugar.direccion} horario={lugar.horario} tipo={lugar.tipo}/></TouchableOpacity>)):<View/> 
        }
      
    </View>
  )
}

export default Lista

const styles = StyleSheet.create({})