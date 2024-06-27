import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Recuperacion2Screen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/recu.png')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Recupera tu contraseña</Text>
        <Image source={require('../../assets/KIDDYLAND.png')} style={styles.image} />
        <Text style={styles.instruction}>Ingrese el código enviado al correo electrónico:</Text>
        <TextInput style={styles.input} placeholder="******" secureTextEntry={true} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Regresar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Recuperacion3')}>
            <Text style={styles.buttonText}>Verificar</Text>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 75
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#f8a5c2',
  },
});

export default Recuperacion2Screen;
