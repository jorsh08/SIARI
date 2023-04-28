import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SiliderItem from './SiliderItem'
const PuntoTuristico = ({ navigation, route }) => {

    const data = [
        'https://www.cinepremiere.com.mx/wp-content/uploads/2021/06/los_padrinos_magicos_cinepremiere_02.jpg',
        'https://cdn.shopify.com/s/files/1/0025/9384/9457/articles/fairly-odd-parents.jpg?v=1647633110&width=2048'
    ]
    const [imagenActive, setImagenActive] = useState(0)
    const [puntoTuristico, setpuntoTuristico] = useState({})

    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slide != imagenActive) {
                setImagenActive(slide)
            }
        }
    }
    useEffect(() => {
        setpuntoTuristico(route.params)
    }, [route])

    return (
        <View style={[styles.contenedorPrincipal, { flexDirection: 'column' }]}>
            <View style={{ alignItems: 'center' }}>

                <View style={[styles.contenedorTitulo, { flexDirection: 'column' }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={styles.regresar}
                            onPress={() => navigation.goBack()}>
                            <Text style={{ color: '#8E7962', fontSize: 26, fontWeight: 'bold' }}>X</Text>
                        </TouchableOpacity>
                        <Text style={[styles.titulo, styles.textTitulo]}>{puntoTuristico.nombre}</Text>
                    </View>
                </View>

                <View style={[styles.contenedorPuntoTuristico, { marginVertical: 50 }, { flexDirection: 'column' }]}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <FlatList
                                        data={data}
                                        onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                                        renderItem={(item) => <SiliderItem multimedio={item.item} />}
                                        horizontal
                                        pagingEnabled
                                        snapToAlignment='center'
                                        showsHorizontalScrollIndicator={false}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
                                    {data.map((e, index) => (<View key={e} style={imagenActive == index ? styles.dotActive : styles.dot} />))}
                                </View>
                            </View>
                        </View>
                        <View style={[{ width: '100%', height: 300}, { flexDirection: 'row' }]}>
                            <View style={[styles.datosPuntosTuristicos, { flexDirection: 'column' }]}>
                                <Text>{puntoTuristico.direccion}</Text>
                                <Text>{puntoTuristico.horario}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ borderWidth: 0.5, width: '90%', borderColor: '#6d5f5a' }} />

                <View style={[styles.contenedorInformacionPuntoTuristico, { flexDirection: 'column' }]}>
                    <View style={[{ justifyContent: 'center', margin: '5%' }, { flexDirection: 'row' }]}>
                        <Text style={styles.textTitulo}>Información</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text>{puntoTuristico.informacion}</Text>
                    </View>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedorPrincipal: {
        flex: 1,
        backgroundColor: '#EBDFD2'
    },
    contenedorTitulo: {
        width: '90%',
        height: '7%',
        justifyContent: 'center',
        margin: '3%'
    },
    contenedorPuntoTuristico: {
        width: '100%',
        height: '40%',
        marginTop: '3%'
    },
    contenedorInformacionPuntoTuristico: {
        width: '90%',
        height: '50%'
    },
    titulo: {
        width: '90%',
        paddingLeft: '5%',
        paddingTop: 5
    },
    regresar: {
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    datosPuntosTuristicos: {
        margin: '7%',
    },
    textTitulo: {
        fontSize: 18,
        color: '#F85D5A'
    },
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    dotActive: {
        width: 12,
        height: 12,
        backgroundColor: 'green',
        borderRadius: 6,
        marginHorizontal: 5
      },
      dot: {
        width: 12,
        height: 12,
        backgroundColor: 'gray',
        borderRadius: 6,
        marginHorizontal: 5
      }
})
export default PuntoTuristico