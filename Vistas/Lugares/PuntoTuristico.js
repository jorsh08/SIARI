import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { ViroARScene,ViroText,ViroARSceneNavigator, Viro3DObject, ViroAmbientLight } from '@viro-community/react-viro';
import cohete from '../../assets/cohete.obj'
import baica from '../../assets/baica.obj'

const HelloWorldSceneAR = (props) => {
  const [text, setText] = useState('Iniciando AR...');
  const [modelo, setModelo] = useState(cohete)

  function onInitialized(state, reason) {
    console.log(props.sceneNavigator.viroAppProps.tipo)
    setModelo(Onjetos3D[props.sceneNavigator.viroAppProps.tipo]);
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
        <ViroAmbientLight color={'#FFFFFF'}/>
        <Viro3DObject
            source={modelo}
            position={[0.0, 0.0, -7]}
            scale={[0.5, 0.5, 0.5]}
            type="OBJ"
        />
    </ViroARScene>
  );
};

const Onjetos3D = {
    Monumento: cohete,
    Recreativo: baica,
    Parque: baica
}

const PuntoTuristico = ({navigation, route}) => {

    const [puntoTuristico, setpuntoTuristico] = useState({})

    useEffect(()=>{
        setpuntoTuristico(route.params)
    }, [route])

  return (
    <View style={[styles.contenedorPrincipal, {flexDirection: 'column'}]}>
        <View style={{alignItems: 'center'}}>

            <View style={[styles.contenedorTitulo,{flexDirection:'column'}]}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                    style={styles.regresar}
                    onPress={()=>navigation.goBack()}>
                        <Text style={{color: '#8E7962', fontSize: 26, fontWeight: 'bold'}}>X</Text>
                    </TouchableOpacity>
                    <Text style={[styles.titulo, styles.textTitulo]}>{puntoTuristico.nombre}</Text>
                </View>
            </View>

            <View style={[styles.contenedorPuntoTuristico, {flexDirection: 'column'}]}>
                <View style={{flexDirection:'column'}}>
                    <View style={[{width: '100%', height: 300},{flexDirection: 'row'}]}>
                        <ViroARSceneNavigator
                            autofocus={true}
                            initialScene={{ scene: HelloWorldSceneAR }}
                            viroAppProps={{ nombre: puntoTuristico.nombre, tipo: puntoTuristico.tipo }}
                            style={{flex: 1}}/>
                    </View>
                    <View style={[{width: '100%', height: 300},{flexDirection: 'row'}]}>
                            <View style={[styles.datosPuntosTuristicos,{flexDirection: 'column'}]}>
                                <Text>{puntoTuristico.direccion}</Text>
                                <Text>{puntoTuristico.horario}</Text>
                            </View>
                    </View>
                </View>
            </View>

            <View style={{borderWidth: 0.5, width: '90%', borderColor: '#6d5f5a'}} />

            <View style={[styles.contenedorInformacionPuntoTuristico, {flexDirection: 'column'}]}>
                <View style={[{justifyContent:'center', margin: '5%'},{flexDirection: 'row'}]}>
                    <Text style={styles.textTitulo}>Información</Text>
                </View>
                
                <View style={{flexDirection: 'row'}}>
                    <Text>{puntoTuristico.informacion}</Text>
                </View>
                
            </View>

        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    contenedorPrincipal: {
        flex:1,
        backgroundColor: '#EBDFD2'
    },
    contenedorTitulo: {
        width: '90%',
        height: '7%',
        justifyContent:'center',
        margin: '3%'
    },
    contenedorPuntoTuristico: {
        width: '90%', 
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
        alignItems:'center',
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
  }
})
export default PuntoTuristico