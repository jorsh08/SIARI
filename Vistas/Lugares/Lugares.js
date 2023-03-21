import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import puntos from '../../Data/datosLugares'
const API = 'https://alexramval.pythonanywhere.com/mostrarPuntosTuristicos'

const Lugares = ({navigation}) => {

    const [listaVisitas, setListaVisitas] = React.useState([])

    async function getLista(){
        console.log(puntos)
        setListaVisitas(puntos)
      }

    async function informacionVisita(Visita){
        navigation.navigate('Visita', Visita)
    }

    useEffect(()=>{
        getLista()
      })
    
  return (
    <View style={[styles.fondo, {flexDirection: 'row'}]}>
        
        <ScrollView >
            <View style={[styles.titulo, {flexDirection: 'row'}]}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                        <Text style={{color:'#8E7962', fontSize: 26}}>Lugares</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: 330, height: 1, backgroundColor: '#8E7962'}}/>
                    </View>
                    <View style={[{flexDirection: 'row'},styles.filtro]}>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row'}}>
                                    <View style={{flexDirection: 'column'}}>
                                        <TouchableOpacity>
                                            <Text>Encontrar</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flexDirection: 'column'}}>
                                        <TouchableOpacity>
                                        </TouchableOpacity>
                                    </View>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <View style={{width: 330, height: 1, backgroundColor: '#8E7962'}}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.listaPTuristicos]}>
                {listaVisitas.map(Visita => (
                    <TouchableOpacity
                        key={Visita.id} 
                        style={[styles.tarjetaPTuristico, {flexDirection: 'column'}]}
                        onPress={()=>informacionVisita(Visita)}>
                        <View style={[styles.contenedor, {flexDirection: 'column'}]}>
                            <Text style={[{fontStyle: 'italic', fontWeight: 'bold', color: '#8E7962'}, {flexDirection: 'column'}]}>{Visita.nombre}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
        
    </View>
  )
}
const styles = StyleSheet.create({
    filtro: {
    marginTop: 20,
    borderRadius: 20, 
    backgroundColor: '#1f1f1f',
    shadowColor: "#000", 
    shadowOffset: {width: 0,height: 1},
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 10, 
    width: 350, 
    height: 80},
    fondo: {
        height: '100%', backgroundColor: '#EBDFD2', shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    titulo:{
        justifyContent: 'center',
        marginTop: '10%',
        marginBottom: '5%',
        alignItems: 'center',
    },
    tarjetaPTuristico:{
        marginTop: '5%',
        backgroundColor: '#ECDDCC',
        width: '80%',
        height: 150,
        borderRadius: 15,
        shadowColor: "#000",
        marginBottom: 20,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    listaPTuristicos: {
        height: '100%',
        alignItems: 'center'
    },
    contenedor: {
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: 5,
        width: '70%',
    }
})

export default Lugares

