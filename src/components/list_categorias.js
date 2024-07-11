import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const ip = '192.168.1.17'; // Asegúrate de usar la IP correcta

  useEffect(() => {
    const fetchCategorias = async () => {
      const url = `http://${ip}/Kiddyland3/api/servicios/publico/categoria.php?action=readProductosCategoria`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status && data.categorias) {
          setCategorias(data.categorias); // Asigna las categorías obtenidas al estado
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
    <View style={styles.containerCategorias}>
      <Text style={styles.text}>Categorías:</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.scrollView}>
          <View style={styles.categoriesContainer}>
            {categorias.map((categoria) => (
              <TouchableOpacity key={categoria.id_categoria} style={styles.categoryButton}>
                <Text style={styles.categoryText}>{categoria.nombre_categoria}</Text>
              </TouchableOpacity>
            ))}
            {categorias.length === 0 && (
              <Text style={styles.categoryText}>No hay categorías disponibles</Text>
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerCategorias: {
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
    marginVertical: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  categoryButton: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#DDDDDD',
    marginHorizontal: 5,
  },
  categoryText: {
    fontSize: 16,
  }
});

export default Categorias;
