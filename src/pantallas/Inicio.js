import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Image, StyleSheet, ActivityIndicator, Text } from 'react-native';
import * as Constantes from '../utilidades/constantes';
import BottomMenu from '../components/BottomMenu';
import ProductCard from '../components/card_productos';
import Categorias from '../components/list_categorias';

const ip = '192.168.1.20';  // Reemplaza con la IP correcta de tu servidor

const InicioScreen = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://${ip}/Kiddyland3/api/servicios/publico/producto.php?action=readProductosCategoria`;
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status) {
          setProductos(data.productos); // Asigna los datos de productos al estado
        } else {
          console.error('Error al obtener productos:', data.error || 'Error desconocido');
        }
      } catch (error) {
        console.error('Error de red:', error.message || 'Error desconocido');
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchData();
  }, []); // Se ejecuta solo al montar el componente

  const renderItem = ({ item }) => <ProductCard item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={require('../../assets/KIDDYLAND.png')} style={styles.teddyIcon} />
        <TextInput style={styles.searchInput} placeholder="Buscar" />
      </View>
      <Categorias />
      <View style={styles.containerItems}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : productos.length > 0 ? (
          <FlatList
            data={productos}
            renderItem={renderItem}
            keyExtractor={item => item.id_producto.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.listContainer}
            ListFooterComponent={<View style={{ height: 200 }} />} // Ajusta la altura según sea necesario
          />
        ) : (
          <Text>No hay productos disponibles.</Text>
        )}
      </View>
      <BottomMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85DACE',
  },
  searchContainer: {
    padding: 20,
  },
  searchInput: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
  },
  listContainer: {
    padding: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  containerItems: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  teddyIcon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default InicioScreen;
