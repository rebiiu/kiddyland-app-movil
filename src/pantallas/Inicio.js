import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import * as Constantes from '../utilidades/constantes';
import BottomMenu from '../components/BottomMenu';
const ip = Constantes.IP;
 
const data = [
  {
    id: '1',
    name: 'Rarity',
    brand: 'Mattel',
    price: '$7.99',
    stock: 10,
    image: 'https://image.alza.cz/products/HRAa2467c/HRAa2467c.jpg?width=500&height=500', // Reemplaza con la URL de la imagen real
  },
  {
    id: '2',
    name: 'Poly pocket',
    brand: 'Mattel',
    price: '$25.31',
    stock: 10,
    image: 'https://http2.mlstatic.com/D_NQ_NP_956704-MLU72637033979_112023-O.webp', // Reemplaza con la URL de la imagen real
  },
  {
    id: '3',
    name: 'Rarity',
    brand: 'Mattel',
    price: '$7.99',
    stock: 10,
    image: 'https://image.alza.cz/products/HRAa2467c/HRAa2467c.jpg?width=500&height=500', // Reemplaza con la URL de la imagen real
  },
  {
    id: '4',
    name: 'Poly pocket',
    brand: 'Mattel',
    price: '$25.31',
    stock: 10,
    image: 'https://http2.mlstatic.com/D_NQ_NP_956704-MLU72637033979_112023-O.webp', // Reemplaza con la URL de la imagen real
  },
  {
    id: '5',
    name: 'Rarity',
    brand: 'Mattel',
    price: '$7.99',
    stock: 10,
    image: 'https://image.alza.cz/products/HRAa2467c/HRAa2467c.jpg?width=500&height=500', // Reemplaza con la URL de la imagen real
  },
  {
    id: '6',
    name: 'Poly pocket',
    brand: 'Mattel',
    price: '$25.31',
    stock: 10,
    image: 'https://http2.mlstatic.com/D_NQ_NP_956704-MLU72637033979_112023-O.webp', // Reemplaza con la URL de la imagen real
  },
  // Añade más elementos aquí
];
 
const InicioScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemBrand}>{item.brand}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemStock}>stock ({item.stock})</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
 
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
      <Image source={require('../../assets/KIDDYLAND.png')} style={styles.teddyIcon} />
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
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
 
      <View style={styles.containerItems}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContainer}
          ListFooterComponent={<View style={{ height: 200 }} />} // Ajusta la altura según sea necesario
        />
      </View>
      <BottomMenu/>
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
    marginTop: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 30,
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
  listContainer: {
    padding: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    flex: 1,
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemBrand: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    color: '#00796b',
  },
  itemStock: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#60BFB2',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    paddingRight: 20,
    paddingLeft: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  Text: {
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 25,
    fontSize: 14,
 
  },
  containerCategorias: {
    backgroundColor: '#F8F8F8',
  },
  containerItems:{
    backgroundColor: '#F8F8F8',
  },
  teddyIcon: {
    marginTop: 25,
    width: 100,
    height: 100,
    marginLeft: 300,
  }
});
 
export default InicioScreen;