import { Text, ScrollView, View, Image, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const ListadoEventos = ({eventos, tEventos}) => {
    

  return (
        <ScrollView style={styles.contenidoSV}>
            {eventos.map(element =>(
                <View key={element.id} style={{flexDirection: 'row', width: '85%',marginLeft:'7.5%',paddingBottom:25,Height:'20%'}}>
                    <View style={{flex:1, alignItems:'flex-start', justifyContent:'flex-start'}}>
                        <Image style={styles.imagenEvento} source={{uri: element.imagen}}/>
                    </View>
                    <View style={{flex:2, flexDirection: 'column'}}>
                        <View style={{flex:1}}>
                            <Text style={{color:'#F85D5A', fontSize: 20, }}>{element.nombre}</Text>
                        </View>
                        <View style={{flexDirection:'row', flex:50}}>
                            <View style={{flex:5}}>
                                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap',alignItems: 'center'}}>
                                    <Image style={styles.icEL} source={require('../../assets/calendario.png')}/>
                                    <Text style={styles.txtInfoEvento}>{element.fecha}</Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap',alignItems: 'center'}}>
                                    <Image style={styles.icEL} source={require('../../assets/cronografo.png')}/>
                                    <Text style={styles.txtInfoEvento}>{element.horaI}-{element.horaF}</Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap',alignItems: 'center'}}>
                                    <Image style={styles.icEL} source={require('../../assets/localizacion.png')}/>
                                    <Text style={styles.txtInfoEvento}>{element.lugar}</Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap',alignItems: 'center'}}>
                                    <Image style={styles.icEL} source={require('../../assets/informacion.png')}/>
                                    <Text style={styles.txtInfoEvento}>
                                        {tEventos[element.tipoEvento]}
                                    </Text>
                                </View>
                                <View style={{flex: 5}}></View>
                            </View>
                            <View style={{flex:1, height:'100%', justifyContent:'flex-end', alignItems:'flex-start'}}>
                                <Image style={{width:'70%', resizeMode: 'contain', height:'25%',marginBottom:'10%'}} source={require('../../assets/campana.png')}/>
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
  )
}
const styles = StyleSheet.create({
    contenidoSV:{ //miau
        width: '100%',
        height: '100%'
    },
    imagenEvento: { //miau
        width: '90%',
        aspectRatio: 1,
        marginTop:'5%',
        borderRadius: 50
    },
    txtInfoEvento: { //miau
        fontSize: 12, 
        color: '#8E7962'
    },
    icEL: { //miau
        height: '90%',
        resizeMode: 'contain',
        marginRight:5,
        width: '10%'
    },
})
export default ListadoEventos