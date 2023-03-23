import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Lugar = ({nombre, imagen, persona, direccion, horario, tipo}) => {
  return (
    <View style={styles.contenedor}>
        <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                    <Image
                        source={{uri: imagen}}
                        style={styles.a}
                        resizeMode="contain"/>
                </View>
                <View style={{flexDirection: 'column', marginLeft: 20}}>
                    <View style={{flexDirection: 'column'}}>
                        <View style={styles.titulo}>
                            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#F85D5A'}} >{nombre}</Text>
                        </View>
                    </View>
                    <View style={styles.informacion}>
                        <View style={{flexDirection: 'row'}}>
                            <Text>{persona}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text>{direccion}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text>{horario}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text>{tipo}</Text>
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
        width: 330,
        height: 160,
        margin: 10,
        backgroundColor: '#ecddcc',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    titulo: {
        width: 150,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row'
    },
    informacion: {
        flexDirection: 'column',
        width: 150,
        height: 80,
        marginTop: 5
    },
    a: {
        width: 120,
        height: 120, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 100,
    }
})