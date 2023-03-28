import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {colores} from '../../../Constantes/tema'

const Evento = ({nombre, hora, direccion, estado, imagen}) => {

    

  return (
    <View style={styles.contenedor}>
        <View style={styles.imagen}>
            <Image
                source={{uri: imagen}}
                style={styles.img}
                resizeMode="contain"/>
        </View>
        <View style={styles.informacion}>
            <View style={{flexDirection: 'row', height:45, width: 120, alignItems: 'center'}}>
                    <Text style={{fontSize: 16, color: '#F85D5A', fontWeight: '500'}} >{nombre}</Text>
            </View>
            <View style={{flexDirection: 'row', height: 70}}>
                <View style={{flexDirection: 'column', height: 20, marginRight: 5, justifyContent:'center'}}>
                    <Image
                    source={require('../../../assets/localizacion.png')}
                    style={{width: 14, height: 14}}
                    resizeMode="contain"/>
                </View>
                <View style={{flexDirection: 'column', height: 20, alignItems: 'center'}}>
                    <Text style={{color: colores.Secundario, fontSize: 14}}>asss</Text>
                </View>
            </View>
        </View>
        <View style={styles.seccionEstado}>
            <TouchableOpacity style={estadosEstilos[estado]}>
                <Text style={estado =='Pendiente'?styles.textoEstadoPendiente:styles.textoEstado}>{estado}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Evento

const styles = StyleSheet.create({
    contenedor: {
        width: 350,
        height: 150,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    },
    imagen:{
        flexDirection: 'column',
        width: 100,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    informacion: {
        flexDirection: 'column', 
        marginHorizontal: 10,
        width: 120,
        height: 150,
        justifyContent: 'center',
    },
    seccionEstado: {
        flexDirection: 'column',
        width: 80,
        height: 150,
        marginTop: 40, 
        alignItems: 'flex-end'
    },
    img: {
        width: 100,
        height: 100, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 100,
    },
    estado:{
        width: 80, 
        height: 40,
        backgroundColor: colores.Secundario, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20
    },
    textoEstado: {
        fontSize: 12, 
        color: colores.Ligero
    },
    textoEstadoPendiente:{
        fontSize: 12, 
        color: colores.Secundario
    },
    finalizado: {
        width: 80, 
        height: 40,
        backgroundColor: colores.Secundario, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20
    },
    aprobado: {
        width: 80, 
        height: 40,
        backgroundColor: colores.Verde, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20
    },
    pendiente: {
        width: 80, 
        height: 40,
        backgroundColor: colores.Ligero,
        borderColor: colores.Secundario,
        borderWidth: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20
    },
    denegado: {
        width: 80, 
        height: 40,
        backgroundColor: colores.Primario, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20
    }
})

const estadosEstilos = {
    Pendiente: styles.pendiente,
    Aprobado: styles.aprobado,
    Finalizado: styles.finalizado,
    Denegado: styles.denegado,
}