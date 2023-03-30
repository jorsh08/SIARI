import React from "react";
import {  StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Perfil= ({navigation}) => {

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Perfil</Text>
      <TouchableOpacity style={{width: 100, height: 60, backgroundColor: '#1cd', justifyContent: 'center', alignItems: 'center', margin: 10}} onPress={()=>navigation.navigate('Seguidores')}>
        <Text>Seguidores</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width: 100, height: 60, backgroundColor: '#1cd', justifyContent: 'center', alignItems: 'center', margin: 10}} onPress={()=>navigation.navigate('Seguidos')}>
        <Text>Seguidos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width: 100, height: 60, backgroundColor: '#1cd', justifyContent: 'center', alignItems: 'center', margin: 10}} onPress={()=>navigation.navigate('PerfilEventos')}>
        <Text>Eventos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width: 100, height: 60, backgroundColor: '#1cd', justifyContent: 'center', alignItems: 'center', margin: 10}} onPress={()=>navigation.navigate('PerfilUbicaciones')}>
        <Text>Ubicaciones</Text>
      </TouchableOpacity>
    </View>
  )};

const styles = StyleSheet.create({
  
})

export default Perfil