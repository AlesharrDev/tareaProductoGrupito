import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
}

const Container = ({ children, style, ...props }: ContainerProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1, // Borde para todos los elementos
    borderColor: 'red', // Color del borde
    margin: 5, // Margen para separar los elementos
  },
});

export default Container;