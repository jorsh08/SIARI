import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Lugar = ({nombre, imagen, persona, direccion, horario, tipo}) => {
  return (
    <View style={styles.contenedor}>
        <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', height: 100, justifyContent: 'center'}}>
                    <Image
                        source={{uri: imagen}}
                        style={styles.a}
                        resizeMode="contain"/>
                </View>
                <View style={{flexDirection: 'column', marginLeft: 20, height: 100,width: 200, justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.titulo}>
                            <Text style={{fontSize: 20, color: '#F85D5A'}} >{nombre}</Text>
                        </View>
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
            
        </View>
    </View>
  )
}

export default Lugar

const styles = StyleSheet.create({
    contenedor: {
        width: 380,
        height: 130,
        margin: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    titulo: {
        width: 200,
        height: 65,
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    informacion: {
        flexDirection: 'column',
        width: 200,
        height: 55,
        marginBottom: 20,
        justifyContent: 'center',
    },
    a: {
        width: 100,
        height: 100, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 100,
    }
})