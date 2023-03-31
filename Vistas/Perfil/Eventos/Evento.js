import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {colores, botones} from '../../../Constantes/tema'

const Evento = ({nombre, fecha, hora, direccion, estado, imagen}) => {

  return (
    <View style={styles.contenedor}>
        <View style={styles.imagen}>
            <Image
                source={{uri: imagen}}
                style={styles.img}
                resizeMode="contain"/>
        </View>
        <View style={styles.contenedorInformacion}>
            <View style={styles.titulo}>
                <Text style={styles.tituloEvento} >{nombre}</Text>
            </View>
            <View style={styles.informacion}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.contenedorIcono}>
                            <Image
                            source={require('../../../assets/localizacion.png')}
                            style={{width: 14, height: 14}}
                            resizeMode="contain"/>
                        </View>
                        <View style={{flexDirection: 'column', height: 20, alignItems: 'center'}}>
                            <Text style={{color: colores.Secundario, fontSize: 14}}>{fecha}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.contenedorIcono}>
                            <Image
                            source={require('../../../assets/cronografo.png')}
                            style={{width: 14, height: 14}}
                            resizeMode="contain"/>
                        </View>
                        <View style={{flexDirection: 'column', height: 20, alignItems: 'center'}}>
                            <Text style={{color: colores.Secundario, fontSize: 14}}>{estado}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.seccionEstado}>
            <View style={estadosEstilos[estado]}>
                <Text style={estado =='Pendiente'?styles.textoEstadoPendiente:styles.textoEstado}>{estado}</Text>
            </View>
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    imagen:{
        flexDirection: 'column',
        width: 125,
        height: 125,
        justifyContent: 'center',
        alignItems: 'center',
    },
    informacion: {
        flexDirection: 'row', 
        height: 80,
    },
    titulo: {
        flexDirection: 'row', 
        height:45, 
        width: 140,
    },
    tituloEvento: {
        fontSize: 14, 
        color: colores.Primario, 
        fontWeight: '500'
    },
    contenedorInformacion: {
        flexDirection: 'column', 
        marginHorizontal: 10, 
        width: 140, 
        height: 125, 
        justifyContent: 'center',
    },
    contenedorIcono: {
        flexDirection: 'column', 
        height: 20,
        marginRight: 5, 
        justifyContent:'center'
    },
    seccionEstado: {
        flexDirection: 'column',
        height: 125,
        marginTop: 10
    },
    img: {
        width: 125,
        height: 125, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 100,
    },
    textoEstado: {
        fontSize: 8, 
        color: colores.Ligero
    },
    textoEstadoPendiente:{
        fontSize: 8, 
        color: colores.Secundario
    },
    finalizado: {
        width: botones.s, 
        height: 20,
        backgroundColor: colores.Secundario, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20
    },
    aprobado: {
        width: botones.s, 
        height: 20,
        backgroundColor: colores.Verde, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20
    },
    pendiente: {
        width: botones.s, 
        height: 20,
        backgroundColor: colores.Ligero,
        borderColor: colores.Secundario,
        borderWidth: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20
    },
    denegado: {
        width: botones.s, 
        height: 20,
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