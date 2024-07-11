// screens/Carrito.js
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';
import * as Constantes from '../utilidades/constantes';
import UserList from '../components/Usuario/ListaUsuarios';
import UserModal from '../components/Modal/ModalUsuario';
import Buttons from '../components/BottomMenu';

const Admin = ({ logueado, setLogueado }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contrasenaActual, setContrasenaActual] = useState('');
    const [nuevaContrasena, setNuevaContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [userId, setId] = useState(null); // Estado para almacenar el ID del usuario
    const ip = '192.168.1.17';

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await fetch(`${Constantes.IP}/Kiddyland3/api/servicios/publico/cliente.php?action=readAll`, {
        method: 'GET',
      });

      const data = await response.json();
      if (data.status) {
        setDataUsuarios(data.dataset);
      } else {
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al listar los usuarios');
    }
  };

  const handleCreateUser = async () => {
    if (clave !== confirmarClave) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    const formData = new FormData();
    formData.append('nombreAdministrador', nombre);
    formData.append('apellidoAdministrador', apellido);
    formData.append('correoAdministrador', correo);
    formData.append('aliasAdministrador', alias);
    formData.append('claveAdministrador', clave);
    formData.append('confirmarClave', confirmarClave);

    try {
      const response = await fetch(`${Constantes.IP}/coffeeshop/api/services/admin/administrador.php?action=createRow`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.status) {
        Alert.alert('Éxito', data.message);
        fetchUsuarios();
        setIsModalVisible(false);
      } else {
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al crear el usuario');
    }
  };

  const handleEditUser = async () => {
    try {
      const formData = new FormData();
      formData.append('idAdministrador', idAdmin);
      formData.append('nombreAdministrador', nombre);
      formData.append('apellidoAdministrador', apellido);
      formData.append('correoAdministrador', correo);

      const response = await fetch(`${Constantes.IP}/coffeeshop/api/services/admin/administrador.php?action=updateRow`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.status) {
        Alert.alert('Éxito', data.message);
        fetchUsuarios();
        setIsModalVisible(false);
      } else {
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al editar el usuario');
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const formData = new FormData();
      formData.append('idAdministrador', userId);
      const response = await fetch(`${Constantes.IP}/coffeeshop/api/services/admin/administrador.php?action=deleteRow`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.status) {
        Alert.alert('Éxito', data.message);
        fetchUsuarios();
      } else {
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al eliminar el usuario');
    }
  };

  const openCreateModal = () => {
    setId('');
    setNombre('');
    setApellido('');
    setCorreo('');
    setAlias('');
    setClave('');
    setConfirmar('');
    setModalType('create');
    setIsModalVisible(true);
  };

  const openEditModal = (user) => {
    setNombre(user.nombre_administrador);
    setApellido(user.apellido_administrador);
    setCorreo(user.correo_administrador);
    setAlias('');
    setClave('');
    setConfirmar('');
    setId(user.id_administrador);
    setSelectedUser(user);
    setModalType('edit');
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = () => {
    if (modalType === 'create') {
      handleCreateUser();
    } else {
      handleEditUser();
    }
  };

  return (
    <View style={styles.container}>
      <UserList users={dataUsuarios} onEdit={openEditModal} onDelete={handleDeleteUser} />
      <TouchableOpacity style={styles.addButton} onPress={openCreateModal}>
        <Text style={styles.addButtonText}>Agregar Usuario</Text>
      </TouchableOpacity>
      <UserModal
        isVisible={isModalVisible}
        onClose={closeModal}
        onSubmit={handleSubmit}
        nombre={nombre}
        setNombre={setNombre}
        apellido={apellido}
        setApellido={setApellido}
        correo={correo}
        setCorreo={setCorreo}
        alias={alias}
        setAlias={setAlias}
        clave={clave}
        setClave={setClave}
        confirmarClave={confirmarClave}
        setConfirmarClave={setConfirmar}
        modalType={modalType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
  },
  addButton: {
    backgroundColor: '#AF8260',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Admin;
