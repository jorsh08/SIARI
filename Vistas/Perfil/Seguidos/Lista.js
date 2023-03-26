import { View, Pressable } from 'react-native'
import React, {useContext} from 'react'
import {contextoSeguidos} from '../../../Contextos/Seguidos'
import Seguido from './Seguido'

const Lista = () => {

    const {seguidos} = useContext(contextoSeguidos)

  return (
    <View style={{flexDirection: 'column'}}>
        {seguidos.map(seguidor=>(
            <Pressable key={seguidor.nombre} onPress={()=>alert('o.O')}>
                <Seguido nombre={seguidor.nombre} apellido={seguidor.apellido} img={seguidor.img}/>
            </Pressable>
        ))}
    </View>
  )
}

export default Lista
