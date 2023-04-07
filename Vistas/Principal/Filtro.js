import { StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../Contextos/AuthContext'

const Filtro = () => {
    const { handleFiltro, buscar, setBuscar, buscando, ocultarInfoPunto, setContenedorLista,setPuntoTuristicoInfo } = useContext(AuthContext)
  
    return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={[{flexDirection: 'column'}, styles.filtro]}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                    <Image
                        style={styles.iconFiltro}
                        resizeMode={"contain"}
                        source={require("../../assets/buscar.png")}/>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <TextInput style={styles.inputText} onPressIn={()=>ocultarInfoPunto()} placeholderTextColor="#8E796250" placeholder='Encontrar' value={buscar} onChangeText={text => {setBuscar(text); buscando(text);}}/>
                </View>
            </View>
        </View>
        
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.botonFiltros} onPress={()=>{handleFiltro(); setContenedorLista(false); setPuntoTuristicoInfo('');}}>
                <Image
                    source={require('../../assets/Filterlist.png')}
                    resizeMode={'cover'}
                    style={{width: 24, height: 24}}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Filtro

const styles = StyleSheet.create({
    botonFiltros:{
        marginTop: 20,
        width: 40,
        height: 40,
        backgroundColor: '#F85D5A',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginRight: 10,
        marginTop: 50,
        marginBottom: 30,
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