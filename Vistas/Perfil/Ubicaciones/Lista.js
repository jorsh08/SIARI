import { View, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { contextoUbicaciones } from '../../../Contextos/PerfilUbicaciones'
import Ubicacion from './Ubicacion'

const Lista = () => {

    const {ubicaciones} = useContext(contextoUbicaciones)

  return (
    <View style={{flexDirection: 'column'}}>
        {ubicaciones.map(ubicacion => (
            <Pressable key={ubicacion.nombre} onPress={()=>alert('0.o')}>
                <Ubicacion nombre={ubicacion.nombre} fecha={ubicacion.fecha} hora={ubicacion.hora} direccion={ubicacion.hora} estado={ubicacion.estado} imagen={ubicacion.imagen} />
            </Pressable>
        ))}
    </View>
  )
}

export default Lista
