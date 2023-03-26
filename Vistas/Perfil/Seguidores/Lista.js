import { View, Pressable } from 'react-native'
import React, {useContext} from 'react'
import {contextoSeguidores} from '../../../Contextos/Seguidores'
import Seguidor from './Seguidor'

const Lista = () => {

    const {seguidores} = useContext(contextoSeguidores)

  return (
    <View style={{flexDirection: 'column'}}>
        {seguidores.map(seguidor=>(
            <Pressable key={seguidor.nombre} onPress={()=>alert('o.O')}>
                <Seguidor nombre={seguidor.nombre} apellido={seguidor.apellido} img={seguidor.img}/>
            </Pressable>
        ))}
    </View>
  )
}

export default Lista
