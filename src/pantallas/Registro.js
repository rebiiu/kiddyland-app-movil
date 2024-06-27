import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const RegistroScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>¡Regístrate!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Ingrese un nombre:"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese un apellido:"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico:"
        placeholderTextColor="#ccc"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Dirección de domicilio:"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder="Número telefónico:"
        placeholderTextColor="#ccc"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña:"
        placeholderTextColor="#ccc"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirma la contraseña:"
        placeholderTextColor="#ccc"
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InicioSesion')}>
        <Text style={styles.buttonText}>Registrarme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PantallaInicial')}>
        <Text style={styles.buttonText}>Regresar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0fbcf9',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RegistroScreen;