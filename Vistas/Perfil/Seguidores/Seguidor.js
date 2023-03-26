import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colores } from '../../../Constantes/tema'

const Seguidor = ({nombre, img, apellido}) => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.imagen}>
        <Image style={{width: 80, height: 80, borderRadius: 100}} source={{uri: img}}/>
      </View>
      <View style={styles.informacion}>
        <View style={{flexDirection: 'row'}}>
            <Text style={{color: colores.Secundario, fontSize: 14}}>{nombre}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Text>{apellido}</Text>
        </View>
      </View>
      <View style={styles.boton}>
            <TouchableOpacity style={{width: 80, height: 40, backgroundColor: colores.Primario, justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
                <Text style={{fontSize: 12, color: colores.Ligero}}>Eliminar</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default Seguidor

const styles = StyleSheet.create({
    contenedor: {
        width: 330,
        height: 90,
        borderRadius: 20,
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imagen:{
        flexDirection: 'column',
        margin: 5,
        width: 80,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    informacion: {
        flexDirection: 'column', 
        marginHorizontal: 10,
        width: 120,
        height: 90,
        justifyContent: 'center',
    },
    boton: {
        flexDirection: 'column',
        width: 70,
        height: 80,
        justifyContent: 'center',
        margin: 5,
        alignItems: 'center'
    }
})