import { Image, StyleSheet, Text, View, } from 'react-native'
import React, {useContext} from 'react'
import { Marker } from 'react-native-maps';
import { AuthContext } from '../../Contextos/AuthContext';
import iconoParque from '../../assets/5-Parque.png'
import iconoIglesia from '../../assets/13-Iglesia.png'
import iconoPolideportivo from '../../assets/4-Polideportivo.png'
import iconoGimnasio from '../../assets/10-Gimnasio.png'
import iconoPlanetario from '../../assets/1-Planetario.png'
import iconoCentroTeatro from '../../assets/7-Teatro.png'
const Marcador =  React.memo (({lon, lat, nombre, id}) => {
    const tipoIcono = {8:iconoIglesia, 9:iconoCentroTeatro, 10:iconoParque, 11:iconoPolideportivo, 12: iconoGimnasio, 13: iconoPlanetario}
    const { setInformacion } = useContext(AuthContext)
  return (
    <Marker 
        coordinate={{latitude: lat, longitude: lon}}
        image={tipoIcono[id]}
        onPress = {() => setInformacion({nombre, id, info: true})}
    />
  )
})

export default Marcador

const styles = StyleSheet.create({})