import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InicioSesionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Inicio de Sesión</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8a5c2',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

export default InicioSesionScreen;