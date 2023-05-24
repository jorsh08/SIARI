import React from "react";
import { Image, StyleSheet, Text, View, Pressable, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";
import ListadoEventos from "./EventosFavoritos/ListadoEventos";
import EventosProvider from '../../Contextos/PerfilEventosFavorito';
import EventosFavoritos from "./EventosFavoritos/EventosFavoritos";




const Perfil = () => {
  const navigation = useNavigation();
  const [email, onChangeTextEmail] = React.useState("");
  const [pass, onChangeTextPass] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <SafeAreaView style={[styles.mainView]}>
        <View style={styles.perfil}>
          <View style={{flex:5, flexDirection:"column"}}>
              <View style={{flex:1, flexDirection: "row", marginTop: "5%"}}>
                <TouchableOpacity style={[styles.btnConfig]}>
                  <Image 
                      style={[styles.imgView]}
                      resizeMode="contain"
                      height={"100%"}
                      source={require("../../assets/Perfil/config.png")}/>
                </TouchableOpacity>
                <View style={{flex: 6}}></View>
                <View style={[styles.calificacion]}>
                  <Image 
                      style={[styles.imgCal]}
                      resizeMode="contain"
                      height={"100%"}
                      source={require("../../assets/starcolor.png")}/>
                  <Text style={{fontSize: 16, color: "#8E7962"}}>5.0</Text>
                </View>
              </View>
              <View style={{flex:2}}>
                <Text numberOfLines={1} adjustsFontSizeToFit style={{ fontSize: 42, color:"#8E7962"}}>
                  Nombre Usuario
                </Text>
              </View>
              
              <View style={{flex:2, flexDirection: "row", marginTop: "7%"}}>
                <TouchableOpacity style={styles.btnSeg} onPress={()=>navigation.navigate('Seguidos')}>
                  <Text numberOfLines={1} style={styles.txtBtns}>Seguidos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSeg} onPress={()=>navigation.navigate('Seguidores')}>
                  <Text numberOfLines={1} style={styles.txtBtns}>Seguidores</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex:2, flexDirection: "row", marginBottom: "10%"}}>
                <TouchableOpacity style={styles.btnSeg} onPress={()=>navigation.navigate('PerfilEventos')}>
                  <Text numberOfLines={1} style={styles.txtBtns}>Eventos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSeg} onPress={()=>navigation.navigate('PerfilUbicaciones')}>
                  <Text numberOfLines={1} style={styles.txtBtns}>Ubicaciones</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.viewFP}>
            <Image 
                    style={[styles.imgFP]}
                    height={120}
                    width={120}
                    resizeMode="contain"
                    source={require("../../assets/Perfil/fotoPerfil.jpg")}/>
            <TouchableOpacity style={styles.btnEditar}>
                  <Text numberOfLines={1} style={styles.txtBtns}>Editar perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.favoritos}>
          <View style={styles.tituloFav}>
            <Text style={{fontSize: 42, color: "#8E7962", fontWeight: "bold"}}>Favoritos</Text>
          </View>
          <EventosFavoritos/>
        </View>
    </SafeAreaView>
  )};

const styles = StyleSheet.create({
  mainView:{
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#EBDFD2",
  },
  perfil:{
    height:"100%",
    width: "100%",
    flex: 1,
    backgroundColor: "#94806A33",
    paddingLeft: "5%",
    paddingRight:"1%",
    flexDirection: "row",
    borderBottomLeftRadius: 80,
  },
  btnConfig:{
    flex: 1,
    alignItems: "center",
  },
  calificacion:{
    flex:2,
    alignItems: "center",
    flexDirection: "row",
  },
  imgCal:{
    marginHorizontal: "10%"
  },
  btnSeg:{
    flex: 1,
    backgroundColor: "#8E7962",
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    height: "70%",
    marginHorizontal: "2%",
  },
  txtBtns: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    color: "#EBDFD2",
    textShadowColor: 'rgba(0, 0, 0, .5)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 10
  },
  viewFP:{
    width:"100%",
    height:"100%",
    flex:2, 
    flexDirection: "column", 
    alignSelf:"center",
    marginTop: "8%",
    marginHorizontal: "2%"
  },
  imgFP:{
    height: 120,
    width: 120,
    borderRadius: 100,
  },
  btnEditar:{
    backgroundColor: "#8E7962",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    height: "12%",
    marginTop: "40%",
  },
  favoritos:{
    flex:2,
    flexDirection: "column",
    marginVertical: "3%",
  }, 
  tituloFav:{
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    maxHeight: 60,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#8E7962",
    marginHorizontal: "5%",
    marginBottom: "3%",
  }

})

export default Perfil




/*Instalé

npm install @react-navigation/material-top-tabs react-native-tab-view
npm install react-native-pager-view
*/

