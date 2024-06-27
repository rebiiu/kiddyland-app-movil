import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';

const Recuperacion1Screen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/recu.png')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Recupera tu contraseña</Text>
        <Text style={styles.subtitle}>¡Sigue los pasos!</Text>
        <Image source={require('../../assets/KIDDYLAND.png')} style={styles.image} />
        <Text style={styles.instruction}>Ingrese su correo electrónico:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="correo@example.com" 
          keyboardType="email-address" 
          autoCapitalize="none" 
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Recuperacion2')}>
            <Text style={styles.nextButtonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 5,
  },
  instruction: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 50
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  cancelButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginRight: 10,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#f8a5c2',
  },
  nextButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 25,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#f8a5c2',
  },
});

export default Recuperacion1Screen;
