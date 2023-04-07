import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React, { useContext, useEffect } from 'react';
import MapView, { Marker, enableLatestRenderer } from 'react-native-maps';
import { AuthContext } from '../../Contextos/AuthContext';
import { colores } from '../../Constantes/tema';
import Filtro from './Filtro';
import Tabs from './Tabs';
import Marcador from './Marcador';

enableLatestRenderer();

const Mapa = ({navigation}) => {

  const { puntoTuristico, contenedorInformacion, ocultarInfoPunto, lista } = useContext(AuthContext)

  const getCoordenadas = (c) => {
    ocultarInfoPunto()
    console.log(c)
  }

  return (
    <View style={{flex:1, alignItems: 'center'}}>
      <MapView
        style={styles.map}
        onPress={(e) => getCoordenadas(e.nativeEvent.coordinate)}
        region={{
          latitude: 27.493875,
          longitude: -109.945,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation
        loadingEnabled
        mapType='terrain'
        showsMyLocationButton={false}>
          {lista.map(element => (
            <Marcador 
            key={element.id} 
            lon={element.longitude} 
            lat={element.latitude} 
            icono={element.tipoIcono} 
            imagen={element.imagen} 
            nombre={element.nombre}
            direccion={element.direccion}
            horario={element.horario}
            informacion={element.informacion}
            tipo={element.tipo}
            ar={element.ar}
            />
          ))}

            
     </MapView>
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 20}}>
          <Filtro/>
          <Tabs/>
          <View style={contenedorInformacion ? styles.contenedorInformacion : styles.contenedorInformacionOculto}>
              <View style={{flexDirection: 'column', height: 125, width: 205, justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', width: 205, height: 62.5,justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.Titulo}>{puntoTuristico.nombre}</Text>
                </View>
                <View style={{flexDirection: 'row', width: 205, height: 62.5,justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('PuntoTuristico', puntoTuristico)} style={contenedorInformacion ? styles.verMas : styles.contenedorInformacionOculto}>
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
  contenedorInformacion: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    height: 150,
    backgroundColor: colores.LigeroOpacity,
    borderRadius: 25,
    flexDirection: 'row',
    marginTop: '90%'
  },
  contenedorInformacionOculto: {
    width: 0,
    height: 0
  },
  Titulo: {
    fontSize: 20,
    color: colores.Primario,
  },
  
})



export default Mapa