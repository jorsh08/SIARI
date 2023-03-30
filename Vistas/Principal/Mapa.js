import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React, { useContext, useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE, enableLatestRenderer } from 'react-native-maps';
import { AuthContext } from '../../Contextos/AuthContext';

enableLatestRenderer();

const Mapa = ({navigation}) => {

  const {PuntosTuristicos} = useContext(AuthContext)

  const [lista, setLista] = React.useState([])

  const [contenedorInformacion, setContenedorLista] = React.useState(false)

  const [puntoTuristico, setPuntoTuristico] = React.useState({})


  useEffect(()=>{
    getLista();
  },[]);

  async function getLista(){
    let lista = []
    PuntosTuristicos.forEach( element => {
        lista.push({latitude: parseFloat(element.latitude), longitude: parseFloat(element.longitude), id: element.id, nombre: element.nombre, icono: element.icono, informacion: element.informacion, imagen: element.imagen})
    });
    setLista(lista)
  }

  async function mostrarInformacion(infoPuntoTuristico){
    setContenedorLista(true)
    setPuntoTuristico(infoPuntoTuristico)
  }

  const getCoordenadas = (c) => {
    setContenedorLista(false)
    setPuntoTuristico('')
    console.log(c)
  }

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
        >
          <Image
            source={{uri: element.icono}}
            style={{width: 50, height: 50}}
            resizeMode="contain"/>
        </Marker>
      ))}


     </MapView>
      <View style={[contenedorInformacion ? styles.contenedorInformacion : styles.contenedorInformacionOculto, {flexDirection: 'row'}]}>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column', width: 140}}>
              <Text style={styles.Titulo}>{puntoTuristico.nombre}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('PuntoTuristico', puntoTuristico)} style={contenedorInformacion ? styles.verMas : styles.contenedorInformacionOculto}>
                <Text style={{color: '#EBDFD2', fontWeight: 'bold'}}>Ver mas</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <Image
                  source={{uri: puntoTuristico.imagen}}
                  style={{width: 200, height: 150, borderRadius: 25}}
                  resizeMode="contain"/>
            </View>
          </View>
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
    margin: 20, 
    borderColor: '#EBDFD2', 
    borderRadius: 10, 
    borderWidth: 2
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
    width: '75%',
    height: 350,
    backgroundColor: 'rgba(148, 128, 106, 0.8)',
    marginTop: '95%',
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
    fontSize: 24,
    color: '#EBDFD2',
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