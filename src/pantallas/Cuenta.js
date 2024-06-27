import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';

const CuentaScreen = ({ navigation }) => {

    const [nombre, setNombre] = useState(' ');
    const [apellido, setApellido] = useState(' ');
    const [correo, setCorreo] = useState(' ');
    const [direccion, setDireccion] = useState(' ');
    const [telefono, setTelefono] = useState(' ');
    const [contrasenaActual, setContrasenaActual] = useState(' ');
    const [nuevaContrasena, setNuevaContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const showModal = (message) => {
        setModalMessage(message);
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Mi cuenta</Text>
            <View style={styles.section}>
                <Text style={styles.label}>Nombre:</Text>
                <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Apellido:</Text>
                <TextInput style={styles.input} value={apellido} onChangeText={setApellido} />
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Correo electrónico:</Text>
                <TextInput style={styles.input} value={correo} onChangeText={setCorreo} keyboardType="email-address" />
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Direccion de domicilio:</Text>
                <TextInput style={styles.input} value={direccion} onChangeText={setDireccion} />
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Número telefónico:</Text>
                <TextInput style={styles.input} value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => showModal('Datos actualizados correctamente')}>
                <Text style={styles.buttonText}>Actualizar</Text>
            </TouchableOpacity>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Cambiar contraseña:</Text>
                <Text style={styles.label}>Actual contraseña:</Text>
                <TextInput style={styles.input} value={contrasenaActual} onChangeText={setContrasenaActual} secureTextEntry />
                <Text style={styles.label}>Nueva contraseña:</Text>
                <TextInput style={styles.input} value={nuevaContrasena} onChangeText={setNuevaContrasena} secureTextEntry />
                <Text style={styles.label}>Confirma la contraseña:</Text>
                <TextInput style={styles.input} value={confirmarContrasena} onChangeText={setConfirmarContrasena} secureTextEntry />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => showModal('Contraseña actualizada correctamente')}>
                <Text style={styles.buttonText}>Guardar contraseña</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate('InicioSesion')}>
                <Text style={styles.buttonSecondaryText}>Cerrar sesión</Text>
            </TouchableOpacity>
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
        </ScrollView>

    );
};




const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#333'
    },
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    section: {
        marginBottom: 20,
        
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: '#60BFB2',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    buttonSecondary: {
        backgroundColor: '#FFAB9F',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
    },
    buttonSecondaryText: {
        color: '#fff',
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
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
        fontSize: 16
    },
});

export default CuentaScreen;