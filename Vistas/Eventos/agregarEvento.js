import { Text, ScrollView, View, Image, StyleSheet, TextInput, FlatList, Dimensions, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import { backgroundColor } from 'react-native-calendars/src/style'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { SelectList } from 'react-native-dropdown-select-list'
import DatePicker from 'react-native-date-picker'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import { useNavigation } from '@react-navigation/native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
const widthC = width * 0.7;

const AgregarEvento = ({eventos, tEventos}) => {
    const navigation = useNavigation(); 
  const [nombre, onChangeTextNombre] = useState('');
  const [descripcion, onChangeTextDescripcion] = useState('');
  const [url, onChangeTextUrl] = useState('');
  const [ubiSelected, setUbiSelected] = useState(-1);
  const [categoriaSelected, setCategoriaSelected] = useState('');
  const [imagenes, addImagen] = useState([]);
  const [fechas, addFechas] = useState([{key:'1',fecha:new Date(),fechaS:'Agregar fecha',horaI:new Date(),horaIS:'Hora inicio',horaF:new Date(),horaFS:'Hora fin', fechaV:false}]);
  const [openF, setOpenF] = useState(false);
  const [openHI, setOpenHI] = useState(false);
  const [openHF, setOpenHF] = useState(false);
  const [fecha, setFecha] = useState({key:'1',fecha:new Date(),fechaS:'Agregar fecha',horaI:new Date(),horaIS:'Hora inicio',horaF:new Date(),horaFS:'Hora fin', fechaV:false});
  const [ubicaciones, setUbicaciones] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const fechass = [
    {key:'1',fecha:'',hora:'',open:false}
  ];
  const [nFecha, setNFecha] = useState(2);
  const [imageUri, setimageUri] = useState('');
  const [validar, setValidar] = useState(false);
  const [nombreV, setNombreV] = useState(false);
  const [descripcionV, setDescripcionV] = useState(false);
  const [ubicacionV, setUbicacionV] = useState(false);
  const [fechasV, setFechasV] = useState(false);
  useEffect(() => {
    getUbicaciones();
    getCategorias();
  },[]);
  const getUbicaciones = () =>{
    fetch('http://alexramval.pythonanywhere.com/turismo/getUbic')
      .then((response) => response.json())
      .then((json) => setUbicaciones(json))
      .catch((error) => console.error(error));
  }
  const getCategorias = () =>{
    fetch('http://alexramval.pythonanywhere.com/turismo/getCategoriaEvento')
      .then((response) => response.json())
      .then((json) => setCategorias(json))
      .catch((error) => console.error(error));
  }
  const agregarFecha = () => {
    setNFecha(nFecha+1)
    addFechas(current => [...current, {key:nFecha+'',fecha:new Date(),fechaS:'Agregar fecha',horaI:new Date(),horaIS:'Hora inicio',horaF:new Date(),horaFS:'Hora fin', fechaV:false}]);
  }
  const quitarFecha = (item) => {
    console.log(item.key)
    addFechas((current) =>
      current.filter((fecha) => fecha.key !== item.key)
    );
  }
  const agregarFoto = () =>{
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

  const submit = () => {
    let VA = valid();
    console.log(ubiSelected)
    if(VA){
        var xhr = new XMLHttpRequest();
        var urlS = "http://alexramval.pythonanywhere.com/turismo/crearEventos";
        xhr.open("POST", urlS, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log('miau')
            }
            console.log(xhr.response)
        };
        var data = JSON.stringify({"nombre": nombre, "descripcion": descripcion, "catID":categoriaSelected, "usuarioID":6, "ubicacionID":ubiSelected, "urlV":url});
        xhr.send(data);
    } else {
        console.log('no válido')
    }
  }
  let valid = () => {
    setValidar(true);
    let valido = true;
    if (nombre==''){ setNombreV(true); valido=false;}else {setNombreV(false);}
    if (descripcion.length<=0){ setDescripcionV(true); valido=false}else {setDescripcionV(false);}
    if (ubiSelected==-1){ setUbicacionV(true); valido=false}else {setUbicacionV(false);}
    if (fechas.length<=0){ setFechasV(true); valido=false}else {setFechasV(false);}
    fechas.map((fecha) => {
        fecha.fechaV=false;
        if (fecha.fechaS=='Agregar fecha'){fecha.fechaV=true; valido=false;}
        if (fecha.horaIS=='Hora inicio'){fecha.fechaV=true; valido=false;}
        if (fecha.horaFS=='Hora fin'){fecha.fechaV=true; valido=false;}
        addFechas(current => [...current]);
    })
    return(valido);
  }

  const validFecha = () => {
    let retorno = false;
    fechas.map((fecha) => {
        if (fecha.fechaV)
            retorno = true;
    })
    console.log(retorno);
    return retorno;
  }

  return (
        <ScrollView style={styles.contenidoSV}>
            <View style={{flex:1}}>
                <View style={styles.titulo}>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}><Text style={{color:'#a09385', fontSize: 26, marginLeft:'20%'}}>X</Text></TouchableOpacity>
                    </View>
                    <View style={{flex:4}}>
                        <Text style={{color:'#F85D5A', fontSize: 26, }}>Nuevo evento</Text>
                    </View>
                </View>
                <View style={styles.cont}>
                    <TextInput
                        style={(validar && nombreV)?styles.inputError:styles.input}
                        onChangeText={onChangeTextNombre}
                        placeholder='Nombre'
                        placeholderTextColor={'#8e7962'}
                        maxLength={40}/>
                    {(validar && nombreV)?<Text style={{color:'red',marginLeft:'10%'}}>Ingresa un nombre</Text>:<View/>}
                    <TextInput
                        style={(validar && descripcionV)?styles.inputError:styles.input}
                        onChangeText={onChangeTextDescripcion}
                        placeholder='Descripción'
                        multiline
                        placeholderTextColor={'#8e7962'}
                        numberOfLines={4}
                        maxLength={400}
                        name/>
                    {(validar && descripcionV)?<Text style={{color:'red',marginLeft:'10%'}}>Ingresa una descripción</Text>:<View/>}
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeTextUrl}
                        placeholder='Url (opcional)'
                        placeholderTextColor={'#8e7962'}
                        maxLength={100}/>
                </View>
                <View style={{marginHorizontal:'10%',marginTop:'5%', alignItems:'flex-start', zIndex:10}}>
                    <View style={{width:'100%'}}>
                        <SelectList 
                            data={categorias} 
                            setSelected={setCategoriaSelected}
                            boxStyles={(validar && ubicacionV)?styles.ubiBoxError:styles.ubiBox}
                            inputStyles={styles.ubiInStyle}
                            dropdownStyles={styles.ubiDDStyle}
                            dropdownTextStyles={styles.ubiDDTStyle}
                            placeholder={'Categoría'}
                            notFoundText={'Cateogría no encontrada.'}
                            searchPlaceholder={'Buscar'}
                        />
                    </View>
                
                    {(validar && ubicacionV)?<Text style={{color:'red',zIndex:-1}}>Selcciona una Categoría</Text>:<View/>}
                </View>
                <View style={{flexDirection: 'row', marginLeft:'10%',marginTop:'5%', alignItems:'flex-start'}}>
                    <View style={{width:'70%'}}>
                    <SelectList 
                        data={ubicaciones} 
                        setSelected={setUbiSelected}
                        boxStyles={(validar && ubicacionV)?styles.ubiBoxError:styles.ubiBox}
                        inputStyles={styles.ubiInStyle}
                        dropdownStyles={styles.ubiDDStyle}
                        dropdownTextStyles={styles.ubiDDTStyle}
                        placeholder={'Ubicación'}
                        notFoundText={'Ubicación no encontrada.'}
                        searchPlaceholder={'Buscar'}
                    />
                    {(validar && ubicacionV)?<Text style={{color:'red',zIndex:-1}}>Selcciona una ubicación</Text>:<View/>}
                    </View>
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity style={styles.bAddUbi} onPress={()=>navigation.navigate('AgregarUbicacion')}>
                            <Text style={{color:'white' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginHorizontal:'10%',marginTop:'5%', zIndex:-1,marginBottom:'5%'}}>
                    {(validar && validFecha())?<Text style={{color:'red'}}>Completa los datos de las fechas</Text>:<View/>}
                    {(validar && fechasV)?<Text style={{color:'red'}}>Agrega al menos una fecha</Text>:<View/>}
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.seccTitulos}>Fechas</Text>
                        <TouchableOpacity style={styles.bAddFecha} onPress={() => agregarFecha()}>
                            <Text style={{color:'white' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <FlatList
                        data={fechas}
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                        renderItem = {({item, index}) => {
                            return (
                                <View style={{marginHorizontal:5,alignContent:'center'}}>
                                    
                                    <TouchableOpacity onPress={() => {setOpenF(true),setFecha(item)}}>
                                        <View style={{flexDirection:'row'}}>
                                            <Image source={require('../../assets/calendar.png')}/>
                                            <Text style={{marginHorizontal:5}}>{item.fechaS}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {setOpenHI(true),setFecha(item)}}>
                                        <View style={{flexDirection:'row', marginTop: 5}}>
                                            <Image source={require('../../assets/clock.png')}/>
                                            <Text style={{marginHorizontal:5}}>{item.horaIS}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {setOpenHF(true),setFecha(item)}}>
                                        <View style={{flexDirection:'row', marginTop: 5}}>
                                        <Image source={require('../../assets/clock.png')}/>
                                            <Text style={{marginHorizontal:5}}>{item.horaFS}</Text>
                                        </View>
                                    </TouchableOpacity >
                                    
                                    <View style={{alignItems:'center', marginVertical:5}}>
                                    <TouchableOpacity style={styles.bAddFecha} onPress={() => quitarFecha(item)}>
                                        <Text style={{color:'white' }}>x</Text>
                                    </TouchableOpacity>
                                    {(validar && item.fechaV)?<Text style={{color:'red'}}>Incompleto</Text>:<View/>}
                                    </View>
                                    
                                </View>
                            )
                        }}
                    />
                    <DatePicker
                        modal
                        open={openF}
                        date={fecha.fecha}
                        mode= {'date'}
                        onConfirm={(date) => {
                            fecha.fecha=date
                            fecha.fechaS=date.toLocaleDateString()
                            setOpenF(false)
                            console.log(fecha.fechaS)
                        }}
                        onCancel={() => {
                            setOpenF(false)
                        }}
                    />
                    <DatePicker
                        modal
                        open={openHI}
                        date={fecha.horaI}
                        mode= {'time'}
                        onConfirm={(date) => {
                            fecha.horaI=date
                            fecha.horaIS=date.toLocaleTimeString()
                            setOpenHI(false)
                        }}
                        onCancel={() => {
                            setOpenHI(false)
                        }}
                    />
                    <DatePicker
                        modal
                        open={openHF}
                        date={fecha.horaF}
                        mode= {'time'}
                        onConfirm={(date) => {
                            fecha.horaF=date
                            fecha.horaFS=date.toLocaleTimeString()
                            setOpenHF(false)
                        }}
                        onCancel={() => {
                            setOpenHF(false)
                        }}
                    />
                </View>
                <View style={{marginHorizontal:'10%', zIndex:-1,marginBottom:'10%'}}>
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
                                        <TouchableOpacity style={styles.bAddFecha} onPress={() => quitarImagen(item)}>
                                        <Text style={{color:'white' }}>x</Text>
                                        </TouchableOpacity>
                                    </View>
                                    
                                </View> 
                            )
                        }}
                    />
                </View>
                <View style={{marginHorizontal:'10%', marginBottom:'15%'}}> 
                <View>
                    
                </View>
                    <TouchableOpacity style={styles.bSubmit} onPress={() => submit()}>
                        <Text style={{color:'white',}}>Crear evento</Text>
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
    ubiView:{

    },
    ubiBox: {
        backgroundColor:'#efeae4',
        borderColor:'#8e7962',
        marginRight: '5%',
        borderWidth:0,
        borderRadius:0,
        borderBottomWidth: 1,
        zIndex:-1
    },
    ubiBoxError: {
        backgroundColor:'#efeae4',
        borderColor:'red',
        marginRight: '5%',
        borderWidth:0,
        borderRadius:0,
        borderBottomWidth: 1
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
        zIndex: 10,
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
    bAddFecha: {
        alignItems: 'center',
        backgroundColor: '#F85D5A',
        borderRadius: 25,
        padding: 1,
        width: 25,
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
    }
})
export default AgregarEvento