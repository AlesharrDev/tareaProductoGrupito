import { useState } from "react";

interface Producto {
  id: string;
  nombre: string;
  precio: string;
  stock: string;
}

const useProductos = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [productosLista, setProductosLista] = useState<Producto[]>([]);
  const [editando, setEditando] = useState<Producto | null>(null);

  const deleteProducto = (id: string) => {
    setProductosLista(productosLista.filter((producto) => producto.id !== id));
  };

  const addProducto = () => {
    if (editando) {
      setProductosLista(
        productosLista.map((producto) =>
          producto.id === editando.id
            ? { ...producto, nombre, precio, stock }
            : producto
        )
      );
      setEditando(null);
    } else {
      setProductosLista([
        ...productosLista,
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

  return {
    nombre,
    setNombre,
    precio,
    setPrecio,
    stock,
    setStock,
    productosLista,
    editando,
    deleteProducto,
    addProducto,
    startEdit,
  };
};

export default useProductos;