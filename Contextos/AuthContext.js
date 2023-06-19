import React, {createContext, useContext, useEffect, useState} from 'react'
import dataUsuario from '../Data/Perfil/Perfil'
import dataLugares from '../Data/datosLugares'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>  {

    const [NombreUbicaciones] = useState({8: 'AlvaroObregon', 9: 'RelojSol', 10: 'RelojMundial', 11:'Palacio', 12:'Bibloteca', 13: 'Catedral'})
    const [informacion, setInformacion] = React.useState({})
    const [ubicaciones, setUbicaciones] = React.useState(dataLugares)
    const [usuario] = useState(dataUsuario)
    const [isLoading, setIsLoading] = useState(false);
    const [sesion, setSesion] = useState({});
    const [email, onChangeTextEmail] = React.useState("");
    const [pass, onChangeTextPass] = React.useState("");

    async function login(){
      let result = null
      const formdata = new FormData();
      formdata.append('username',email);
      formdata.append('password',pass);
      let post = {
          method: 'POST',
          body:formdata,
          headers: {
            'Content-Type': 'multipart/form-data',
          }
      }
        setIsLoading(true);
        const res = await fetch('https://alexramval.pythonanywhere.com/turismo/gettoken', post)
        const data = await res.json();
        setSesion(data);
        if (!data["error"]){
          let nuevoJson = JSON.stringify(data);
          await AsyncStorage.setItem("AccessToken", nuevoJson);
          onChangeTextEmail("")
          onChangeTextPass("")
          result = data;
        }

        return result;
    }

    const ocultarInfoPunto = () => {
        setInformacion({nombre: null, imagen: null, info: false})
    }


    const cargarLugares = async () => {
        //setUbicaciones(res)
        const token = await AsyncStorage.getItem("AccessToken")
        let body = { method: "GET", headers: {Authorization: `Bearer ${token}`}}
        const res = await fetch("https://alexramval.pythonanywhere.com/turismo/getRealidad", body)
        const data = await res.json();
        console.log(data)

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
        sesion,
        email,
        pass,
        ocultarInfoPunto,
        setInformacion,
        onChangeTextEmail,
        onChangeTextPass,
        login,
    }}>
        {children}
    </AuthContext.Provider>
  )
}