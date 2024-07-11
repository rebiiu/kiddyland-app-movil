import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductCard = ({ item }) => {
  return (
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
};

const styles = StyleSheet.create({
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
});

export default ProductCard;
