import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import globalStyle from "@/app/style/globalstyle";

const ProductoDetalle = () => {
  const { id, nombre, precio, stock } = useLocalSearchParams();

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.h1}>Detalles del Producto </Text>
      <Text style={globalStyle.h2}>Nro. {id}</Text>
      <Text numberOfLines={1} style={[globalStyle.label, { width: 200 }]}>
        Nombre: {nombre}
      </Text>
      <Text style={[globalStyle.label, { width: 200 }]}>Precio: {precio}</Text>
      <Text style={[globalStyle.label, { width: 200 }]}>Stock: {stock}</Text>
    </View>
  );
};

export default ProductoDetalle;
