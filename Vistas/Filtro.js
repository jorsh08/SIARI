import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import {ContextFil} from '../Contextos/FiltroContext'

const Filtro = () => {

    const {handleFiltro, buscador, setBuscador} = useContext(ContextFil)

  return (
    <View style={[{flexDirection: 'row'}, styles.filtro]}>
        <TextInput style={styles.inputText} placeholder='Encontrar' value={buscador} onChange={setBuscador}/>
        <View style={styles.iconFiltro}>
            <TouchableOpacity onPress={()=>{handleFiltro()}}>
                <Image
                    style={styles.iconFiltro}
                    resizeMode={"contain"}
                    source={require("../assets/buscar.png")}
                    />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Filtro

const styles = StyleSheet.create({
    filtro: {
        justifyContent: 'center',
        width: 310,
        height: 60,
        backgroundColor: '#EBDFD2',
        borderRadius: 15,
        shadowColor: "#000",
        marginBottom: 20,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    inputText:{
        flex: 1,
        paddingLeft: 50
    },
    iconFiltro:{
        position: 'absolute',
        left: 125,
        top: 5        
    },
})