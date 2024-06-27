import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Recuperacion3Screen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/recu.png')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Recupera tu contraseña</Text>
        <Text style={styles.subtitle}>¡No la olvides!</Text>
        <Image source={require('../../assets/KIDDYLAND.png')} style={styles.image} />
        <Text style={styles.instruction}>Ingresar nueva contraseña:</Text>
        <TextInput style={styles.input} placeholder="********" secureTextEntry={true} />
        <Text style={styles.instruction}>Repetir contraseña</Text>
        <TextInput style={styles.input} placeholder="********" secureTextEntry={true} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InicioSesion')}>
          <Text style={styles.buttonText}>Confirmar</Text>
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
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 90
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#f8a5c2',
  },
});

export default Recuperacion3Screen;
