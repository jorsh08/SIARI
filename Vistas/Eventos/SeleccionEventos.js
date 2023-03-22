import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { contextoEventos } from '../../Contextos/Eventos';

const SeleccionEventos = () => {

    const { btnListado, btnCalendario, listado} = useContext(contextoEventos)

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
            <View style={styles.contenedorBotones}>
                <View style={{flexDirection: 'column'}}>
                    <TouchableOpacity
                        style={(listado)?styles.btnSeleccionado:styles.btnDeseleccionado}
                        onPress={btnListado}>
                            <Text style={(listado)?styles.btnSeleccionadoText:styles.btnDeseleccionadoText}>Listado</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'column'}}>
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
    contenedorBotones:{
        width: 350,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    
    
    btnSeleccionado:{ //miau
        width: 120,
        backgroundColor: '#F85D5A',
        alignItems: 'center',
        height: 30,
        justifyContent: 'center',
        borderRadius: 50
    },
    btnSeleccionadoText:{ //miau
        color: 'white',
    },
    btnDeseleccionado:{ //miau
        width: 120,
        alignItems: 'center',
        height: 30,
        justifyContent: 'center',
        
    },
    btnDeseleccionadoText:{ //miau
        color: '#544738'
    },
})


export default SeleccionEventos