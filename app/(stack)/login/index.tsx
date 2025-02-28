import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import globalStyle from "@/app/style/globalstyle";
import Container from "@/app/componets/Container";
import InputFormulario from "@/app/componets/InputFormulario";
import { router } from "expo-router";

const LoginStack = () => {
  const [Usuario, setUsuario] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const handleLogin = () => {
   if (Usuario && Email) {
     router.push(`/perfil?usuario=${Usuario}&email=${Email}`);
   }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.container}>
        <Text style={globalStyle.h2}>Iniciar Sesion</Text>
        <InputFormulario
          label="Usuario"
          placeholder="Usuario"
          keyboardType="email-address"
          value={Usuario}
          onChangeText={(text) => setUsuario(text)}
        />
        
        <InputFormulario
          label="Email"
          placeholder="Email"
          keyboardType="email-address"
          value={Email}
          onChangeText={(text) => setEmail(text)}
        />
        

        <TouchableOpacity style={globalStyle.button}
        onPress={handleLogin}>
          <Text style={globalStyle.buttonText}>Iniciar Sesion</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LoginStack;
