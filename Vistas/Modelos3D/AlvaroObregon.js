import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ViroARScene, ViroMaterials, ViroAnimations, ViroARSceneNavigator, Viro3DObject, ViroAmbientLight } from '@viro-community/react-viro';


const Modelo3DScene = () => {
  return (
    <ViroARScene>
      <ViroAmbientLight color={'#FFFFFF'} />
      <Viro3DObject
        source={require('../../assets/3d/RA-Monumento/OBJ-Monumento.obj')}
        materials={["bat"]}
        position={[10, -10, -20]}
        rotation={[0, 190, 0]}
        scale={[5, 5, 5]}
        type="OBJ"
      />

    </ViroARScene>
  );
};

ViroMaterials.createMaterials({
  bat: {
    lightingModel: "Phong",
    diffuseTexture: require('../../assets/3d/RA-Monumento/TexturaCombinada.png'),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true,
  },
});

const AlvaroObregon = () => {
  return (
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <View style={{ width: 300, height: 700, margin: 50 }}>
        <ViroARSceneNavigator
          autofocus={true}
          initialScene={{ scene: Modelo3DScene }}
          style={{ flex: 1 }} />
      </View>
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

export default AlvaroObregon

const styles = StyleSheet.create({})