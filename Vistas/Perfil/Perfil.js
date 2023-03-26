import React from "react";
import {  StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Perfil= ({navigation}) => {

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Perfil</Text>
      <TouchableOpacity style={{width: 100, height: 60, backgroundColor: '#1cd', justifyContent: 'center', alignItems: 'center', margin: 30}} onPress={()=>navigation.navigate('Seguidores')}>
        <Text>Seguidores</Text>
      </TouchableOpacity>
    </View>
  )};

const styles = StyleSheet.create({
  
})

export default Perfil