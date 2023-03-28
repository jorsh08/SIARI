import { StyleSheet, View, TextInput, Image } from 'react-native'
import React, { useContext } from 'react'
import {contextoSeguidores} from '../../../Contextos/Seguidores'

const Filtro = () => {

    const {buscar, setBuscar, buscando} = useContext(contextoSeguidores)

  return (
    <>
        <View style={[{flexDirection: 'column'}, styles.filtro]}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                    <Image
                        style={styles.iconFiltro}
                        resizeMode={"contain"}
                        source={require("../../../assets/buscar.png")}/>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <TextInput style={styles.inputText} placeholderTextColor="#8E796250"  placeholder='Encontrar' value={buscar} onChangeText={text => {setBuscar(text); buscando(text);}}/>
                </View>
            </View>
        </View>
        
        
    </>
  )
}

export default Filtro

const styles = StyleSheet.create({
    filtro: {
        justifyContent: 'center',
        width: 300,
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