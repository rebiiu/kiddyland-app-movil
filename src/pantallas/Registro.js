import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';


const RegistroScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [clave, setClave] = useState('');
  const [confirmarClave, setConfirmarClave] = useState('');
  const ip = '192.168.0.13';  // Reemplaza con la IP correcta de tu servidor

  const handleRegister = async () => {
    if (clave !== confirmarClave) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    try {
      const url = `http://${ip}/Kiddyland3/api/servicios/publico/cliente.php?action=signUpMovil`;
      const formData = new FormData();
      formData.append('nombreCliente', nombre);
      formData.append('apellidoCliente', apellido);
      formData.append('correoCliente', correo);
      formData.append('telefonoCliente', telefono);
      formData.append('claveCliente', clave);
      formData.append('confirmarClave', confirmarClave);

      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (data.status === 1) {
        Alert.alert('Éxito', 'Cuenta registrada correctamente');
        navigation.navigate('InicioSesion');  // Reemplaza con la navegación adecuada
      } else {
        Alert.alert('Error', data.error || 'Ocurrió un problema al registrar la cuenta');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Ocurrió un problema al registrar la cuenta');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Regístrate!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Ingrese un nombre:"
        placeholderTextColor="#ccc"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese un apellido:"
        placeholderTextColor="#ccc"
        value={apellido}
        onChangeText={setApellido}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico:"
        placeholderTextColor="#ccc"
        keyboardType="email-address"
        value={correo}
        onChangeText={setCorreo}
      />
       <TextInput
        style={styles.input}
        placeholder="Número telefónico:"
        placeholderTextColor="#ccc"
        keyboardType="phone-pad"
        value={telefono}
        onChangeText={setTelefono}
      /> 
      <TextInput
        style={styles.input}
        placeholder="Contraseña:"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={clave}
        onChangeText={setClave}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirma la contraseña:"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={confirmarClave}
        onChangeText={setConfirmarClave}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PantallaInicial')}>
        <Text style={styles.buttonText}>Regresar</Text>
      </TouchableOpacity>
    </View>
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