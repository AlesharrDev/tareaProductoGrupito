import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import globalStyle from '@/app/style/globalstyle';

const Home = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');

  const handleCreate = () => {
    console.log('Producto creado:', { nombre, precio, stock });

  };

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.h1}>Intención de producto</Text>
      
      <TextInput
        style={globalStyle.input}
        placeholder="Nombre del producto"
        value={nombre}
        onChangeText={setNombre}
      />
      
      <TextInput
        style={globalStyle.input}
        placeholder="Precio"
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
      />
      
      <TextInput
        style={globalStyle.input}
        placeholder="Stock"
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
      />
      
      <TouchableOpacity style={globalStyle.button} onPress={handleCreate}>
        <Text style={globalStyle.buttonText}>Crear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
