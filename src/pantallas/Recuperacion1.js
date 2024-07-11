import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Alert, ImageBackground, Image } from 'react-native';
import emailjs from 'emailjs-com';

const Recuperacion1Screen = ({ navigation }) => {
    const [correo, setCorreo] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const ip = '192.168.0.11';  // Reemplaza con la IP correcta de tu servidor


    const showModal = (message) => {
        setModalMessage(message);
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const sendVerificationCode = async (correo) => {
        const verificationCode = Math.floor(10000 + Math.random() * 90000).toString(); // Generar un código de 5 dígitos
        const serviceID = 'service_pp5r4ak'; // Reemplaza con tu Service ID
        const templateID = 'template_5eul5pj'; // Reemplaza con tu Template ID
        const userID = 'X4CwRTiwCOTRli3rP'; // Reemplaza con tu User ID

        const templateParams = {
            correo_cliente: correo,
            verification_code: verificationCode,
        };

        try {
            const response = await emailjs.send(serviceID, templateID, templateParams, userID);
            console.log('Correo enviado:', response.status, response.text);
            showModal('Código de verificación enviado. Por favor, revise su correo.');
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            Alert.alert('Error', 'Ocurrió un problema al enviar el correo electrónico');
        }
    };

    const handleCheckEmail = async () => {
        try {
            if (!correo) {
                Alert.alert('Error', 'Ingrese un correo electrónico válido');
                return;
            }
            const formData = new FormData();
            formData.append('correoCliente', correo);
            const url = `http://${ip}/Kiddyland3/api/servicios/publico/cliente.php?action=checkEmail`;
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Respuesta del servidor:', data);

            if (data.status === 1) {
                await sendVerificationCode(correo);
                navigation.navigate('Recuperacion2');
            } else {
                Alert.alert('Error', data.message || 'El correo electrónico no existe');
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'Ocurrió un problema al verificar el correo electrónico');
        }
    };
    

    return (
        <ImageBackground source={require('../../assets/recu.png')} style={styles.backgroundImage}>
            <View style={styles.overlay}>
                <Text style={styles.title}>Recupera tu contraseña</Text>
                <Image source={require('../../assets/KIDDYLAND.png')} style={styles.image} />
                <Text style={styles.instruction}>Ingrese su correo electrónico:</Text>
                <TextInput
                    style={styles.input}
                    value={correo}
                    onChangeText={setCorreo}
                    keyboardType="email-address"
                    placeholder="Correo electrónico"
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleCheckEmail}>
                        <Text style={styles.buttonText}>Verificar Correo</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={hideModal}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>{modalMessage}</Text>
                            <TouchableOpacity style={styles.modalButton} onPress={hideModal}>
                                <Text style={styles.modalButtonText}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
      paddingHorizontal: 50,
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
  },
  button: {
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 35,
      borderRadius: 25,
      marginRight: 10,
  },
  buttonText: {
      fontSize: 16,
      color: '#f8a5c2',
  },
  modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      alignItems: 'center',
  },
  modalText: {
      fontSize: 18,
      marginBottom: 20,
  },
  modalButton: {
      backgroundColor: '#60BFB2',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
  },
  modalButtonText: {
      color: '#fff',
      fontSize: 16,
  },
});

export default Recuperacion1Screen;
