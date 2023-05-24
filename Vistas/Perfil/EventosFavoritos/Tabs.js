import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useContext} from 'react'
import { contextoEventos } from '../../../Contextos/PerfilEventosFavorito';
const Tabs = () => {
    
    const { Tab, tabs, filtro, handleTab } = useContext(contextoEventos)
    
  return (
    <>
        {(filtro)?
            <View style={{flexDirection: 'row', height: 40, marginTop: 15, marginRight: 10}}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {tabs.map((tab, i)=>{
                                return (
                                    <View key={tab}>
                                        {(tab == Tab) ? 
                                            <TouchableOpacity style={styles.seleccionTab}  onPress={() => handleTab(tab) }>
                                                <Text style={{ fontSize: 14, color: '#efeae4'}}>{tab}</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={styles.tab} onPress={() => handleTab(tab) }>
                                                <Text style={{color:'#F85D5A', fontSize: 14}}>{tab}</Text>
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
            null}
    </>
  )
}

export default Tabs

const styles = StyleSheet.create({
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