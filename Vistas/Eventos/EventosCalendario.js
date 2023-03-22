import {Calendar} from 'react-native-calendars'
import { LocaleConfig } from 'react-native-calendars'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React, {useContext} from 'react'
import { contextoEventos } from '../../Contextos/Eventos';


LocaleConfig.locales['Ev'] = {
    monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    monthNamesShort: ['En','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
    dayNames: ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],
    dayNamesShort: ['D','L','M','X','J','V','S']
}
LocaleConfig.defaultLocale = 'Ev';



const EventosCalendario = () => {

    const { marcadores, eventos, marcadoresC} = useContext(contextoEventos)

    return (
        <ScrollView style={{ flex: 1, width: '100%', height: '100%' }}>
        <View style={{ flex: 4, backgroundColor: 'white', width: '90%', marginLeft: '5%' }}>
            {(marcadores.length < 0) ? (<View></View>) : (
                <Calendar
                    theme={styles.calendarTheme}
                    markingType={'multi-dot'}
                    markedDates={marcadores}
                ></Calendar>
            )}
        </View>
        <View style={{ flex: 5, alignItems: 'center' }}>
            <Text style={{ color: '#F85D5A', fontSize: 26, marginTop: '10%' }}>Agenda</Text>
        </View>
        {eventos.map((evento, e) => (
            <View key={evento.id} style={{  flex: 1, width: '90%', height: '50%', backgroundColor: '#ecddcc', flexDirection: 'row', borderRadius: 50, marginBottom: '5%', marginLeft:'5%' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: marcadoresC[e], width: '50%', aspectRatio: 1, borderRadius: 50 }}></View>
                </View>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                    <Text style={{ color: '#8e7962', fontSize: 20, marginTop: '7.5%' }}>{evento.nombre}</Text>
                    <Text style={{ color: '#9c8e7e', fontSize: 14, marginBottom: '7.5%' }}>{evento.nombre}</Text>
                </View>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: marcadoresC[e], borderRadius: 50, paddingLeft: '5%', paddingRight: '5%' }}>
                        <Text style={{ color: '#efeae4' }}>{evento.horaI}-{evento.horaF}</Text>
                    </View>
                </View>
            </View>
        ))}
    </ScrollView>
    )
}
styles = StyleSheet.create({
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
        borderRadius: 50,
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
        marginTop:'5%',
        borderRadius: 50
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
                borderRadius: 25,
                backgroundColor:'#ecddcc'
            }
        },
        todayBackgroundColor:'#f29c92',
        todayTextColor:'#efeae4',
    }
})
export default EventosCalendario