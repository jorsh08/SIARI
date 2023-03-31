import { StyleSheet, View, Pressable } from 'react-native'
import React, { useContext } from 'react'
import Lugar from './Lugar'
import {ContextFil} from '../../Contextos/Lugares'
import { useNavigation } from '@react-navigation/native';

const Lista = () => {
    const navigation = useNavigation(); 
    const { lugares } = useContext(ContextFil)

  return (
    <View style={{flexDirection: 'column', justifyContent: 'center'}}>
        {lugares.map(lugar=>(
            <Pressable key={lugar.id} onPress={()=>navigation.navigate('PuntoTuristico', lugar)}>
                <Lugar nombre={lugar.nombre} imagen={lugar.imagen} persona={lugar.persona} direccion={lugar.direccion} horario={lugar.horario} tipo={lugar.tipo}/>
            </Pressable>
        ))}
    </View>
  )
}

export default Lista

const styles = StyleSheet.create({})