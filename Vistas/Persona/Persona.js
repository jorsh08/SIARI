import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colores } from '../../Constantes/tema'
import EncabezadoSecundario from '../EncabezadoSecundario'

const Persona = () => {
  return (
    <View style={styles.fondo}>
        <View style={{flexDirection: 'row'}}>
            <EncabezadoSecundario titulo={''}/>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'center', backgroundColor: 'red'}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center',width: 200, height: 200, alignItems: 'center', backgroundColor: 'green'}}>
                
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center',width: 300, height: 100, alignItems: 'center', backgroundColor: 'yellow'}}>
                <View style={{flexDirection:'column', backgroundColor: 'brown', width: 200, alignItems: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{color: colores.Secundario, fontSize: 24, fontWeight: 'bold'}}>Jorge Verdugo</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{color: colores.Secundario, fontSize: 18, fontWeight: '500'}}>Jorge012@as</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: 100, backgroundColor: 'green'}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text>Estrella</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text>4.1</Text>
                    </View>
                </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center',width: 300, height: 800, alignItems: 'center', backgroundColor: 'blue'}}>
                <Text>Imagen</Text>
            </View>
            </View>
        </View>
    </View>
  )
}

export default Persona

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: colores.Fondo,
        flex: 1,
    }
})