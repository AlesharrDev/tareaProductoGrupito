// src/components/TodoItem.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface TodoItemProps {
  task: string;
  completed: boolean;
  status: "Pendiente" | "En proceso" | "Completado"; // Nuevo estado con frases completas
  onToggle: () => void;
  onDelete: () => void;
  onChangeStatus: () => void; // Función para cambiar el estado
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  completed,
  status,
  onToggle,
  onDelete,
  onChangeStatus,
}) => {
  // Definir colores de fondo según el estado
  const backgroundColor = {
    Pendiente: "#FF6B6B", // Rojo pastel para "Pendiente"
    "En proceso": "#FFD580", // Naranja pastel para "En proceso"
    Completado: "#90EE90", // Verde pastel para "Completado"
  }[status];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity onPress={onToggle} style={styles.taskContainer}>
        <Text style={[styles.task, completed && styles.completedTask]}>
          {task}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onChangeStatus} style={styles.statusButton}>
        <Text style={styles.statusText}>{status}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Ionicons name="trash" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderRadius: 5,
    marginBottom: 5,
  },
  taskContainer: {
    flex: 1,
  },
  task: {
    fontSize: 16,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  statusButton: {
    // backgroundColor: "#fff",
    paddingHorizontal:7,
    paddingVertical:3,
    borderRadius: 10,
    marginRight: 10,
    borderWidth:1,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "medium",
  },
  deleteButton: {
    backgroundColor: "#ff4444",
    padding: 5,
    borderRadius: 5,
  },
});

export default TodoItem;