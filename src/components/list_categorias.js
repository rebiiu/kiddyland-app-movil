import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const Categorias = () => {
  return (
    <View style={styles.containerCategorias}>
      <Text style={styles.Text}>Categorias:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.scrollView}>
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={[styles.categoryButton, styles.activeCategory]}>
            <Text style={styles.categoryText}>Muñecas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Carritos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Peluches</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Peluches</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Peluches</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>...</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCategorias: {
    backgroundColor: '#F8F8F8',
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
  },
  activeCategory: {
    backgroundColor: '#ffccbc',
  },
  categoryText: {
    fontSize: 16,
  },
  Text: {
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 25,
    fontSize: 14,
  },
});

export default Categorias;