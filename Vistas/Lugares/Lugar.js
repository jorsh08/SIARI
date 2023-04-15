import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colores } from '../../Constantes/tema'

const Lugar = ({nombre, imagen, direccion, horario, tipo}) => {
  return (
    <View style={styles.contenedor}>
        {/*Imagen del lugar */}
        <View style={styles.img}>
            <Image
                source={{uri: imagen}}
                style={styles.imagen}
                resizeMode="contain"/>
        </View>
        {/*Informacion del lugar */}
        <View style={styles.contenedorInformacion}>
            <View style={styles.titulo}>
                <Text style={styles.tituloLugar} >{nombre}</Text>
            </View>
            <View style={styles.informacion}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 5}}>
                        <Image
                            source={require('../../assets/localizacion.png')}
                            style={{width: 14, height: 14}}
                            resizeMode="contain"/>
                        
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{color: '#8E7962', fontSize: 12}}>{direccion}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 5}}>
                        <Image
                            source={require('../../assets/cronografo.png')}
                            style={{width: 12, height: 12}}
                            resizeMode="contain"/>
                        
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{color: '#8E7962', fontSize: 12}}>{horario}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 5}}>
                        <Image
                            source={require('../../assets/informacion.png')}
                            style={{width: 12, height: 12}}
                            resizeMode="contain"/>
                        
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{color: '#8E7962', fontSize: 12}}>{tipo}</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Lugar

const styles = StyleSheet.create({
    contenedor: {
        width: 350,
        height: 150,
        margin: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    contenedorInformacion: {
        flexDirection: 'column', 
        marginLeft: 10, 
        height: 125,
        width: 200,
    },
    titulo: {
        flexDirection: 'row',
        width: 200,
        height: 45,
    },
    tituloLugar: {
        fontSize: 16,
        color: colores.Primario, 
        fontWeight: '500'
    },
    informacion: {
        flexDirection: 'column',
        width: 200,
        height: 80,
        marginBottom: 20,
    },
    imagen: {
        width: 125,
        height: 125, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 100,
    },
    img: {
        flexDirection: 'column',
        height: 125, 
        justifyContent: 'center',
    }
})