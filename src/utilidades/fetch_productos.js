import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import ProductCard from '../components/card_productos'; // Asegúrate de importar correctamente

const ProductListScreen = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const ip = '192.168.1.17'; // Asegúrate de usar la IP correcta

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

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : productos.length > 0 ? (
        <FlatList
          data={productos}
          keyExtractor={(item) => item.id_producto.toString()}
          renderItem={({ item }) => <ProductCard item={item} />}
        />
      ) : (
        <Text>No hay productos disponibles.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default ProductListScreen;
