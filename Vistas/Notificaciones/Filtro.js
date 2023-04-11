import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { contextoNotificaciones } from '../../Contextos/Notificaciones'

const Filtro = () => {
    const {text} = useContext(contextoNotificaciones)
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}

export default Filtro

const styles = StyleSheet.create({})