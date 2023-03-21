import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import { LocaleConfig } from 'react-native-calendars'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image, Button } from 'react-native'
import React, { useEffect, useContext, useReducer, useState } from 'react'
import { AuthContext } from '../../Contextos/AuthContext';
import ListadoEventos from './ListadoEventos'
import EventosCalendario from './EventosCalendario';
import SeleccionEventos from './SeleccionEventos'
import { todayBackgroundColor } from 'react-native-calendars/src/style.js'

LocaleConfig.locales['Ev'] = {
    monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    monthNamesShort: ['En','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
    dayNames: ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],
    dayNamesShort: ['D','L','M','X','J','V','S']
}
LocaleConfig.defaultLocale = 'Ev';

const Eventos = () => {
    
    const {eventos, tEventos, marcadores, marcadoresC, btnListado, btnCalendario, listado} = useContext(AuthContext)

    

    return(
    <View style={styles.contPrin}>
        <SeleccionEventos btnListado={btnListado} btnCalendario={btnCalendario} listado={listado}/>

        <View style={styles.contenido}>
            {(listado)
            ?
            <ListadoEventos eventos={eventos} tEventos={tEventos} />
            :
            <EventosCalendario marcadores={marcadores} eventos={eventos} marcadoresC={marcadoresC}/>
            }
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    contPrin:{
        flex: 1,
        backgroundColor: '#efeae4'
    },
    titulo:{
        flex: 1.75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tituloMA:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tituloMB:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btn1:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        height: '100%'
    },
    btn2:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%'
    },
    btnSeleccionado:{
        width: '60%',
        backgroundColor: '#F85D5A',
        alignItems: 'center',
        height: '65 %',
        justifyContent: 'center',
    },
    btnSeleccionadoText:{
        color: 'white',
    },
    btnDeseleccionado:{
        width: '60%',
        alignItems: 'center',
        height: '50%',
        justifyContent: 'center',
        
    },
    btnDeseleccionadoText:{
        color: '#544738'
    },
    contenido:{
        flex:7,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    contenidoSV:{
        width: '100%',
        height: '100%'
    },
    imagenEvento: {
        width: '90%',
        aspectRatio: 1,
        marginTop:'5%'
    },
    txtInfoEvento: {
        fontSize: 12, 
        color: '#8E7962'
    },
    icEL: {
        height: '90%',
        resizeMode: 'contain',
        marginRight:5,
        width: '10%'
    },
    calendarTheme:{
        calendarBackground: '#efeae4',
        monthTextColor: '#8e7962',
        textMonthFontSize: 24,
        textSectionTitleColor: '#5c4f40',
        dayTextColor: '#5c4f40',
        textDayFontWeight: '500',
        textDayFontSize: 16,
        textDayHeaderFontSize: 18,
        textDisabledColor: '#9c8e7e',
        arrowColor:'#5c4f40',
        'stylesheet.calendar.main': {
            monthView: {
                backgroundColor:'#ecddcc'
            }
        },
        todayBackgroundColor:'#f29c92',
        todayTextColor:'#efeae4',
    }
})

export default Eventos