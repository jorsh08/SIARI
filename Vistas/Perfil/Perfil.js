import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";




const Perfil= () => {
  const navigation = useNavigation();
  const [email, onChangeTextEmail] = React.useState("");
  const [pass, onChangeTextPass] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);



  return (
    <SafeAreaView>
        
    </SafeAreaView>
  )};

const styles = StyleSheet.create({
  
})

export default Perfil