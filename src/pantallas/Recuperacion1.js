import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';

const RecuperaContrasenaScreen = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Recupera tu contraseña</Text>
      <Text style={styles.subtitle}>¡Sigue los pasos!</Text>
      
      <Image source={require('../../assets/KIDDYLAND.png')} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Ingrese su correo electrónico"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />
      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={() => {/* Handle next action */}}>
          <Text style={styles.nextButtonText}>Siguiente</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
   
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8a5c2',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
  },
  image: {
    width: 100,
    height: 200,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#f8a5c2',
  },
  nextButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#f8a5c2',
  },
});

export default RecuperaContrasenaScreen;
