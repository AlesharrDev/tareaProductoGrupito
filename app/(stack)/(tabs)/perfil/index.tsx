import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import globalStyle from "@/app/style/globalstyle";
import { router, useLocalSearchParams } from "expo-router";

const Favoritetabs = () => {
  const { usuario, email } = useLocalSearchParams();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.container}>
        <Text style={globalStyle.h1}>Perfil de Usuaio</Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={[globalStyle.h2,{maxWidth:400}]}>Nombre: {usuario}</Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={[globalStyle.h2,{maxWidth:400}]}>Email: {email}</Text>
        <TouchableOpacity style={globalStyle.button} onPress={() => router.push('/login')}>
          <Text style={globalStyle.buttonText}>Salir</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Favoritetabs;
