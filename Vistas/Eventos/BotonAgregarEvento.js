import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { botones, colores } from '../../Constantes/tema'
import { useNavigation } from '@react-navigation/native';
const BotonAgregarEvento = () => {
    const navigation = useNavigation(); 
  return (
    <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('AgregarEvento')}>
            <Text style={{color: colores.Ligero}}>Agregar evento</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BotonAgregarEvento

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