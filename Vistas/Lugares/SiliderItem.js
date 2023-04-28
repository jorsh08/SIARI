import { StyleSheet, View, Image, Dimensions} from 'react-native'
import React from 'react'

const {width} = Dimensions.get('screen')

const SiliderItem = ({multimedio}) => {
  return (
    <View style={styles.contenedor}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <Image 
          source={{uri:multimedio}} 
          style={{width: '100%', height: '100%'}}
          />
      </View>
      
    </View>
  )
}

export default SiliderItem

const styles = StyleSheet.create({
  contenedor:{
    alignItems: 'center',
    width: width, 
    height: 300,
    flexDirection: 'column'
  }
})