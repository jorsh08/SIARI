import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ViroARScene, ViroMaterials, ViroAnimations, ViroARSceneNavigator, Viro3DObject, ViroAmbientLight } from '@viro-community/react-viro';


const Modelo3DScene = () => {
  return (
    <ViroARScene>
      <ViroAmbientLight color={'#FFFFFF'} />
      <Viro3DObject
        source={require('../../assets/3d/Circo/circustent.obj')}
        materials={["circo"]}
        position={[10, -30, -3050]}
        scale={[1, 1, 1]}
        type="OBJ"
      />
    </ViroARScene>
  );
};

ViroMaterials.createMaterials({
  circo: {
    lightingModel: "Blinn",
    diffuseTexture: require('../../assets/3d/Circo/00.png'),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true,
  },
});

const Bibloteca = () => {
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

export default Bibloteca

const styles = StyleSheet.create({})