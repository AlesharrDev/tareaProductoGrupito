import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import globalStyle from "@/app/style/globalstyle";
import { router } from "expo-router";

interface Producto {
  id: string;
  nombre: string;
  precio: string;
  stock: string;
}

const Home = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [PductosLista, setPductosLista] = useState<Producto[]>([]);
  const [editando, setEditando] = useState<Producto | null>(null);

  const deleteProducto = (id: string) => {
    setPductosLista(PductosLista.filter((producto) => producto.id !== id));
  };

  const addProducto = () => {
    if (editando) {
      setPductosLista(
        PductosLista.map((producto) =>
          producto.id === editando.id
            ? { ...producto, nombre, precio, stock }
            : producto
        )
      );
      setEditando(null);
    } else {
      setPductosLista([
        ...PductosLista,
        { id: Date.now().toString(), nombre, precio, stock },
      ]);
    }
    setNombre("");
    setPrecio("");
    setStock("");
  };

  const startEdit = (producto: Producto) => {
    setEditando(producto);
    setNombre(producto.nombre);
    setPrecio(producto.precio);
    setStock(producto.stock);
  };

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.h1}>Intención de producto</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={globalStyle.label}>Nombre</Text>
        <TextInput
          style={globalStyle.input}
          placeholder="Nombre del producto"
          value={nombre}
          onChangeText={setNombre}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={globalStyle.label}>Precio</Text>
        <TextInput
          style={globalStyle.input}
          placeholder="Precio"
          value={precio}
          onChangeText={setPrecio}
          keyboardType="numeric"
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={globalStyle.label}>Stock</Text>
        <TextInput
          style={globalStyle.input}
          placeholder="Stock"
          value={stock}
          onChangeText={setStock}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={globalStyle.button} onPress={addProducto}>
        <Text style={globalStyle.buttonText}>
          {editando ? "Actualizar producto" : "Crear producto"}
        </Text>
      </TouchableOpacity>
      <Text style={globalStyle.h1}>Productos</Text>
      <FlatList
        data={PductosLista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: `/(stack)/home/[id]`,
                params: {
                  id: item.id,
                  nombre: item.nombre,
                  precio: item.precio,
                  stock: item.stock,
                },
              })
            }
            style={globalStyle.card}
          >
            <Text style={[globalStyle.buttonText, { fontWeight: "bold" }]}>
              Producto: {item.nombre}
            </Text>
            {parseInt(item.stock) < 5 ? (
              <Text style={{ color: "black" }}>Stock bajo</Text>
            ) : (
              <Text style={{ color: "white" }}>Stock suficiente</Text>
            )}
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <TouchableOpacity onPress={() => startEdit(item)}>
                <Ionicons name="pencil" size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteProducto(item.id)}>
                <Ionicons name="trash" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
