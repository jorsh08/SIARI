import React, {createContext, useContext, useEffect, useState} from 'react'
import dataUsuario from '../Data/Perfil/Perfil'
import dataLugares from '../Data/datosLugares'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>  {

    const [NombreUbicaciones] = useState({8: 'AlvaroObregon', 9: 'RelojSol', 10: 'RelojMundial', 11:'Palacio', 12:'Bibloteca', 13: 'Catedral'})
    const [informacion, setInformacion] = React.useState({})
    const [ubicaciones, setUbicaciones] = React.useState(dataLugares)
    const [usuario] = useState(dataUsuario)
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();


    const login = (email, password) => {
        setIsLoading(true);
        /*axios.post('https://alexramval.pythonanywhere.com/turismo/gettoken', {
            'par1':email,
            'par2':password
        })
        .then(res => {
            let userInfo = res.data;
            console.log(userInfo)
        })*/
        const formdata = new FormData();
        formdata.append('par1',email);
        formdata.append('par2',password);
        let data = {
            method: 'POST',
            body:formdata,
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          }
          console.log(data.body)
        fetch('https://alexramval.pythonanywhere.com/turismo/gettoken', data)
                  .then(response => response.json())  // promise
                  .then(json => {
                    console.log(json);
                    AsyncStorage.setItem("AccessToken", json.token)
                })
                navigation.navigate("BottomTab")
          
    } 
    const ocultarInfoPunto = () => {
        setInformacion({nombre: null, imagen: null, info: false})
    }

    const cargarLugares = async () => {
        //const data = await fetch('https://alexramval.pythonanywhere.com/turismo/getRealidad')
        //const res = await data.json()
        //setUbicaciones(res)
    }
   
    useEffect(()=>{
        cargarLugares();
    },[])

  return (
    <AuthContext.Provider value={{
        informacion,
        ubicaciones,
        usuario,
        NombreUbicaciones,
        ocultarInfoPunto,
        setInformacion,
        login,
    }}>
        {children}
    </AuthContext.Provider>
  )
}