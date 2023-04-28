import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { botones, colores } from '../../../Constantes/tema'
import { useNavigation } from '@react-navigation/native';
const BotonAgregarUbicacion = () => {
    const navigation = useNavigation(); 
  return (
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('AgregarUbicacion')}>
            <Text style={{color: colores.Ligero}}>Agregar ubicacion</Text>
        </TouchableOpacity>
  )
}

export default BotonAgregarUbicacion

const styles = StyleSheet.create({
    btn: {
        width: botones.xl,
        height: 50,
        backgroundColor: colores.Secundario,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 20
    }
})