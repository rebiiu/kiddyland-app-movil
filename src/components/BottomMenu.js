import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Asegúrate de tener react-native-vector-icons instalado
import InicioScreen from '../pantallas/Inicio';
import CuentaScreen from '../pantallas/Cuenta';

const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>

    </View>
  );
};

const SearchScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Search Screen</Text>
    </View>
  );
};

const CartScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Cart Screen</Text>
    </View>
  );
};

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Home');

  const renderScreen = () => {
    switch (selectedTab) {
      case 'inicio':
        return <InicioScreen/>;
      case 'Cuenta':
        return <CuentaScreen />;
      case 'Carrito':
        return <CartScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedTab('Home')}>
          <Icon name="home-outline" size={30} color={selectedTab === 'Home' ? '#00796b' : 'gray'} />
          <Text style={{ color: selectedTab === 'Home' ? '#00796b' : 'gray' }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedTab('Search')}>
          <Icon name="search-outline" size={30} color={selectedTab === 'Search' ? '#00796b' : 'gray'} />
          <Text style={{ color: selectedTab === 'Search' ? '#00796b' : 'gray' }}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedTab('Cart')}>
          <Icon name="cart-outline" size={30} color={selectedTab === 'Cart' ? '#00796b' : 'gray'} />
          <Text style={{ color: selectedTab === 'Cart' ? '#00796b' : 'gray' }}>Cart</Text>
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
