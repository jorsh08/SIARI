import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import {ContextFil} from '../../Contextos/Lugares'

const Tabs = () => {

    const { Tab, handleTab, tabs, filtro } = useContext(ContextFil)

  return (
    <>
        {(filtro)?
            <View style={styles.filtro}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {tabs.map((item, i)=>{
                                return (
                                    <View key={item}>
                                        {(item == Tab) ? 
                                            <TouchableOpacity style={styles.seleccionTab}  onPress={() => handleTab(item) }>
                                                <Text style={{ fontSize: 14, color: '#efeae4'}}>{item}</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={styles.tab} onPress={() => handleTab(item) }>
                                                <Text style={{color:'#F85D5A', fontSize: 14}}>{item}</Text>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View> 
                </View>
            </View>
            :
            null
        }
    </>    
  )
}

export default Tabs

const styles = StyleSheet.create({
    filtro: {
        flexDirection: 'row', 
        height: 40,
        marginTop: 15,
        marginRight: 10,
        alignItems: 'center',
    },
    
    tab: {
        flexDirection: 'column',
        marginHorizontal: 5,
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#F85D5A',
        borderWidth: 1,
        borderRadius: 20
    },
    seleccionTab: {
        flexDirection: 'column',
        marginHorizontal: 5,
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#F85D5A',
    }
    
})