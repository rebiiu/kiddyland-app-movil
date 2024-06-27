import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

const InicioSesionScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/recu.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a kiddyland</Text>
        <Image source={require('../../assets/KIDDYLAND.png')} style={styles.image} />
        
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico:"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña:"
          placeholderTextColor="#ccc"
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Recuperacion1')}>
          <Text style={styles.forgotText}>¿Olvidaste tu contraseña? <Text style={styles.recoverText}>Recuperar</Text></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicio')}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('PantallaInicial')}>
          <Text style={styles.buttonText}>Regresar</Text>
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
   
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
   
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 30,
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  forgotButton: {
    alignItems: 'center',
    marginBottom: 20
  },
  forgotText: {
    color: '#333',
  },
  recoverText: {
    color: '#0fbcf9',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#0fbcf9',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 25,
    width: '75%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    borderRadius: 25
  },
  backButton: {
    backgroundColor: '#f8a5c2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '75%',
    borderRadius: 25
  },
});

export default InicioSesionScreen;