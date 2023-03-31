import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useContext} from 'react'
import { contextoUbicaciones } from '../../../Contextos/PerfilUbicaciones'
import { colores } from '../../../Constantes/tema'
const Tabs = () => {
    
    const { tab, tabs, filtro, handleTab, buscar, buscando } = useContext(contextoUbicaciones)
    
    const handle = (tabx) => {
        handleTab(tabx)
        buscando(buscar)
    }

  return (
    <>
        {(filtro)?
            <View style={styles.contenedor}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {tabs.map((tabx, i)=>{
                                return (
                                    <View key={tabx}>
                                        {(tabx == tab) ? 
                                            <TouchableOpacity style={styles.seleccionTab}  onPress={() => handle(tabx) }>
                                                <Text style={{ fontSize: 14, color: '#efeae4'}}>{tabx}</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={styles.tab} onPress={() => handle(tabx) }>
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
    contenedor: {
        flexDirection: 'row', 
        height: 40,
        marginBottom: 10, 
        marginRight: 10
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
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 5,
        backgroundColor: colores.Primario
    }
})