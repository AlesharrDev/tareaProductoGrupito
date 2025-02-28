import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import globalStyle from '@/app/style/globalstyle'
import TodoList from '@/app/componets/TodoList'

const Hometabs = () => {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.container}>
        <Text style={globalStyle.h1}>To do list</Text>
        <TodoList/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Hometabs