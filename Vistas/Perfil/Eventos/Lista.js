import { View, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { contextoEventos } from '../../../Contextos/PerfilEventos'
import Evento from './Evento'

const Lista = () => {

    const {eventos} = useContext(contextoEventos)

  return (
    <View style={{flexDirection: 'column'}}>
        {eventos.map(evento => (
            <Pressable key={evento.nombre} onPress={()=>alert('0.o')}>
                <Evento nombre={evento.nombre} fecha={evento.fecha} hora={evento.hora} direccion={evento.hora} estado={evento.estado} imagen={evento.imagen} />
            </Pressable>
        ))}
    </View>
  )
}

export default Lista
