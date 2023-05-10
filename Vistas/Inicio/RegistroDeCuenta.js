import { Image, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'
import React, { Component, useContext, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "react-native-image-picker"
import {launchImageLibrary} from 'react-native-image-picker'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from "@react-navigation/native";


const ImgPkr = (state) =>{
  let options = {
    title: 'Selecciona una imagen',
    customButtons: [
      { name: 'customOptionKey', title: 'Selecciona una foto' },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.launchImageLibrary(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      const source = { uri: response.uri };
      console.log(response)
      console.log('response', JSON.stringify(response));
      state["filePath"] = response;
      state["fileData"] = response.data;
      state["fileUri"] =  response.uri;
      }
  })
}

const Fperfil = ({state}) =>{
  if (state["fileUri"].length > 0){
    return(<TouchableOpacity style={[styles.to]} onPress={() => ImgPkr(state)}>
      <Image source={{uri: state["fileUri"] }} widh={"60%"} height={"60%"} style={[styles.img]}  resizeMode='contain'/>
      <View style={{backgroundColor: "#63B360", width: 20, height:20}}><Text style={{}}>+</Text></View>
    </TouchableOpacity> )
  }else{
    return(<TouchableOpacity style={[styles.to]} onPress={() => ImgPkr(state)}>
      <Image source={ require("../../assets/Registro/trazado-1.png")}  style={[styles.img]} resizeMode='contain'/>
      <View style={{backgroundColor: "#63B360", width: 40, height:40, flexDirection:"row", alignItems: "center", borderRadius: 25, position:"absolute", top: "75%", left:"75%"}}><Text style={{fontWeight: "400", color: "white", fontSize:28, textAlign: "center", width: "100%"}}>+</Text></View>
    </TouchableOpacity>)
  }
}

const RegistroDeCuenta  = ({}) => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [txtNombre, setTxtNombre] = React.useState("");
  const [txtEmail, setTxtEmail] = React.useState("");
  const [txtPass, setTxtPass] = React.useState("");
  const [txtUsuario, setTxtUsuario] = React.useState("");
  const [txtFn, setTxtFn] = React.useState("");
  

  state = {
    filePath: {
      data: '',
      uri: ''
    },
    fileData: '',
    fileUri: ''
  }
  return (
  <SafeAreaView style={[styles.mainView]}>
    <View style={[styles.header]}>
      <TouchableOpacity style={{flex:2, alignSelf:"center"}} onPress={() => navigation.goBack()}>
      <Text style={{color:"#94806A", fontSize: 18, fontWeight:"bold", alignSelf: "center"}}>X</Text>
      </TouchableOpacity>
        <View style={{flex: 8, alignSelf:"center"}}><Text style={{color:"#f85d5a", fontSize: 28, }}>Ingresa tus datos</Text></View>
    </View>
    <View style={[styles.fperfil]}>
        <Fperfil state={state}></Fperfil>
    </View>
        <View style={[styles.datos]}>
            <View style={{flex:1, flexDirection: "row", alignItems: "center"}}>
              <Image source={require('../../assets/Registro/usuario.png')} style={{flex:1}} resizeMode='contain'></Image>
              <TextInput style={[styles.ti]} placeholder='Nombre' id="txtNombre" onChangeText={(value)=>{setTxtNombre(value)}}></TextInput>
            </View>
            <View style={{flex:1, flexDirection: "row", alignItems: "center"}}>
              <Image source={require('../../assets/Registro/usuario.png')} style={{flex:1}} resizeMode='contain'></Image>
              <TextInput style={[styles.ti]} placeholder='Email' id="txtEmail" onChangeText={(value)=>{setTxtEmail(value)}}></TextInput>
            </View>
            <View style={{flex:1, flexDirection: "row", alignItems: "center"}}>
              <Image source={require('../../assets/Registro/usuario.png')} style={{flex:1}} resizeMode='contain'></Image>
              <TextInput style={[styles.ti]} placeholder="Contraseña" id="txtPass" secureTextEntry={true} onChangeText={(value)=>{setTxtPass(value)}}></TextInput>
            </View>
            <View style={{flex:1, flexDirection: "row", alignItems: "center"}}>
              <Image source={require('../../assets/Registro/usuario.png')} style={{flex:1}} resizeMode='contain' ></Image>
              <TextInput style={[styles.ti]} placeholder="Usuario" onChangeText={(value)=>{setTxtUsuario(value)}}></TextInput>
            </View>
            <View style={{flex:1, flexDirection: "row", alignItems: "center"}}>
              <Image source={require('../../assets/Registro/usuario.png')} style={{flex:1}} resizeMode='contain'></Image>
              <TextInput style={[styles.ti]} placeholder="Fecha de nacimiento" onChangeText={(value)=>{setTxtFn(value)}}></TextInput>
            </View>
        </View>
        <View style={[styles.tyc]}>
          <CheckBox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)} style={{borderRadius: 30}}></CheckBox>
          <Text style={{fontSize: 18, opacity: 0.6, textDecorationLine: 'underline'}} onPress={() => {}}>Acepto términos y condiciones</Text>
        </View>
        <TouchableOpacity style={[styles.btnCrear]} onPress={() => {console.log(txtNombre)}}>
            <Text style={{alignSelf: "center", fontSize: 18, color: "#EBDFD2", width: "100%", textAlign: "center"}}>Crear cuenta</Text>
        </TouchableOpacity>
  </SafeAreaView>
  )
}

/**/

export default RegistroDeCuenta;

const styles = StyleSheet.create({
  mainView:{
    flex: 1,
    position: "relative",
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#EBDFD2",
    margin: 0,
  },
  header:{
    flexDirection: "row",
    marginVertical: "5%"
  },
  fperfil:{
    flex: 4,
    flexDirection: 'column',
    alignItems: "center"
  },
  datos:{
    flex: 6,
    marginHorizontal: "10%",
  },
  ti:{
    flex:9, 
    borderBottomWidth: 1, 
    marginHorizontal: "7%"
  },
  tyc:{
    flex: 3,
    flexDirection: "row",
    marginHorizontal: "7%",
    alignSelf: "center",
    alignItems: "center"
  },
  btnCrear:{
    flex: 1,
    backgroundColor: "#f85d5a",
    marginVertical: "8%",
    width: "60%",
    borderRadius: 32,
    alignSelf: "center",
    flexDirection: "row"
  },
  img:{
    flex: 1,
    height:"40%",
    width: "40%"
  },
  to:{
    backgroundColor: "#8E796311",
    height: 200,
    width: 200,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 100,
    
  }
})



/*Instalé 
npm install react-native-image-picker --save
  react-native link react-native-image-picker
yarn add @react-native-community/checkbox

*/