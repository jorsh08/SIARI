import { Image, StyleSheet, Text, View, } from 'react-native'
import React, {useContext} from 'react'
import { Marker } from 'react-native-maps';
import { AuthContext } from '../../Contextos/AuthContext';
import iconoParque from '../../assets/1.png'
import iconoIglesia from '../../assets/2.png'
import iconoRecreativo from '../../assets/4.png'

const Marcador =  React.memo (({lon, lat, icono, imagen, nombre, direccion, horario, informacion, tipo}) => {
    const tipoIcono = [iconoIglesia, iconoRecreativo, iconoParque]
    const { mostrarInformacion } = useContext(AuthContext)
  return (
    <Marker 
        coordinate={{latitude: lat, longitude: lon}}
        image={tipoIcono[icono]}
        onPress = {() => mostrarInformacion(imagen, nombre, direccion, horario, informacion, tipo)}
    />
  )
})

export default Marcador

const styles = StyleSheet.create({})