import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DetalleProducto = () => {
  return (
   <Stack
      screenOptions={{
        headerShown: false,

      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="home" options={{}} />
      <Stack.Screen name="login" options={{}} />

    </Stack>
  )
}

export default DetalleProducto