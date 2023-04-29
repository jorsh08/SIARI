import { Text, View, Image, StyleSheet, Pressable } from 'react-native'
import React, {useContext} from 'react'
import Filtro from './Filtro';

const ListadoNotificaciones= () => {
    
    const notificaciones = [{id:1, tipo:1, desc:'Notificación 1', descExt:'Descripción notificación 1'}, {id:2, tipo:2, desc:'Notificación 2', descExt:'Descripción notificación 2'},{id:3, tipo:3, desc:'Notificación 3', descExt:'Descripción notificación 3'},{id:4, tipo:4, desc:'Notificación 4', descExt:'Descripción notificación 4'},{id:5, tipo:5, desc:'Notificación 5', descExt:'Descripción notificación 5'}]
    
    const iconos = [require('../../assets/notificaciones/Evento/Evento-Recordatorio-C.png'),require('../../assets/notificaciones/Evento/Evento-Favorito-C.png'),require('../../assets/notificaciones/Evento/Evento-Seguidor-C.png'), require('../../assets/notificaciones/Notificaciones/Notificacion-Admin-C.png'),require('../../assets/notificaciones/Notificaciones/Notificacion-General-C.png')];

  return (
        <View style={{width: '100%', height: '100%', marginTop: 10}}>
            <View style={{alignItems: 'center', marginBottom: 20}}>
                <Filtro/>
            </View>
            {notificaciones.map(element =>(
                <Pressable key={element.id}>
                    <View style={{flexDirection:'row',marginHorizontal:'10%',height:90, width:'100%'}}>
                        <View style={{flex:1.5, alignContent:'center',alignItems:'center',justifyContent:'center'}}>
                            <Image style={styles.imagenEvento} source={iconos[element.tipo-1]}/>
                        </View>
                        <View style={{flex:7, justifyContent:'center'}}>
                            <Text style={styles.tituloNoti}>
                                {element.desc}
                            </Text>
                            <Text style={styles.descNoti}>
                                {element.descExt}
                            </Text>
                        </View>
                    </View>
                </Pressable>
                
            ))}
        </View>
  )
}
const styles = StyleSheet.create({
    contenidoSV:{ //miau
        width: '100%',
        height: '100%'
    },
    imagenEvento: { //miau
        width:50,
        height:50
    },
    descNoti: { //miau
        fontSize: 12, 
        color: '#8E7962',
        width:'70%'
    },
    tituloNoti: { //miau
        fontSize: 16, 
        color: '#8e7962',
        fontWeight:'bold',
        width:'70%'
    },
    icEL: { //miau
        height: '90%',
        resizeMode: 'contain',
        marginRight:5,
        width: '10%'
    },
})
export default ListadoNotificaciones