import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const SeleccionEventos = ({btnListado, btnCalendario, listado}) => {

  return (
    <View style={styles.titulo}>
            <View style={styles.tituloMA}>
                <Text style={{color:'#F85D5A', fontSize: 26, marginTop:'5%'}}>Eventos</Text>
            </View>
            <View style={styles.tituloMB}>
                <View style={styles.btn1}>
                    <TouchableOpacity
                        style={(listado)?styles.btnSeleccionado:styles.btnDeseleccionado}
                        onPress={btnListado}>
                            <Text style={(listado)?styles.btnSeleccionadoText:styles.btnDeseleccionadoText}>Listado</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btn2}>
                    <TouchableOpacity
                        style={(!listado)?styles.btnSeleccionado:styles.btnDeseleccionado}
                        onPress={btnCalendario}>
                            <Text style={(!listado)?styles.btnSeleccionadoText:styles.btnDeseleccionadoText}>Calendario</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    titulo:{ //miau
        flex: 1.75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tituloMA:{ //miau
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tituloMB:{ //miau
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btn1:{ //miau
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        height: '100%'
    },
    btn2:{ //miau
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%'
    },
    btnSeleccionado:{ //miau
        width: '60%',
        backgroundColor: '#F85D5A',
        alignItems: 'center',
        height: '65 %',
        justifyContent: 'center',
        borderRadius: 50
    },
    btnSeleccionadoText:{ //miau
        color: 'white',
    },
    btnDeseleccionado:{ //miau
        width: '60%',
        alignItems: 'center',
        height: '50%',
        justifyContent: 'center',
        
    },
    btnDeseleccionadoText:{ //miau
        color: '#544738'
    },
})


export default SeleccionEventos