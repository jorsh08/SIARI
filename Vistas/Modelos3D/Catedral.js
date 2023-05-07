import { StyleSheet, View, PermissionsAndroid, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { ViroARScene, ViroMaterials, ViroAnimations, ViroARSceneNavigator, Viro3DObject, ViroAmbientLight } from '@viro-community/react-viro';
import RNFS from 'react-native-fs';
import { captureScreen } from 'react-native-view-shot';

const Modelo3DScene = () => {

  

  return (
    <ViroARScene>
      <ViroAmbientLight color={'#FFFFFF'} />
      
      <Viro3DObject
          source={require('../../assets/3d/RA-MaroCatedral/CatedralOBJ.obj')}
          materials={["avatar"]}
          animation={{ name: "rotate", run: true, loop: true }}
          position={[10, -90, -300]}
           scale={[50, 50, 50]}
          type="OBJ"
        />
    </ViroARScene>
  );
};

ViroMaterials.createMaterials({
  avatar: {
    lightingModel: "Blinn",
    diffuseTexture: require('../../assets/3d/RA-MaroCatedral/TexturaCatedral.png'),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true,
  },
});

const Catedral = () => {

 

  return (
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <View style={{ width: 300, height: 700, margin: 50 }}>
        <ViroARSceneNavigator
          autofocus={true}
          initialScene={{ scene: Modelo3DScene }}
          style={{ flex: 1 }} />
      </View>
      <TouchableOpacity >
        <Text style={{color: 'green', fontSize: 18}}>Test</Text>
      </TouchableOpacity>
    </View>
  )
}

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: '+=25',
    },
    duration: 500
  },
});

export default Catedral

const styles = StyleSheet.create({})