import { StyleSheet, TouchableOpacity, View, Pressable } from 'react-native'
import React, { useContext } from 'react'
import Lugar from './Lugar'
import {ContextFil} from '../../Contextos/Lugares'

const Lista = () => {

    const { lugares } = useContext(ContextFil)

  return (
    <View style={{flexDirection: 'column', justifyContent: 'center', marginTop: 10}}>
        {lugares.map(lugar=>(
            <Pressable key={lugar.id} onPress={()=>alert('o.0')}>
                <Lugar nombre={lugar.nombre} imagen={lugar.imagen} persona={lugar.persona} direccion={lugar.direccion} horario={lugar.horario} tipo={lugar.tipo}/>
            </Pressable>
        ))}
    </View>
  )
}

export default Lista

const styles = StyleSheet.create({})