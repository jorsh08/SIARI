import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Encabezado = ({titulo}) => {
  return (
    <View style={[styles.titulo, {flexDirection: 'row'}]}>
        <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                <Text style={{color:'#8E7962', fontSize: 26}}>{titulo}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{width: 300, height: 1, backgroundColor: '#8E7962'}}/>
            </View>
        </View>
    </View>
  )
}

export default Encabezado

const styles = StyleSheet.create({
    titulo:{
        marginTop: 20,
        marginBottom: '5%',
    }

})