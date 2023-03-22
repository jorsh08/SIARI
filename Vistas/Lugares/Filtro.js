import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import {ContextFil} from '../../Contextos/Lugares'

const Filtro = () => {

    const {handleFiltro, buscar, setBuscar, buscando} = useContext(ContextFil)

  return (
    <View style={{flexDirection: 'row'}}>
        <View style={[{flexDirection: 'column'}, styles.filtro]}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                    <Image
                        style={styles.iconFiltro}
                        resizeMode={"contain"}
                        source={require('../../assets/buscar.png')}/>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <TextInput style={styles.inputText} placeholderTextColor="#8E796250"  placeholder='Encontrar' value={buscar} onChangeText={text => {setBuscar(text); buscando(text);}}/>
                </View>
            </View>
        </View>
        
        <View style={{flexDirection: 'column'}}>
            <TouchableOpacity style={styles.botonFiltros} onPress={()=>{handleFiltro()}}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Filtro

const styles = StyleSheet.create({
    botonFiltros:{
        width: 40,
        height: 40,
        backgroundColor: '#F85D5A',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    filtro: {
        justifyContent: 'center',
        width: 250,
        height: 50,
        backgroundColor: '#EBDFD2',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    inputText:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 50,
        top: 5,
        color:'#8E7962'
    },
    iconFiltro:{
        width: 28,
        height: 28,
        margin: 15
    },
})