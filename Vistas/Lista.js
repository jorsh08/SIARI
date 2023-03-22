import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Lugar from './Lugares/Lugar'
import lugares from '../Data/datosLugares'
import monumentos from '../Data/datosLugaresMonumentos'
import recreativos from '../Data/datosLugaresRecreativos'
import parques from '../Data/datosLugaresRecreativos'

const Lista = ({tipo}) => {

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