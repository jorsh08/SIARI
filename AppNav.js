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
import Seguidos from './Vistas/Perfil/Seguidos/Seguidos';
import PerfilEventos from './Vistas/Perfil/Eventos/Eventos'
import PerfilUbicaciones from './Vistas/Perfil/Ubicaciones/Ubicaciones'
import Notificaciones from './Vistas/Notificaciones/Notificaciones';
import EditarPerfil from './Vistas/Perfil/EditarPerfil';
import Persona from './Vistas/Persona/Persona';
import AlvaroObregon from './Vistas/Modelos3D/AlvaroObregon'
import Bibloteca from './Vistas/Modelos3D/Bibloteca'
import Catedral from './Vistas/Modelos3D/Catedral'
import Palacio from './Vistas/Modelos3D/Palacio'
import RelojMundial from './Vistas/Modelos3D/RelojMundial'
import RelojSol from './Vistas/Modelos3D/RelojSol'
import AgregarEvento from './Vistas/Eventos/AgregarEvento';
import AgregarUbicacion from './Vistas/Eventos/AgregarUbicacion';
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
    
    <Tab.Screen name="Eventos" component={Eventos} options={{ 
      tabBarIcon: ({focused, color, size}) =>{
        if(focused)
          return(<Image resizeMode="contain" style={bt_styles.iconos} source={require("./assets/calendariorojo.png")}/>)
        else
            return(<Image resizeMode="contain" style={bt_styles.iconos} source={require("./assets/calendario.png")}/>)
      }}}/>
    <Tab.Screen name="Notificaciones" component={Notificaciones} options={{ 
      tabBarIcon: ({focused, color, size}) =>{
        if(focused)
            return(<Image resizeMode="contain" style={bt_styles.iconos} source={require("./assets/notificacion-rojo.png")}/>)
          else
            return(<Image resizeMode="contain" style={bt_styles.iconos} source={require("./assets/notificacion-cafe.png")}/>)
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
          <Stack.Screen name="Notificaciones" component={Notificaciones} options={{ headerShown: false }}/>
          <Stack.Screen name="Eventos" component={Eventos} options={{ headerShown: false }}/>
          <Stack.Screen name="Lugares" component={Lugares} options={{ headerShown: false }}/>
          <Stack.Screen name="PuntoTuristico" component={PuntoTuristico} options={{ headerShown: false }}/>
          <Stack.Screen name="InicioDeSesin" component={InicioDeSesin} options={{ headerShown: false }} />
          <Stack.Screen name="RegistroDeCuenta" component={RegistroDeCuenta} options={{ headerShown: false }} />
          <Stack.Screen name="Seguidores" component={Seguidores} options={{ headerShown: false }} />
          <Stack.Screen name="Seguidos" component={Seguidos} options={{ headerShown: false }} />
          <Stack.Screen name="PerfilEventos" component={PerfilEventos} options={{ headerShown: false }} />
          <Stack.Screen name="PerfilUbicaciones" component={PerfilUbicaciones} options={{ headerShown: false }} />
          <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ headerShown: false }} />
          <Stack.Screen name="AlvaroObregon" component={AlvaroObregon} options={{ headerShown: false }} />
          <Stack.Screen name="Bibloteca" component={Bibloteca} options={{ headerShown: false }} />
          <Stack.Screen name="Catedral" component={Catedral} options={{ headerShown: false }} />
          <Stack.Screen name="Palacio" component={Palacio} options={{ headerShown: false }} />
          <Stack.Screen name="RelojMundial" component={RelojMundial} options={{ headerShown: false }} />
          <Stack.Screen name="RelojSol" component={RelojSol} options={{ headerShown: false }} />
          <Stack.Screen name="Persona" component={Persona} options={{ headerShown: false }} />
          <Stack.Screen name="AgregarEvento" component={AgregarEvento} options={{ headerShown: false }} />
          <Stack.Screen name="AgregarUbicacion" component={AgregarUbicacion} options={{ headerShown: false }} />
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
    width: 30
  }
})