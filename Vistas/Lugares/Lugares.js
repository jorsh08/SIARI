import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { FiltroProvider } from '../../Contextos/Lugares'
import Encabezado from '../Encabezado'
import Filtro from '../Filtro'
import Tabs from '../Tabs'
import Lista from './Lista'

const tabs = [
    {
        titulo: 'Todo',
        content: () => (
            <Lista tipo={'todos'}/>
        )
    },
    {
        titulo: 'Monumento',
        content: () => (
            <Lista tipo={'monumentos'}/>
        )
    },
    {
        titulo: 'Recreativo',
        content: () => (
            <Lista tipo={'recreativos'}/>
        )
    },
    {
        titulo: 'Parque',
        content: () => (
            <Lista tipo={'parques'}/>
        )
    }
]

const Lugares = () => {
  return (
    <FiltroProvider>
        <View style={[styles.fondo, {flexDirection: 'row'}]}>
            <ScrollView >
                <View style={{ alignItems: 'center', flexDirection: 'column'}}>
                    
                    <Encabezado titulo={'Lugares'}/>
                    <Filtro />
                    <Tabs items={tabs}/>
                    
                </View>
            </ScrollView>
        </View>
    </FiltroProvider>
  )
}
const styles = StyleSheet.create({
    fondo: {
        height: '100%', 
        backgroundColor: '#EBDFD2',
    }
})

export default Lugares

