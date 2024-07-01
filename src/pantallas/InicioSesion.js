import React, { useState } from 'react';
import { View, StyleSheet, Alert, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';


const InicioSesionScreen = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const ip = '192.168.1.20'; // Asegúrate de usar la IP correcta


  const handleLogin = async () => {
    const url = `http://${ip}/Kiddyland3/api/servicios/publico/cliente.php?action=logIn`;
    const formData = new FormData();
    formData.append('correoCliente', correo);
    formData.append('claveCliente', clave);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (data.status) {
        Alert.alert('Bienvenido', 'Inicio de sesión exitoso');
        // Llamar a handleGetUser para obtener los datos del usuario
        handleGetUser();
        navigation.navigate('Cuenta');
      } else {
        Alert.alert('Error', data.error || 'Error al iniciar sesión');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Error de red');
    }
  };

  const handleGetUser = async () => {
    try {
      const url = `http://${ip}/Kiddyland3/api/servicios/publico/cliente.php?action=getUser`;
      const response = await fetch(url, {
        method: 'GET'
      });
      const data = await response.json();
      if (data.status === 1) {
        // Actualizar el contexto de usuario o almacenar los datos según sea necesario
        // Ejemplo de almacenamiento local en el frontend:
        // AsyncStorage.setItem('userData', JSON.stringify(data));
        console.log('Usuario:', data.username);
      } else {
        Alert.alert('Error', data.error || 'Error al obtener datos del usuario');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Ocurrió un problema al obtener datos del usuario');
    }
  };
  
  const handleLogout = async () => {
    try {
        const url = `http://${ip}/Kiddyland3/api/servicios/publico/cliente.php?action=logOut`;
        const response = await fetch(url, {
            method: 'GET'
        });

        const data = await response.json();
        if (data.status === 1) {
            Alert.alert('Éxito', 'Sesión cerrada correctamente');
            navigation.navigate('PantallaInicial');  // Reemplaza con la navegación adecuada
        } else {
            Alert.alert('Error', data.error || 'Ocurrió un problema al cerrar la sesión');
        }
    } catch (error) {
        console.error('Error:', error);
        Alert.alert('Error', 'Ocurrió un problema al cerrar la sesión');
    }
};

  

  return (
    <ImageBackground source={require('../../assets/recu.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a kiddyland</Text>
        <Image source={require('../../assets/KIDDYLAND.png')} style={styles.image} />

        <TextInput
          label="Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          label="Contraseña"
          value={clave}
          onChangeText={setClave}
          style={styles.input}
          secureTextEntry
        />
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Iniciar sesión
        </Button>
        <Button mode="text" onPress={() => navigation.navigate('Recuperacion1')} style={styles.link}>
          ¿Olvidaste tu contraseña?
        </Button>
        <Button mode="text" onPress={() => navigation.navigate('PantallaInicial')} style={styles.link}>
          Regresar
        </Button>
        <TouchableOpacity style={styles.buttonSecondary} onPress={handleLogout}>
                <Text style={styles.buttonSecondaryText}>Cerrar sesión</Text>
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
    width: '80%',
    padding: 1,
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
