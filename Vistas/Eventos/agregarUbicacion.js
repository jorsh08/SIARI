import { Text, ScrollView, View, Image, StyleSheet, TextInput, FlatList, Dimensions, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import { backgroundColor } from 'react-native-calendars/src/style'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { SelectList } from 'react-native-dropdown-select-list'
import DatePicker from 'react-native-date-picker'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import MapView, { Marker } from 'react-native-maps';
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
const widthC = width * 0.7;

const AgregarUbicacion = ({eventos, tEventos, navigation}) => {
  const [nombre, onChangeTextNombre] = React.useState('');
  const [descripcion, onChangeTextDescripcion] = React.useState('');
  const [imagenes, addImagen] = React.useState([]);
  const [direccion, onChangeTextDireccion] = React.useState('');
  const [referencia, onChangeTextReferencia] = React.useState('');
  const [colonia, onChangeTextColonia] = React.useState('');
  const [ciudad, onChangeTextCiudad] = React.useState('');
  const [estado, onChangeTextEstado] = React.useState('');
  const [contacto, onChangeTextContacto] = React.useState('');
  const [telefono, onChangeTextTelefono] = React.useState('');
  const [correo, onChangeTextCorreo] = React.useState('');
  const [url, onChangeTextUrl] = React.useState('');
  const [latitud, setLatitud] = React.useState(0);
  const [longitud, setLongitud] = React.useState(0);
  const [imageUri, setimageUri] = React.useState('');
  const [marcador, setMarcador] = React.useState(false);
  const [validar, setValidar] = React.useState(false);
  const [nombreV, setNombreV] = React.useState(false);
  const [descripcionV, setDescripcionV] = React.useState(false);
  const [direccionV, setDireccionV] = React.useState(false);
  const [referenciaV, setReferenciaV] = React.useState(false);
  const [coloniaV, setColoniaV] = React.useState(false);
  const [ciudadV, setCiudadV] = React.useState(false);
  const [estadoV, setEstadoV] = React.useState(false);
  const [coordenadasV, setCoordenadasV] = React.useState(false);
  const [contactoV, setContactoV] = React.useState(false);
  const [telefonoV, setTelefonoV] = React.useState(false);
  const [correoV, setCorreoV] = React.useState(false);
  const [urlV, setUrlV] = React.useState(false);
  const [fotosV, setFotosV] = React.useState(false);

   const agregarFoto = async () =>{
    const options = {
        storageOption: {
            path: 'images',
            mediaType: 'photo',
        },
        includeBase64: true,
    };

    launchImageLibrary  (options, response => {
        if (!response.didCancel && !response.error && !response.customButton){
            const source = {uri: 'data:image/jpeg;base64,' + response.assets[0].base64}
            console.log (source)
            setimageUri(source)
            addImagen(current => [...current, source]);
            /*const formdata = new FormData()
            formdata.append('file',{
                uri:response.assets[0].uri,
                type:response.assets[0].type,
                name:response.assets[0].fileName
            })
             let res = await fetch(
                URL,
                {
                    method: 'post',
                    body: formdata,
                    headers : {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
           let responseJson =  await res.json();
            console.log(responseJson, 'responseJson')*/
        }
    })
  }
  const quitarImagen = (item) => {
    console.log(item)
    addImagen((current) =>
      current.filter((imagen) => imagen !== item)
    );
  }

  const setCoordenadas = (c) => {
    
    console.log(c.latitude)
    setLatitud(c.latitude)
    setLongitud(c.longitude)
    console.log(latitud,longitud)
    setMarcador(true)
  } 


   let valid = () => {
    setValidar(true);
    valido = true;
    if (nombre==''){ setNombreV(true); valido=false;}else {setNombreV(false);}
    if (descripcion.length<=0){ setDescripcionV(true); valido=false}else {setDescripcionV(false);}
    if (direccion.length<=0){ setDireccionV(true);valido=false;}else {setDireccionV(false);}
    if (referencia.length<=0){ setReferenciaV(true); valido=false;}else {setReferenciaV(false);}
    if (colonia.length<=0){ setColoniaV(true); valido=false;}else {setColoniaV(false);}
    if (ciudad.length<=0){setCiudadV(true); valido=false;}else {setCiudadV(false);}
    if (estado.length<=0){setEstadoV(true); valido=false;}else {setEstadoV(false);}
    if (latitud==0){setCoordenadasV(true); valido=false;}else {setCoordenadasV(false);}
    if (contacto.length<=0){setContactoV(true); valido=false;}else {setContactoV(false);}
    if (telefono.length<=0){setTelefonoV(true); valido=false;}else {setTelefonoV(false);}
    if (correo.length<=0){setCorreoV(true); valido=false;}else {setCorreoV(false);}
    if (url.length<=0){setUrlV(true); valido=false;}else {setUrlV(false);}
    return(valido);
  }

  const submit = () => {
    VA = valid();
    if(VA){
        console.log('Válido')
    } else {
        console.log('no válido')
    }
  }

  return (
        <ScrollView style={styles.contenidoSV}>
            <View style={{flex:1}}>
                <View style={styles.titulo}>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{color:'#a09385', fontSize: 26, marginLeft:'20%'}}>X</Text></TouchableOpacity>
                    </View>
                    <View style={{flex:4, alignItems:'center'}}>
                        <Text style={{color:'#F85D5A', fontSize: 26, }}>Nueva ubicación</Text>
                    </View>
                    <View style={{flex:1}}></View>
                </View>
                <View style={styles.cont}>
                    <TextInput
                        style={(validar && nombreV)?styles.inputError:styles.input}
                        onChangeText={onChangeTextNombre}
                        placeholder='Nombre'
                        placeholderTextColor={'#8e7962'}
                        maxLength={40}/>
                        {(validar && nombreV)?<Text style={{color:'red',marginLeft:'10%'}}>Ingresa un nombre *</Text>:<View/>}
                        
                    <TextInput
                        style={(validar && descripcionV)?styles.inputError:styles.input}
                        onChangeText={onChangeTextDescripcion}
                        placeholder='Descripción'
                        multiline
                        placeholderTextColor={'#8e7962'}
                        numberOfLines={4}
                        maxLength={400}/>
                        {(validar && descripcionV)?<Text style={{color:'red',marginLeft:'10%'}}>Ingresa una descripción *</Text>:<View/>}
                </View>
                <View style={{marginHorizontal:'10%', zIndex:-1,marginTop:'5%'}}>
                    <Text style={styles.seccTitulos}>Dirección</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex: 1}}>
                        <TextInput
                            style={(validar && direccionV)?styles.inputDError:styles.inputD}
                            onChangeText={onChangeTextDireccion}
                            placeholder='Calle y número'
                            placeholderTextColor={'#8e7962'}
                            maxLength={40}/>
                            {(validar && direccionV)?<Text style={{color:'red'}}>Ingresa una dirección *</Text>:<View/>}
                        </View>
                        <View style={{flex:1}}>
                        <TextInput
                            style={(validar && referenciaV)?styles.inputDError:styles.inputD}
                            onChangeText={onChangeTextReferencia}
                            placeholder='Referencia'
                            placeholderTextColor={'#8e7962'}
                            maxLength={40}/>
                            {(validar && referenciaV)?<Text style={{color:'red'}}>Ingresa una referencia *</Text>:<View/>}
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                        <TextInput
                            style={(validar && coloniaV)?styles.inputDError:styles.inputD}
                            onChangeText={onChangeTextColonia}
                            placeholder='Colonia'
                            placeholderTextColor={'#8e7962'}
                            maxLength={40}/>
                            {(validar && coloniaV)?<Text style={{color:'red'}}>Ingresa una colonia *</Text>:<View/>}
                        </View>
                        <View style={{flex:1}}>
                        <TextInput
                            style={(validar && ciudadV)?styles.inputDError:styles.inputD}
                            onChangeText={onChangeTextCiudad}
                            placeholder='Ciudad'
                            placeholderTextColor={'#8e7962'}
                            maxLength={40}/>
                            {(validar && ciudadV)?<Text style={{color:'red'}}>Ingresa una ciudad *</Text>:<View/>}
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                        <TextInput
                            style={(validar && estadoV)?styles.inputDError:styles.inputD}
                            onChangeText={onChangeTextEstado}
                            placeholder='Estado'
                            placeholderTextColor={'#8e7962'}
                            maxLength={40}/>
                            {(validar && estadoV)?<Text style={{color:'red'}}>Ingresa un estado *</Text>:<View/>}
                        </View>
                    </View>
                    <Text style={{marginTop:'5%', color:(validar && coordenadasV)?'red':'#8e7962',}}>Marca la ubicación en el mapa</Text>
                    <View style={styles.mapa}>
                    <MapView
                        style= {{width:'100%', aspectRatio:1, marginTop:'1%',}}
                        initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                        onPress={(e) => setCoordenadas(e.nativeEvent.coordinate)}
                    >
                        {marcador?<Marker coordinate={{latitude: latitud, longitude: longitud}}/>:null}
                    </MapView>
                    </View>
                    
                </View>
                <View style={{marginHorizontal:'10%', zIndex:-1,marginTop:'5%'}}>
                    <Text style={styles.seccTitulos}>Contacto</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                        <TextInput
                            style={(validar && contactoV)?styles.inputDError:styles.inputD}
                            onChangeText={onChangeTextContacto}
                            placeholder='Contacto'
                            placeholderTextColor={'#8e7962'}
                            maxLength={40}/>
                            {(validar && contactoV)?<Text style={{color:'red'}}>Ingresa una contacto *</Text>:<View/>}
                        </View>
                        <View style={{flex:1}}>
                        <TextInput
                            style={(validar && telefonoV)?styles.inputDError:styles.inputD}
                            onChangeText={onChangeTextTelefono}
                            placeholder='Teléfono'
                            placeholderTextColor={'#8e7962'}
                            maxLength={10}
                            inputMode='tel'/>
                            {(validar && telefonoV)?<Text style={{color:'red'}}>Ingresa un teléfono *</Text>:<View/>}
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                        <TextInput
                            style={(validar && correoV)?styles.inputDError:styles.inputD}
                            onChangeText={onChangeTextCorreo}
                            placeholder='Correo'
                            placeholderTextColor={'#8e7962'}
                            maxLength={40}
                            inputMode='email'/>
                            {(validar && correoV)?<Text style={{color:'red'}}>Ingresa un correo *</Text>:<View/>}
                        </View>
                        <View style={{flex:1}}>
                        <TextInput
                            style={(validar && urlV)?styles.inputDError:styles.inputD}
                            onChangeText={onChangeTextUrl}
                            placeholder='URL'
                            placeholderTextColor={'#8e7962'}
                            maxLength={80}
                            inputMode='url'/>
                            {(validar && urlV)?<Text style={{color:'red'}}>Ingresa una URL *</Text>:<View/>}
                        </View>
                    </View>
                </View>
                <View style={{marginHorizontal:'10%', zIndex:-1, aspectRatio:1, marginTop:'5%'}}>
                    <View style={{flexDirection:'row'}}>
                            <Text style={styles.seccTitulos}>Fotos</Text>
                            <TouchableOpacity style={styles.bAddFecha} onPress={() => agregarFoto()}>
                                <Text style={{color:'white' }}>+</Text>
                            </TouchableOpacity>
                    </View>
                    <FlatList
                        data={imagenes}
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                        renderItem={({item, index}) => {
                            return (
                                <View style={{width: widthC}}>
                                    <View style={{marginHorizontal: 10, padding: 20, borderRadius: 34, alignItems:'center'}}>
                                        <Image source={item} style={styles.imagen}/>
                                        <TouchableOpacity style={styles.bAddFoto} onPress={() => quitarImagen(item)}>
                                        <Text style={{color:'white' }}>x</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View> 
                            )
                        }}
                    />
                
                </View>
                <View style={{marginHorizontal:'10%', marginBottom:'15%'}}> 
                    <TouchableOpacity style={styles.bSubmit} onPress={() => submit()}>
                        <Text style={{color:'white',}}>Agregar ubicación</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </ScrollView>
  )
}
const styles = StyleSheet.create({
    contenidoSV:{ //miau
        width: '100%',
        height: '100%',
        backgroundColor: '#efeae4'
    },
    titulo: {
        flexDirection: 'row',
        flex:1,
        marginTop:'5%'
    },
    cont: {
        flex: 5,
    },  
    input: {
        borderBottomWidth:1,
        width:'80%',
        marginLeft:'10%',
        marginTop:'5%',
        paddingRight:'5%',
        borderColor:'#8e7962',
        color:'#8e7962',
        textAlignVertical:'center',
    },
    inputError: {
        borderBottomWidth:1,
        width:'80%',
        marginLeft:'10%',
        marginTop:'5%',
        paddingRight:'5%',
        borderColor:'red',
        color:'#8e7962',
        textAlignVertical:'center',
    },
    inputD: {
        borderBottomWidth:1,
        width:'95%',
        marginHorizontal: '2.5%',
        marginTop:'5%',
        paddingRight:'5%',
        borderColor:'#8e7962',
        color:'#8e7962',
        textAlignVertical:'center',
    },
    inputDError: {
        borderBottomWidth:1,
        width:'95%',
        marginHorizontal: '2.5%',
        marginTop:'5%',
        paddingRight:'5%',
        borderColor:'red',
        color:'#8e7962',
        textAlignVertical:'center',
    },
    ubiView:{

    },
    ubiBox: {
        backgroundColor:'#efeae4',
        borderColor:'#8e7962',
        borderRadius:25,
        marginRight: '5%'
    },
    ubiInStyle: {
        color:'#8e7962',
    },
    ubiDDStyle: {
        backgroundColor:'#efeae4',
        borderColor:'#8e7962',
        borderRadius:25,
        position:'absolute',
        top: 40,
        width: "100%",
        zIndex: 999,
    },
    ubiDDTStyle: {
        color:'#8e7962'
    },
    bAddUbi: {
        alignItems: 'center',
        backgroundColor: '#F85D5A',
        borderRadius: 25,
        padding: 10,
        aspectRatio: 1,
    },
    bSubmit: {
        alignItems: 'center',
        backgroundColor: '#F85D5A',
        borderRadius: 25,
        width: '100%',
        marginBottom: '5%',
        aspectRatio: 7,
        justifyContent:'center'
    },
    bAddFecha: {
        alignItems: 'center',
        backgroundColor: '#F85D5A',
        borderRadius: 25,
        padding: 1, 
        aspectRatio: 1,
    },
    bAddFoto: {
        alignItems: 'center',
        backgroundColor: '#F85D5A',
        borderRadius: 25,
        padding: 1, 
        aspectRatio: 1,
        
    },
    imagen: {
        width:'100%',
        height: widthC*0.6,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    },
    seccTitulos: {
        color:'#8e7962',
        fontSize: 16,
        marginRight: 5,
    },
    mapa: {
        borderRadius:25, 
        overflow:'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
})
export default AgregarUbicacion