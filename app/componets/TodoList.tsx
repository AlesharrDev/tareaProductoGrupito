// src/components/TodoList.tsx
import React, { useState } from "react";
import { View, TextInput, Button, FlatList, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

interface Task {
  id: string;
  task: string;
  completed: boolean;
  status: "Pendiente" | "En proceso" | "Completado"; // Nuevo estado con frases completas
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), task: newTask, completed: false, status: "Pendiente" }, // Estado inicial: Pendiente
      ]);
      setNewTask("");
    }
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeStatus = (id: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          // Cambiar el estado en orden: Pendiente -> En proceso -> Completado -> Pendiente
          if (task.status === "Pendiente") return { ...task, status: "En proceso" };
          if (task.status === "En proceso") return { ...task, status: "Completado" };
          if (task.status === "Completado") return { ...task, status: "Pendiente" };
        }
        return task;
      })
    );
  };

  // Ordenar tareas: Pendiente -> En proceso -> Completado
  const sortedTasks = tasks.sort((a, b) => {
    const statusOrder = { Pendiente: 1, "En proceso": 2, Completado: 3 };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nueva tarea"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Agregar" onPress={addTask} />
      <FlatList
        data={sortedTasks} // Usar las tareas ordenadas
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            task={item.task}
            completed={item.completed}
            status={item.status} // Pasar el estado
            onToggle={() => toggleTask(item.id)}
            onDelete={() => deleteTask(item.id)}
            onChangeStatus={() => changeStatus(item.id)} // Pasar la función para cambiar el estado
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default TodoList;