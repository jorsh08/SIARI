import * as React from "react";
import { useContext, useEffect } from "react";
import { View, Image, StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from "../../Contextos/AuthContext";

const Inicio = () => {
  const navigation = useNavigation();


  const verificarSesion = async () => {
    try {
      const sesion = await AsyncStorage.getItem('AccessToken');
      if (sesion) {
        navigation.navigate("Mapa")
      } else {
        console.log("first") 
        return false
      }
    } catch (error) {
      console.log('Error al verificar la sesión:', error);
    }
  };

  useEffect(()=>{
    verificarSesion()
  },[])

  return (
  <View style={styles.inicioView}>
      <Image
        style={styles.lOGOSIARIVER2Icon}
        resizeMode={"contain"}
        source={require("../../assets/logosiariver2.png")}
      />
      <Text style={[styles.sIARIText, styles.mt19_38, styles.mb1]}>SIARI</Text>
      <Text style={[styles.holaText, styles.mt19_38, styles.mb1]}>¡Hola!</Text>
      <Text
        style={[styles.estamosListosParaLlevarte, styles.mt11_379999999999999, styles.mb1]}
      >
        <Text style={styles.porCajemeText}>Estamos listos para llevarte por Cajeme.</Text>
      </Text>
      <View style={styles.botones}>
        <TouchableOpacity style={[styles.rectngulo4Pressable]} onPress={() => navigation.navigate("RegistroDeCuenta")}>
          <Text style={styles.crearUnaCuenta}>Crear una cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectngulo5Pressable} onPress={() => navigation.navigate("InicioDeSesin")}>
          <Text style={styles.yaTengoUnaCuenta}>Ya tengo una cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
  botones:{
    marginTop: 20
  },
  mt19_38: {
    marginTop: "10%",
  }, mb1: {
    marginBottom: 1,
  }, mt11_379999999999999: {
    marginTop: "7%",
  }, mt62_379999999999995: {
    marginTop: "18%",
  }, mt_27_62: {
    marginTop: "-9.5%",
  }, mt22_38: {
    marginTop: "9%",
  }, lOGOSIARIVER2Icon: {
    position: "relative", width: "46%", height: "35%", marginTop: "10%",
  }, sIARIText: {
    position: "relative", fontSize: 55, fontFamily: "SF UI Text", color: "#f85d5a", textAlign: "center",
  }, holaText: {
    position: "relative",
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "center",
    opacity: 0.5,
  }, estamosListosPara: {
    margin: 0,
  }, porCajemeText: {
    margin: 0,
  }, estamosListosParaLlevarte: {
    position: "relative", fontSize: 16, fontFamily: "SF UI Text", color: "#544738", textAlign: "center", opacity: 0.5,
  }, 
  rectngulo4Pressable: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19, 
    backgroundColor: "#f85d5a",
    width: 235, 
    height: 38,
  }, 
  crearUnaCuenta: {
    fontSize: 16, 
    fontFamily: "SF UI Text", 
    color: "#fff"
  },  
  rectngulo5Pressable: {
    borderRadius: 20,
    borderColor: "#f85d5a",
    borderWidth: 1,
    width: 235,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  }, 
  yaTengoUnaCuenta: {
    fontSize: 16, 
    fontFamily: "SF UI Text", 
    color: "#f85d5a", 
  }, 
  yaTengoUnaCuenta1: {
    justifyContent: 'center'
  }, 
  inicioView: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: "14%",
    paddingTop: "12%",
    paddingRight: "14%",
    alignItems: "center",
  },
});

export default Inicio;
