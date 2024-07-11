import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text, TouchableOpacity } from 'react-native';

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const ip = '192.168.1.17'; // Asegúrate de usar la IP correcta

  useEffect(() => {
    const fetchCategorias = async () => {
      const url = `http://${ip}/Kiddyland3/api/servicios/publico/categoria.php?action=readCategorias`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status) {
          setCategorias(data.categorias); // Asigna los datos de categorías al estado
        } else {
          console.error('Error al obtener categorías:', data.error || 'Error desconocido');
        }
      } catch (error) {
        console.error('Error de red:', error.message || 'Error desconocido');
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchCategorias();
  }, []); // Se ejecuta solo al montar el componente

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categorías:</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : categorias.length > 0 ? (
        <FlatList
          data={categorias}
          keyExtractor={(item) => item.id_categoria.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>{item.nombre_categoria}</Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        />
      ) : (
        <Text>No hay categorías disponibles.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    paddingTop: 20,
    paddingBottom: 10,
  },
  text: {
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    paddingVertical: 10,
  },
  categoryButton: {
    backgroundColor: '#DDDDDD',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  categoryText: {
    fontSize: 16,
  },
});

export default Categorias;
