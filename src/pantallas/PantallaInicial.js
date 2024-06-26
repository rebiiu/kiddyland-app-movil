import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

const PantallaInicialScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/recu.png')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Bienvenido a</Text>
        <Text style={styles.title}>kiddyland</Text>
        <Text style={styles.subtitle}>Toy feliz en mi mundo</Text>
        <Image source={require('../../assets/KIDDYLAND.png')} style={styles.image} />
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Registro')}>
          <Text style={styles.registerButtonText}>Regístrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('InicioSesion')}>
          <Text style={styles.loginText}>¿Ya dispones de una cuenta? Inicia sesión</Text>
        </TouchableOpacity>
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
  welcomeText: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  registerButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  registerButtonText: {
    fontSize: 18,
    color: '#f8a5c2',
  },
  loginText: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default PantallaInicialScreen;
