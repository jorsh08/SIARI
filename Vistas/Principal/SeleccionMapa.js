import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { AuthContext } from '../../Contextos/AuthContext';
import { colores } from '../../Constantes/tema'

const SeleccionMapa = () => {

    const { btnListado, btnCalendario, listado, handlePuntos } = useContext(AuthContext)

    const handleBtones = (btn) => {
        if (btn == 'Eventos'){
            btnListado()
            handlePuntos(btn)
        }else{
            btnCalendario()
            handlePuntos(btn)
        }
    }

  return (
        <View style={styles.contenedorBotones}>
            <View style={{flexDirection: 'column'}}>
                <TouchableOpacity
                    style={(listado)?styles.btnSeleccionado:styles.btnDeseleccionado}
                    onPress={()=>handleBtones('')}>
                        <Text style={(listado)?styles.btnSeleccionadoText:styles.btnDeseleccionadoText}>Lugares</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'column'}}>
                <TouchableOpacity
                    style={(!listado)?styles.btnSeleccionado:styles.btnDeseleccionado}
                    onPress={()=>handleBtones('Eventos')}>
                        <Text style={(!listado)?styles.btnSeleccionadoText:styles.btnDeseleccionadoText}>Eventos</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    contenedorBotones:{
        width: 350,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 50
    },
    
    btnSeleccionado:{ //miau
        width: 120,
        backgroundColor: colores.Primario,
        alignItems: 'center',
        height: 30,
        justifyContent: 'center',
        borderRadius: 50
    },
    btnSeleccionadoText:{ //miau
        color: colores.Ligero,
        fontWeight: 'bold'
    },
    btnDeseleccionado:{ //miau
        width: 120,
        alignItems: 'center',
        height: 30,
        justifyContent: 'center',
        
    },
    btnDeseleccionadoText:{ //miau
        color: colores.Secundario,
        fontWeight: 'bold'
    },
})


export default SeleccionMapa