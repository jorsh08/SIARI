import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable, ScrollView } from "react-native";
import Lugar from "./Lugar";
import { useNavigation } from "@react-navigation/native";


const Favoritos = ({favoritos}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={[styles.sview, styles.top]}>
        <Pressable style={[styles.rectngulo36View, styles.mt32]} onPress={() => navigation.navigate("Inicio")}/>
      </View>
      <ScrollView contentContainerStyle={[styles.sview]}>
        <Lugar titulo={"va"}></Lugar>
        {favoritos?.map(e => (<Lugar titulo={e.titulo} direccion={e.direccion} horario={e.horario} puntuacion={e.puntuacion} imagen={e.imagen}></Lugar>))}
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  mt32: {
    marginTop: "8%",
  },
  top:{
    marginBottom: "3%"
  },
  favoritosText: {
    position: "relative",
    fontSize: 22,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
  },
  rectngulo36View: {
    position: "relative",
    borderRadius: 23,
    backgroundColor: "#ecddcc",
    shadowColor: "rgba(0, 0, 0, 0.36)",
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    width: 307,
    height: 40,
  },
  view: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 22,
    alignItems: "center",
  },
  sview: {
    width: "100%",
    alignItems: "center",
  },
});

export default Favoritos;
