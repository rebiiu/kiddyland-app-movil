import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import * as Constantes from '../utilidades/constantes';
const ip = Constantes.IP;

const ProductDetailScreen = () => {
    const [quantity, setQuantity] = useState(1);
  
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const product = {
        id: '1',
      name: 'Rarity',
      brand: 'Mattel',
      price: '$7.99',
      stock: 10,
      Description: 'aaaaaaa',
      image: 'https://image.alza.cz/products/HRAa2467c/HRAa2467c.jpg?width=500&height=500', // Reemplaza con la URL de la imagen real
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Detalle del producto</Text>
        <ScrollView>
        <View style={styles.productContainer}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <Text style={styles.productName}>{product.name} - My little pony</Text>
          <Text style={styles.productBrand}>{product.brand}</Text>
          <Text style={styles.productStock}>stock:{product.stock}</Text>
          <Text style={styles.productDescriptionTitle}>Descripción:</Text>
          <Text style={styles.productDescription}>{product.Description}</Text>
          <Text style={styles.productQuantityTitle}>Cantidad:</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>{product.price}</Text>
          </View>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#Ffff',
      paddingTop: 40,
    },
    backButton: {
      position: 'absolute',
      top: 40,
      left: 20,
      zIndex: 1,
    },
    backButtonText: {
        marginTop: 50,
        paddingLeft: 15,
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    },
    header: {
        marginTop: 50,
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    productContainer: {
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 20,
      margin: 20,
      alignItems: 'center',
    },
    productImage: {
      width: 280,
      height: 260,
      resizeMode: 'contain',
    },
    productName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign: 'center',
    },
    productBrand: {
      fontSize: 18,
      color: '#888',
      marginBottom: 10,
    },
    productStock: {
      fontSize: 16,
      color: '#888',
      marginBottom: 20,
    },
    productDescriptionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      marginTop: 10,
    },
    productDescription: {
      fontSize: 16,
      color: '#555',
      marginBottom: 20,
      alignSelf: 'flex-start',
    },
    productQuantityTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      marginTop: 10,
    },
    quantityContainer: {
        marginTop:20,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    quantityButton: {
        borderColor: '#60BFB2',
        borderWidth: 1,
        paddingLeft: 30,
        paddingRight: 30,
        
      backgroundColor: '#85DACE',
      borderRadius: 5,
      padding: 10,
      marginHorizontal: 10,
    },
    quantityButtonText: {
        
      fontSize: 15,
      color: '#fff',
      fontWeight: 'bold',
    },
    quantityText: {
      fontSize:20,
      minWidth: 50,
      textAlign: 'center',
    },
    totalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 20,
    },
    totalText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    totalPrice: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    addToCartButton: {
      backgroundColor: '#FFAB9F',
      borderRadius: 10,
      padding: 20,
      width: '100%',
      alignItems: 'center',
    },
    addToCartButtonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
  });

export default ProductDetailScreen;
