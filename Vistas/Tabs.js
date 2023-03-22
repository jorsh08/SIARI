import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import {ContextFil} from '../Contextos/FiltroContext'

const Tabs = ({items}) => {

    const {filtro, handleFiltro} = useContext(ContextFil)

    const [index, setIndex] = useState(0)

    const seleccion = (i) => {
        setIndex(i)
        handleFiltro()
    }

  return (
    <View style={styles.contenedor}>
        {(filtro) ?
        <View style={styles.tabs}>
            {items.map((item, i)=>{
                return (
                    <TouchableOpacity style={styles.tab} key={item.titulo} onPress={() => seleccion(i) }>
                        <Text>{item.titulo}</Text>
                    </TouchableOpacity>
                )
            })}
        </View> : <View></View>}
    <Text style={{margin: 10, fontWeight: 'bold'}}>{items[index].titulo}</Text>    
    {items[index].content()} 
    </View>
  )
}

export default Tabs

const styles = StyleSheet.create({
    contenedor: {
        flex: 1
    },
    tabs: {
        flexDirection: 'row',
        paddingBottom: 20,
        paddingHorizontal: 30
    },
    tab: {
        paddingHorizontal: 5
    }
})