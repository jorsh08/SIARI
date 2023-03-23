import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { FiltroProvider } from '../../Contextos/Lugares'
import Encabezado from '../Encabezado'
import Filtro from './Filtro'
import Tabs from './Tabs'
import Lista from './Lista'

const Lugares = () => {
  return (
    <FiltroProvider>
        <View style={[styles.fondo, {flexDirection: 'row'}]}>
            <ScrollView >
                <View style={{ alignItems: 'center', flexDirection: 'column'}}>
                    <Encabezado titulo={'Lugares'}/>
                    <Filtro />
                    <Tabs/>
                    <Lista/>
                </View>
                    
            </ScrollView>
        </View>
    </FiltroProvider>
  )
}
const styles = StyleSheet.create({
    fondo: {
        height: '100%', 
        backgroundColor: '#efeae4',
    }
})

export default Lugares

