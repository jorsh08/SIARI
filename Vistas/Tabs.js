import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import {ContextFil} from '../Contextos/Lugares'

const Tabs = ({items}) => {

    const { filtro, handleFiltro } = useContext(ContextFil)

    const [index, setIndex] = useState(0)

    const seleccion = (i) => {
        setIndex(i)
        handleFiltro()
    }

  return (
    <View style={styles.contenedor}>
        <View style={styles.filtro}>
            <View style={{flexDirection: 'column', width: 90}}>
                <Text style={{fontWeight: 'bold', fontSize: 14, color: '#8E7962'}}>{items[index].titulo}</Text> 
            </View>
            <View style={{flexDirection: 'column', width: 260, alignItems: 'flex-end'}}>
                {(filtro) ?
                <View style={styles.tabs}>
                    {items.map((item, i)=>{
                        return (
                            <TouchableOpacity style={styles.tab} key={item.titulo} onPress={() => seleccion(i) }>
                                <Text style={{color:'#8E7962'}}>{item.titulo}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View> : <View></View>}
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {items[index].content()} 
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