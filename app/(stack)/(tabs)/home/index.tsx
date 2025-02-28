import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import globalStyle from '@/app/style/globalstyle'
import TodoList from '@/app/componets/TodoList'

const Hometabs = () => {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 ,paddingTop:20 }}>
        <Text style={[globalStyle.h1,{textAlign:'center'}]}>To do list</Text>
        <TodoList/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Hometabs