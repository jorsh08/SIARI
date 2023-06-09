import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ViroARScene, ViroMaterials, ViroAnimations, ViroARSceneNavigator, Viro3DObject, ViroAmbientLight } from '@viro-community/react-viro';


const Modelo3DScene = () => {
  return (
    <ViroARScene>
      <ViroAmbientLight color={'#FFFFFF'} />
      <Viro3DObject
        source={require('../../assets/3d/RA-ITESCA/ITESCA-RA.obj')}
        materials={["tuerca"]}
        animation={{ name: "rotate", run: true, loop: true }}
        position={[10, -30, -150]}
        scale={[5, 5, 5]}
        type="OBJ"
      />
    </ViroARScene>
  );
};

ViroMaterials.createMaterials({
  tuerca: {
    lightingModel: "Blinn",
    diffuseTexture: require('../../assets/3d/RA-ITESCA/TexturaITESCACombinada.png'),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true,
  },
});

const RelojSol = () => {
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

export default RelojSol

const styles = StyleSheet.create({})