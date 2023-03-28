import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useContext} from 'react'
import { contextoEventos } from '../../../Contextos/PerfilEventos'
import { colores } from '../../../Constantes/tema'
const Tabs = () => {
    
    const { tab, tabs, filtro, handleTab } = useContext(contextoEventos)
    
  return (
    <>
        {(filtro)?
            <View style={{flexDirection: 'row', height: 40, marginTop: 25, marginRight: 10}}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {tabs.map((tabx, i)=>{
                                return (
                                    <View key={tabx}>
                                        {(tabx == tab) ? 
                                            <TouchableOpacity style={styles.seleccionTab}  onPress={() => handleTab(tabx) }>
                                                <Text style={{ fontSize: 14, color: '#efeae4'}}>{tabx}</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={styles.tab} onPress={() => handleTab(tabx) }>
                                                <Text style={{color:'#F85D5A', fontSize: 14}}>{tabx}</Text>
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
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 5,
        backgroundColor: colores.Primario
    }
})