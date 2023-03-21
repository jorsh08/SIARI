import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, {useEffect} from 'react'

const Lugar = (  {titulo, direccion, horario, puntuacion, navigation, route} ) => {
    
  return (
    <View style={[styles.mainView]}>
        <Image
          style={[styles.imgView]}
          resizeMode="contain"
          height={"100%"}
          source={require("../assets/lagunanainari.png")}
        />
      
      <View style={[styles.infoView]}>
        <Text style={[styles.txtTitulo]}>
          Laguna del Nainari {titulo}
        </Text>
          
        <View style={[styles.dir]}>
          <Image
            style={ [styles.iconos]}
            resizeMode="contain"
            
            source={require("../assets/localizacion.png")}
          />
          <Text style={[styles.txt]}>
              Av. Vicente Guerreo SN {direccion}
            </Text>
        
        </View>

        <View style={[styles.horario]}>
          <Image
            style={[styles.iconos]}
            resizeMode="contain"
            source={require("../assets/cronografo.png")}
          />
          <Text style={[styles.txt]}>
            Lun-Dom 00:00-00:00 {horario}
          </Text>
          
        </View>

        <View style={[styles.punt]}>
          <Image
            style={[styles.iconos]}
            resizeMode="contain"
            source={require("../assets/starcolor.png")}
          />
          <Text style={[styles.txt, styles.puntTxt]}>4.8 {puntuacion}</Text>
          <Image
            style={[styles.iconos]}
            resizeMode="contain"
            source={require("../assets/corazonblanco1.png")}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView:{
    marginTop:"7%",
    flexDirection: "row",
    flex: 1,
    marginHorizontal: "8%",
  },
  imgView:{
    position: "relative",
    flex: 4,
    alignSelf:"center",
    maxHeight: 90,
  },
  infoView:{
    position: "relative",
    flexDirection:'column',
    alignItems:"flex-start",
    flex: 7,
  },
  txtTitulo:{
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#f85d5a",

  }, dir:{
    flexDirection:'row',
  }, horario:{
    flexDirection:'row',
  }, punt:{
    flexDirection:'row',
  }, txt:{
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
    paddingLeft: 5,
    flex:9,
    margin:"1%",
  },puntTxt:{
    flex:8,
  }, 
  iconos:{
    flex:1,
    height:18,
    margin: "1%",
  }
  

})

export default Lugar