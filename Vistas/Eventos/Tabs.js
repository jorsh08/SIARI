import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useContext} from 'react'
import { contextoEventos } from '../../Contextos/Eventos';
const Tabs = () => {
    const { Tab, handleTab, tabs } = useContext(contextoEventos)
    

  return (
    <View style={{flexDirection: 'row', width: 350, height: 50, alignItems: 'center',marginTop: 15}}>
        <View style={{flexDirection: 'column', width: 100}}>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: '#8E7962'}}>{Tab}</Text>
        </View>
        <View style={{flexDirection: 'column', width: 250, alignItems: 'flex-end'}}>
            <View style={{flexDirection: 'row'}}>
                {tabs.map((tab, i)=>{
                    return (
                        <View key={tab[i]} style={{flexDirection: 'column', paddingHorizontal: 5}}>
                            <TouchableOpacity onPress={()=>handleTab(tab)}>
                                <Text style={{ fontSize: 12, color: '#8E7962'}}>{tab}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
                
            </View>
        </View>
    </View>
  )
}

export default Tabs

const styles = StyleSheet.create({})