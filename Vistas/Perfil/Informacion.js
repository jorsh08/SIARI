import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Estado = ({est}) =>{
    if (est == 0){
        return(
            <View style={{flex:1, width: "30%", backgroundColor: "#63B360", flexDirection: "row", alignItems: "center",alignSelf: "center", borderRadius: 25}}>
                <View style={{flex: 1, flexDirection: "column", alignItems: "center"}}>
                    <Text style={{fontSize: 18, color:"white", fontWeight: "bold"}}>Estado</Text>
                    <Text style={{fontSize: 18, color:"white"}}> Aprobado</Text>
                </View>
            </View>)
    } else if(est == 1){
        return(
            <View style={{flex:1, width: "30%", backgroundColor: "#D9D9D9", flexDirection: "row", alignItems: "center",alignSelf: "center", borderRadius: 25}}>
                <View style={{flex: 1, flexDirection: "column", alignItems: "center"}}>
                    <Text style={{fontSize: 18, color:"#94806A", fontWeight: "bold"}}>Estado</Text>
                    <Text style={{fontSize: 18, color:"#94806A"}}> Pendiente</Text>
                </View>
            </View>)
    }else if(est == 2){
        return(
            <View style={{flex:1, width: "30%", backgroundColor: "#f85d5a", flexDirection: "row", alignItems: "center",alignSelf: "center", borderRadius: 25}}>
                <View style={{flex: 1, flexDirection: "column", alignItems: "center"}}>
                    <Text style={{fontSize: 18, color:"white", fontWeight: "bold"}}>Estado</Text>
                    <Text style={{fontSize: 18, color:"white"}}> Cancelado</Text>
                </View>
            </View>)
    }
    return(
    <View style={{flex:1, width: "30%", backgroundColor: "#63B360", flexDirection: "row", alignItems: "center",alignSelf: "center", borderRadius: 25}}>
        <View style={{flex: 1, flexDirection: "column", alignItems: "center"}}>
            <Text style={{fontSize: 18, color:"white", fontWeight: "bold"}}>Estado</Text>
            <Text style={{fontSize: 18, color:"white"}}> Aprobado</Text>
        </View>
    </View>
    )
}

const Informacion = ({Titulo, url, hora, dir, desc, fecha, imagen, estado, navigation, route}) =>{
    return(
        <SafeAreaView style={[styles.mainView]}>
            <View style={[styles.header]}>
                <View style={{flex:2, alignSelf:"center"}}><Text style={{color:"#94806A", fontSize: 24, fontWeight:"bold", alignSelf: "center"}}>X</Text></View>
                <View style={{flex: 8, alignSelf:"center"}}><Text style={{color:"#8E7962", fontSize: 36, fontWeight:"bold"}}>El titulo{Titulo}</Text></View>
            </View>
            <ScrollView contentContainerStyle= {[styles.body]}>
                <Estado est={0}></Estado>
                <View style={[styles.vimg]}>
                    <Image
                    source={require("../../assets/Perfil/fotoPerfil.jpg")}
                    style={styles.img}
                    resizeMode="contain"/>
                </View>
                <View style={[styles.hdf]}>
                    <View style={[styles.hf]}>
                        <Text style={{color: "#8E7962", fontWeight: "bold", fontSize: 18}}>Hora</Text>
                        <Text style={{color: "#94806A", fontSize: 14}}>15:00{hora}</Text>
                    </View>
                    <View style={[styles.d]}>
                        <Text style={{color: "#8E7962", fontWeight: "bold", fontSize: 18}}>Direccion</Text>
                        <Text style={{color: "#94806A", fontSize: 14}}>sisisis{dir}</Text>
                    </View>
                    <View style={[styles.hf]}>
                        <Text style={{color: "#8E7962", fontWeight: "bold", fontSize: 18}}>Fecha</Text>
                        <Text style={{color: "#94806A", fontSize: 14}}>{fecha}</Text>
                    </View>
                </View>
                <View style={[styles.desc]}>
                    <Text style={{flex: 1, color: "#8E7962", fontSize: 24, fontWeight: "bold", alignSelf: "flex-start"}}>Descripción</Text>
                    <Text style={{flex: 10, color: "#94806A", fontSize: 16, marginTop: "3%"}}>desawdawdwadawdwadawddesawdawdwesawdawdwadawdwadawddesawdawdwesawdawdwadawdwadawddesawdawdwesawdawdwadawdwadawddesawdawdwesawdawdwadawdwadawddesawdawdwesawdawdwadawdwadawddesawdawdwesawdawdwadawdwadawddesawdawdw{desc}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

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
    },
    body:{
        marginHorizontal: "4%",
        marginTop: "3%",
        alignItems: "center",
        alignSelf: "center"
    },
    vimg:{
        flex: 4,
        marginTop: "2%"
    },
    img:{
        width: "90%",
        flex: 1,
        alignSelf: "center",
        borderRadius: 25,
    },
    hdf:{
        flex: 1,
        flexDirection: "row",
        borderTopColor: "#8E7962",
        borderBottomColor: "#8E7962",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        
    },
    hf:{
        flex: 1,
        alignItems: "flex-start",
        marginHorizontal: "3%",
        marginTop: "2%",
    },
    d:{
        flex: 2,
        marginHorizontal: "3%",
        marginTop: "2%",
    },
    desc:{
        width: "100%",
        marginTop: "3%",
        alignItems: "flex-start",
    }


})

export default Informacion;