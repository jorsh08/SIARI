import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import EncabezadoSecundario from '../EncabezadoSecundario'
import { botones, colores } from '../../Constantes/tema'
import { AuthContext } from '../../Contextos/AuthContext'

const EditarPerfil = () => {

  const {usuario} = useContext(AuthContext)

  const [nombre, setNombre] = useState()

  return (
    <View style={styles.fondo}>
      
      <View style={{flexDirection: 'row'}}>
        <EncabezadoSecundario titulo={'Modificar tus datos'}/>
      </View>
     
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 250, height: 250}}>
          <Image 
            source={{uri: usuario.imagen}}
            style={{width: 200, height: 200, borderRadius: 100}}/>
        </View>
      </View>

      <View style={{flexDirection: 'row',  justifyContent: 'center', marginVertical: 10}}>
          <View style={{flexDirection: 'row', width: 250, height: 65}}> 
            <View style={{flexDirection: 'column'}}>
              <Image
                source={require('../../assets/Nombre.png')}
                style={{width: 50, height: 63}}
                resizeMode="contain"/>    
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'space-between', width: 200, height: 50}}>
              <View style={{flexDirection: 'row',}}>
                <View style={{ width: 200, height: 49}}>
                  <TextInput value={nombre} style={{color: colores.Secundario}} onChange={()=>setNombre} placeholderTextColor="#8E796250" placeholder='Nombre...'/>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}><View style={{backgroundColor: colores.Secundario, width: 200, height: 1}}></View></View>
            </View>
          </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 30}}>
          <View style={{flexDirection: 'column', width: 270, height: 50, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
              <View style={{flexDirection: 'column'}}>
                <View style={{width: botones.l, borderRadius: 30, height: 30, backgroundColor: colores.Primario, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: colores.Ligero}}>Eliminar cuenta</Text>
                </View>
              </View>
              <View style={{flexDirection: 'column'}}>
              <View style={{width: botones.l, borderRadius: 30, height: 30, backgroundColor: colores.Secundario, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: colores.Ligero}}>Modificar</Text>
              </View>
              </View>
            </View>
          </View>
      </View>
    </View>
  )
}

/**/

export default EditarPerfil

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: colores.Fondo,
    flex: 1,
  }
})