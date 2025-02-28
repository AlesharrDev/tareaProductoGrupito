import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
const TabsLyout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
    <Tabs.Screen
      name="home/index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <FontAwesome size={20} name="home" color={color} />,
      }}
    />
    <Tabs.Screen
      name="perfil/index"
      options={{
        title: 'Perfil',
        tabBarIcon: ({ color }) => <FontAwesome size={20} name="user-circle" color={color} />,
      }}
    />
  </Tabs>
  )
}

export default TabsLyout