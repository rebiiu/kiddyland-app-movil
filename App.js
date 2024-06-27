import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PantallaInicialScreen from './src/pantallas/PantallaInicial';
import CarritoScreen from './src/pantallas/Carrito';
import CuentaScreen from './src/pantallas/Cuenta';
import DetalleCompraScreen from './src/pantallas/DetalleCompra';
import InicioScreen from './src/pantallas/Inicio';
import InicioSesionScreen from './src/pantallas/InicioSesion';
import Recuperacion1Screen from './src/pantallas/Recuperacion1';
import Recuperacion2Screen from './src/pantallas/Recuperacion2';
import Recuperacion3Screen from './src/pantallas/Recuperacion3';
import RegistroScreen from './src/pantallas/Registro';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PantallaInicial">
        <Stack.Screen 
          name="PantallaInicial" 
          component={PantallaInicialScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="InicioSesion" 
          component={InicioSesionScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Recuperacion1" 
          component={Recuperacion1Screen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Registro" 
          component={RegistroScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Inicio" 
          component={InicioScreen}  // Añade la pantalla Inicio
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
