import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colores } from '../Constantes/tema'
import { useNavigation } from '@react-navigation/native';

const EncabezadoSecundario = ({titulo}) => {
    const navigation = useNavigation(); 
  return (
    <View style={styles.contenedor}>
            <View style={{flexDirection: 'column'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Text style={{fontSize: 22, color: colores.Secundario}}>X</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{color: colores.Primario, fontSize: 26}}>{titulo}</Text> 
            </View>
    </View>
  )
}

export default EncabezadoSecundario

const styles = StyleSheet.create({
    contenedor:{
        flexDirection: 'row',
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 20
    }

})