import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal, Alert } from 'react-native';

const CuentaScreen = ({ navigation }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contrasenaActual, setContrasenaActual] = useState('');
    const [nuevaContrasena, setNuevaContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [userId, setUserId] = useState(null); // Estado para almacenar el ID del usuario
    const ip = '192.168.1.10';  // Reemplaza con la IP correcta de tu servidor

    useEffect(() => {
        const cargarPerfil = async () => {
            try {
                // Aquí normalmente se manejaría la autenticación y obtención del token
                const response = await fetch(`http://${ip}/Kiddyland3/api/servicios/publico/cliente.php?action=readProfile`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        // Incluir aquí el token de autenticación si ya lo has obtenido
                        // 'Authorization': `Bearer ${token}`
                    },
                });
                const data = await response.json();
                if (data.status === 1) {
                    const perfil = data.profile;
                    console.log('Perfil cargado:', perfil);
                    setUserId(perfil.idCliente); // Guarda el ID del cliente
                    setNombre(perfil.nombreCliente);
                    setApellido(perfil.apellidoCliente);
                    setCorreo(perfil.correoCliente);
                    setTelefono(perfil.telefonoCliente);
                } else {
                    Alert.alert('Error', data.message || 'Ocurrió un problema al cargar el perfil');
                }
            } catch (error) {
                console.error('Error:', error);
                Alert.alert('Error', 'Ocurrió un problema al cargar el perfil');
            }
        };

        cargarPerfil();
    }, []);

    const showModal = (message) => {
        setModalMessage(message);
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const handleActualizarDatos = async () => {
        const formData = new FormData();
        formData.append('idCliente', userId); // Enviar el ID del cliente
        formData.append('nombreCliente', nombre);
        formData.append('apellidoCliente', apellido);
        formData.append('telefonoCliente', telefono);
        formData.append('correoCliente', correo);

        try {
            const response = await fetch(`http://${ip}/Kiddyland3/api/servicios/publico/cliente.php?action=editProfile`, {
                method: 'POST',
                headers: {
                    // Incluir aquí el token de autenticación si ya lo has obtenido
                    // 'Authorization': `Bearer ${token}`
                },
                body: formData,
            });
            const data = await response.json();
            console.log('Respuesta actualizar datos:', data);
            if (data.status === 1) {
                showModal('Datos actualizados correctamente');
            } else {
                throw new Error(data.error || 'Ocurrió un problema al actualizar los datos');
            }
        } catch (error) {
            console.error('Error al actualizar los datos:', error);
            Alert.alert('Error', error.message || 'Ocurrió un problema al actualizar los datos');
        }
    };

    const handleCambiarContrasena = async () => {
        if (nuevaContrasena !== confirmarContrasena) {
            showModal('Las contraseñas no coinciden');
            return;
        }

        const formData = new FormData();
        formData.append('idCliente', userId); // Enviar el ID del cliente
        formData.append('ClaveActual', contrasenaActual);
        formData.append('claveCliente', nuevaContrasena);
        formData.append('confirmarClave', confirmarContrasena);

        try {
            const response = await fetch(`http://${ip}/Kiddyland3/api/servicios/publico/cliente.php?action=changePassword`, {
                method: 'POST',
                headers: {
                    // Incluir aquí el token de autenticación si ya lo has obtenido
                    // 'Authorization': `Bearer ${token}`
                },
                body: formData,
            });
            const data = await response.json();
            console.log('Respuesta cambiar contraseña:', data);
            if (data.status === 1) {
                showModal('Contraseña actualizada correctamente');
            } else {
                throw new Error(data.error || 'Ocurrió un problema al cambiar la contraseña');
            }
        } catch (error) {
            console.error('Error al cambiar la contraseña:', error);
            Alert.alert('Error', error.message || 'Ocurrió un problema al cambiar la contraseña');
        }
    };

    const handleLogout = async () => {
        try {
            const url = `http://${ip}/Kiddyland3/api/servicios/publico/cliente.php?action=logOut`;
            const response = await fetch(url, {
                method: 'GET',
            });

            const data = await response.json();
            console.log('Respuesta cerrar sesión:', data);
            if (data.status === 1) {
                Alert.alert('Éxito', 'Sesión cerrada correctamente');
                navigation.navigate('PantallaInicial');
            } else {
                throw new Error(data.error || 'Ocurrió un problema al cerrar la sesión');
            }
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            Alert.alert('Error', error.message || 'Ocurrió un problema al cerrar la sesión');
        }
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
                <Text style={styles.label}>Número telefónico:</Text>
                <TextInput style={styles.input} value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" />
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Correo electrónico:</Text>
                <TextInput style={styles.input} value={correo} onChangeText={setCorreo} keyboardType="email-address" />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleActualizarDatos}>
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
            <TouchableOpacity style={styles.button} onPress={handleCambiarContrasena}>
                <Text style={styles.buttonText}>Guardar contraseña</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSecondary} onPress={handleLogout}>
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
