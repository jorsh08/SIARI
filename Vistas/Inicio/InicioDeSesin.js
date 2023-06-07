import * as React from "react";
import { useContext } from "react";
import { Image, StyleSheet, Text, View, Pressable, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../Contextos/AuthContext";
import AsyncStorage from '@react-native-async-storage/async-storage'


const InicioDeSesin =  () => {
  const navigation = useNavigation();
  const [email, onChangeTextEmail] = React.useState("");
  const [pass, onChangeTextPass] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);



  return (
    <SafeAreaView style={styles.inicioDeSesinView}>
      <Image
        style={[styles.lOGOSIARIVER2Icon, styles.mt4]}
        resizeMode="contain"
        source={require("../../assets/logosiariver2.png")}
      />
      <Text style={[styles.bienvenidoText, styles.mt13_72]}>¡Bienvenido!</Text>
      <Text style={[styles.estamosFelicesDeVerteDeNu]}> Estamos felices de verte de nuevo </Text>

      <SafeAreaView style={[styles.inputView, styles.mt3]}>
        <Image
          style={[styles.cartaIcon, styles.mt276_72]}
          resizeMode="contain"
          source={require("../../assets/carta2.png")}
        />
        <TextInput
          style={[styles.input, styles.emailText]}
          onChangeText={onChangeTextEmail}
          value={email}
          textAlign={'left'}
          maxLength={30}
          secureTextEntry={false}
          placeholder={"Email"}
        />
      </SafeAreaView>
      <View style={[styles.lnea16View]} />

      <SafeAreaView style={[styles.inputView]}>
        <Image
          style={[styles.cerraduraIcon]}
          resizeMode="contain"
          source={require("../../assets/cerradura.png")}
        />
        <TextInput
          style={[styles.input, styles.contraseaText]}
          onChangeText={onChangeTextPass}
          value={pass}
          textAlign={'left'}
          secureTextEntry={true}
          placeholder={"Contraseña"}
        />
      </SafeAreaView>
      <View style={[styles.lnea17View]}/>
      <Text style={[styles.olvidMiContrasea]}> 
        Olvidé mi contraseña
      </Text>
      <Text style={[styles.oText]}>O</Text>
      <View style={[styles.rectngulo41View]} />
      <View style={[styles.lnea15View]} />

      <View style={[styles.rectngulo38View, styles.mt3]}>
        <Image
          style={[styles.logotipoDeGoogleGlassIcon]}
          resizeMode="contain"
          source={require("../../assets/logotipodegoogleglass.png")}
        />
        <Text style={[styles.continuarConGoogle]}>
          Continuar con Google
        </Text>
      </View>
      <View style={[styles.rectngulo40View, styles.mt2]}>
        <Image
          style={[styles.logotipoDeAppleIcon]}
          resizeMode="contain"
          source={require("../../assets/logotipodeapple.png")}
        />
        <Text style={[styles.continuarConApple]}>
          Continuar con Apple
        </Text>
      </View>
      
      <TouchableOpacity style={[styles.rectngulo4Pressable, styles.mt5]} onPress={() => navigation.navigate("BottomTab")}>
        <Text style={[styles.iniciarText]}>Iniciar </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mt1: {
    marginTop: "3%",
  },
  mt2: {
    marginTop: "5%",
  },
  mt3: {
    marginTop: "7%",
  },
  mt4: {
    marginTop: "10%",
  },
  mt5: {
    marginTop: "12%",
  },
  inputView:{
    width: "68%",
    flexDirection: 'row'
  },
  lOGOSIARIVER2Icon: {
    position: "relative",
    width: 69.5,
    height: 151.28,
    marginTop: "6%",
  },
  bienvenidoText: {
    position: "relative",
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "SF UI  Text",
    color: "#f85d5a",
    textAlign: "center",
    marginTop: "3%",
  },
  estamosFelicesDeVerteDeNu: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#544738",
    textAlign: "center",
    opacity: 0.57,
    marginTop: "3%",
  },
  emailText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    marginRight: "0%",
    flex: 9,
  },
  cartaIcon: {
    position: "relative",
    width: 17,
    height: 17,
    flex: 1,
    alignSelf:"center",
  },
  lnea16View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: "52%",
    height: 2,
  },
  contraseaText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    marginRight: "0%",
    flex: 9,
  },
  cerraduraIcon: {
    position: "relative",
    width: 17,
    height: 17,
    alignSelf:"center",
    flex: 1,
  },
  lnea17View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: "53%",
    height: 2,
  },
  olvidMiContrasea: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.5,
    marginLeft: 130,
    paddingBottom: 0,
  },
  oText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.5,
    marginTop: "5%",
  },
  rectngulo41View: {
    position: "relative",
    backgroundColor: "#efeae4",
    width: 29,
    height: 20,
  },
  lnea15View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    width: 349,
    height: 2,
    opacity: 0.16,
    marginTop: -30,
  },
  rectngulo38View: {
    position: "relative",
    borderRadius: 21,
    backgroundColor: "#94806a",
    width: 235,
    height: 41,
    opacity: 0.2,
    flexDirection: "row",
    alignItems: "center",
  },
  logotipoDeGoogleGlassIcon: {
    opacity: 1,
    width: 25,
    height: 25,
    flex: 2,
  },
  continuarConGoogle: {
    opacity: 1,
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    flex: 8
  },
  rectngulo40View: {
    position: "relative",
    borderRadius: 21,
    backgroundColor: "#94806a",
    width: 235,
    height: 41,
    opacity: 0.2,
    flexDirection: "row",
    alignItems: "center"
  },
  logotipoDeAppleIcon: {
    position: "relative",
    width: 25,
    height: 25,
    flex: 2,
  },
  continuarConApple: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    flex: 8,
  },
  rectngulo4Pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
    backgroundColor: "#f85d5a",
    width: 235,
    height: 38,
    alignItems: "center",
  },
  iniciarText: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "SF UI  Text",
    color: "#e8e8e8",
  },
  inicioDeSesinView: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default InicioDeSesin;
