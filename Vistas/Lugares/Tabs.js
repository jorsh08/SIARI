import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import {ContextFil} from '../../Contextos/Lugares'

const Tabs = () => {

    const { filtro, handleFiltro, Tab, handleTab, tabs } = useContext(ContextFil)


  return (
    <View style={styles.contenedor}>
        <View style={styles.filtro}>
            <View style={{flexDirection: 'column', width: 90}}>
                <Text style={{fontWeight: 'bold', fontSize: 14, color: '#8E7962'}}>{Tab}</Text> 
            </View>
            <View style={{flexDirection: 'column', width: 260, alignItems: 'flex-end'}}>
                <View style={styles.tabs}>
                    {tabs.map((item, i)=>{
                        return (
                            <TouchableOpacity style={styles.tab} key={item} onPress={() => handleTab(item) }>
                                <Text style={{color:'#8E7962', fontSize: 12}}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View> 
            </View>
        </View>
    </View>
  )
}

export default Tabs

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    filtro: {
        flexDirection: 'row', 
        height: 40,
        marginTop: 15,
        marginBottom: 5,
        width: 350,
        alignItems: 'center'
    },
    tabs: {
        flexDirection: 'row',
    },
    tab: {
        paddingHorizontal: 5
    }
})