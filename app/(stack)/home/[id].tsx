import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DetalleProducto = () => {
    const {id} = useLocalSearchParams();
    
  return (
    <View>
      <Text>DetalleProducto</Text>
    </View>
  )
}

export default DetalleProducto