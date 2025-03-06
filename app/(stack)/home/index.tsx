import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import globalStyle from '@/app/style/globalstyle'

const Home = () => {
  
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.h1}>Intentacio de producto</Text>
      <TextInput style={globalStyle.input} placeholder="Nombre del producto" />
      <TextInput style={globalStyle.input} placeholder="Precio" />
      <TextInput style={globalStyle.input} placeholder="Stock" />
      <TouchableOpacity style={globalStyle.button}>
        <Text style={globalStyle.buttonText}>Crear</Text>
      </TouchableOpacity>
    </View>

  )
}

export default Home