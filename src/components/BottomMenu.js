import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Asegúrate de tener react-native-vector-icons instalado
import InicioScreen from '../pantallas/Inicio';
import CuentaScreen from '../pantallas/Cuenta';
import CarritoScreen from '../pantallas/Carrito';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Inicio');

  const renderScreen = () => {
    switch (selectedTab) {
      case 'Inicio':
        return <InicioScreen />;
      case 'Cuenta':
        return <CuentaScreen />;
      case 'Carrito':
        return <CarritoScreen />;
      default:
        return <InicioScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedTab('Inicio')}>
          <Icon name="home-outline" size={30} color={selectedTab === 'Inicio' ? '#00796b' : 'gray'} />
          <Text style={{ color: selectedTab === 'Inicio' ? '#00796b' : 'gray' }}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedTab('Cuenta')}>
          <Icon name="search-outline" size={30} color={selectedTab === 'Cuenta' ? '#00796b' : 'gray'} />
          <Text style={{ color: selectedTab === 'Cuenta' ? '#00796b' : 'gray' }}>Cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedTab('Carrito')}>
          <Icon name="cart-outline" size={30} color={selectedTab === 'Carrito' ? '#00796b' : 'gray'} />
          <Text style={{ color: selectedTab === 'Carrito' ? '#00796b' : 'gray' }}>Carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e0f7fa',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
