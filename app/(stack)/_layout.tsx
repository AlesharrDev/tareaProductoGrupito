import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DetalleProducto = () => {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="home/index" options={{ headerShown: false }} />
      <Stack.Screen name="home/[id]" options={{ title: "producto" }} />
    </Stack>
  );
};

export default DetalleProducto;
