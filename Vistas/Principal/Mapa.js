import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React, { useContext, useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE, enableLatestRenderer } from 'react-native-maps';
import { AuthContext } from '../../Contextos/AuthContext';
import SeleccionMapa from './SeleccionMapa';
import { colores } from '../../Constantes/tema';

enableLatestRenderer();

const Mapa = () => {

  const { puntoTuristico, getLista, PuntosTuristicos, contenedorInformacion, setContenedorLista, lista, setPuntoTuristicoInfo} = useContext(AuthContext)

  async function mostrarInformacion(infoPuntoTuristico){
    setContenedorLista(true)
    setPuntoTuristicoInfo(infoPuntoTuristico)
  }

  const getCoordenadas = (c) => {
    setContenedorLista(false)
    setPuntoTuristicoInfo('')
    console.log(c)
  }

  useEffect(()=>{
    getLista();
  },[PuntosTuristicos]);

  return (
    <View style={{flex:1, alignItems: 'center'}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onPress={(e) => getCoordenadas(e.nativeEvent.coordinate)}
        region={{
          latitude: 27.493875029632616,
          longitude: -109.9453880265355,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation
        loadingEnabled
        mapType='terrain'
        showsMyLocationButton={false}>
      {lista.map(element => (
        <Marker
          coordinate={{
            latitude: element.latitude,
            longitude: element.longitude}}
            key = {element.id}
            onPress = {() => mostrarInformacion(element)}
          style={{width: 80, height: 80}}
        >
          <Image
            source={{uri: element.icono}}
            style={{width: 50, height: 50}}
            resizeMode="contain"/>
        </Marker>
      ))}

            
     </MapView>
      <SeleccionMapa/>
      <View style={[contenedorInformacion ? styles.contenedorInformacion : styles.contenedorInformacionOculto, {flexDirection: 'row'}]}>
            <View style={{flexDirection: 'column', height: 125, width: 205, justifyContent: 'center'}}>
              <View style={{flexDirection: 'row', width: 205, height: 62.5,justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.Titulo}>{puntoTuristico.nombre}</Text>
              </View>
              <View style={{flexDirection: 'row', width: 205, height: 62.5,justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity onPress={() => /*navigation.navigate('PuntoTuristico', puntoTuristico)*/alert(':D')} style={contenedorInformacion ? styles.verMas : styles.contenedorInformacionOculto}>
                    <Text style={{color: colores.Primario, fontWeight: 'bold'}}>Ver mas</Text>
                  </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 125, height: 125}}>
              <Image
                  source={{uri: puntoTuristico.imagen}}
                  style={{width: 125, height: 125, borderRadius: 100}}
                  resizeMode="contain"/>
            </View>
      </View>
          
    </View>
  )
}

const styles = StyleSheet.create({
  map:{
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
  },
  verMas: {
    width: 100, 
    height: 30, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderColor: colores.Primario, 
    borderRadius: 10, 
    borderWidth: 2,
  },
  boton: {
    marginTop: '150%',
    width: 100,
    height: 60,
    backgroundColor: '#1a2b3c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  botonTexto:{
    color: '#ffffff'
  },
  contenedorInformacion: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    height: 150,
    backgroundColor: colores.LigeroOpacity,
    marginTop: 420,
    borderRadius: 25,
  },
  contenedorInformacionOculto: {
    width: 0,
    height: 0
  },
  misVisitas: {
    marginTop: '10%',
    backgroundColor: '#3ac562',
    width: 150,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
    backgroundColor: '#ECDDCC'
  },
  Titulo: {
    fontSize: 20,
    color: colores.Primario,
  },
  Informacion:{
    marginTop: 10,
    width: 340,
    height: '40%',
    marginLeft: 10,
    textAlign: 'justify',
  }
})

export default Mapa