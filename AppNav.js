import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mapa from './Vistas/Principal/Mapa';
import Inicio from './Vistas/Inicio/Inicio';
import Eventos from './Vistas/Eventos/Eventos';
import PuntoTuristico from './Vistas/Lugares/PuntoTuristico';
import InicioDeSesin from "./Vistas/Inicio/InicioDeSesin";
import RegistroDeCuenta from "./Vistas/Inicio/RegistroDeCuenta";
import Perfil from './Vistas/Perfil/Perfil';
import Lugares from './Vistas/Lugares/Lugares';
import Seguidores from './Vistas/Perfil/Seguidores/Seguidores';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () =>{
  return(
  <Tab.Navigator screenOptions={{
    tabBarStyle: [bt_styles.tab, {zIndex: -99}],
    tabBarShowLabel: false,
    headerShown: false,
  }}>
    <Tab.Screen name="Mapa" component={Mapa} options={{ 
      tabBarIcon: ({focused, color, size}) =>{
        if(focused)
          return(<Image resizeMode="contain" style={bt_styles.iconos} source={require("./assets/homerojo.png")}/>)
        else
          return(<Image resizeMode="contain" style={bt_styles.iconos} source={require("./assets/hogardescanso.png")}/>)
      }
    }}/>
    <Tab.Screen name="Adonde" component={Lugares} options={{ 
      tabBarIcon: ({focused, color, size}) =>{
        if(focused)
          return(<Image resizeMode="contain" style={bt_styles.iconos} source={require("./assets/localizacionrojo.png")}/>)
        else 
          return(<Image resizeMode="contain" style={bt_styles.iconos} source={require("./assets/localizacion1.png")}/>)
      }}}/>
    <Tab.Screen name="Calendario" component={Eventos} options={{ 
      tabBarIcon: ({focused, color, size}) =>{
        if(focused)
          return(<Image resizeMode="contain" style={bt_styles.iconos} source={require("./assets/calendariorojo.png")}/>)
        else
            return(<Image resizeMode="contain" style={bt_styles.iconos} source={require("./assets/calendario.png")}/>)
      }}}/>
    <Tab.Screen name="Perfil" component={Perfil} options={{ 
      tabBarIcon: ({focused, color, size}) =>{
        if(focused)
          return(<Image resizeMode="contain" style={bt_styles.iconos} source={require("./assets/trazado-44.png")}/>)
        else
          return(<Image resizeMode="contain" style={bt_styles.iconos} source={require("./assets/trazado-441.png")}/>)
      }}}/>
  </Tab.Navigator>
  )
}

export default function AppNav() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }}/>
          <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }}/>
          <Stack.Screen name="Mapa" component={Mapa} options={{ headerShown: false }}/>
          <Stack.Screen name="Eventos" component={Eventos} options={{ headerShown: false }}/>
          <Stack.Screen name="Lugares" component={Lugares} options={{ headerShown: false }}/>
          <Stack.Screen name="PuntoTuristico" component={PuntoTuristico} options={{ headerShown: false }}/>
          <Stack.Screen name="InicioDeSesin" component={InicioDeSesin} options={{ headerShown: false }} />
          <Stack.Screen name="RegistroDeCuenta" component={RegistroDeCuenta} options={{ headerShown: false }} />
          <Stack.Screen name="Seguidores" component={Seguidores} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const bt_styles = StyleSheet.create({
  tab: {
    backgroundColor: "#ECDDCC",
    height: "8%",
    overflow: 'hidden'
  },
  iconos:{
    height:30,
  }
})