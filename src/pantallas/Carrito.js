import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import * as Constantes from '../utilidades/constantes';
const ip = Constantes.IP;
import BottomMenu from '../components/BottomMenu';

const CarritoScreen = () => {
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
      price: 7.99,
      stock: 10,
      description: 'aaaaaaa',
      image: 'https://image.alza.cz/products/HRAa2467c/HRAa2467c.jpg?width=500&height=500',
    };
  
    const deliveryFee = 1.0;
    const total = (product.price * quantity + deliveryFee).toFixed(2);

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Carrito</Text>
        <Text style={styles.Deli}>Delivery</Text>
        <ScrollView>
          <View style={styles.productContainer}>
            <Text style={styles.sectionTitle}>Detalles de compra</Text>
            <View style={styles.addressContainer}>
              <Text style={styles.addressText}>Escriba su dirreción:</Text>
              <Text style={styles.addressText}> San Salvador, El Salvador.</Text>
              <TouchableOpacity>
                <Text style={styles.editButton}>Editar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productDetails}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name} - My little pony</Text>
                <Text style={styles.productBrand}>{product.brand}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{quantity}</Text>
                  <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.summaryContainer}>
              <Text style={styles.summaryText}>Sumatoria total:</Text>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>{product.name}</Text>
                <Text style={styles.summaryPrice}>${(product.price * quantity).toFixed(2)}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Delivery</Text>
                <Text style={styles.summaryPrice}>${deliveryFee.toFixed(2)}</Text>
              </View>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total a pagar</Text>
                <Text style={styles.totalPrice}>${total}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.purchaseButton}>
              <Text style={styles.purchaseButtonText}>Comprar orden</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <BottomMenu></BottomMenu>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    productContainer: {
        padding: 20,
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    addressContainer: {
        marginBottom: 20,
        marginTop: 10
    },
    addressText: {
        fontSize: 16,
        color: '#555',
    },
    editButton: {
      
       borderRadius: 5,
       padding:7,
        fontSize: 16,
        color:  '#555',
        marginTop: 10,
    },
    productDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    productImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginRight: 20,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    productBrand: {
        fontSize: 15,
        color: '#888',
        marginBottom: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        borderWidth:1,
        borderRadius: 50,
        paddingLeft: 15,
        paddingRight: 15,
        padding: 10,
    },
    quantityButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantityText: {
        fontSize: 18,
        marginHorizontal: 10,
    },
    summaryContainer: {
        marginBottom: 20,
    },
    summaryText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    summaryLabel: {
        fontSize: 16,
        color: '#555',
    },
    summaryPrice: {
        fontSize: 16,
        color: '#555',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingTop: 10,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    purchaseButton: {
        backgroundColor: '#FFAB9F',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
    },
    purchaseButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    Deli:{
        alignItems: 'center',
         textAlign: 'center',
         fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#60BFB2',
        margin: 30,
        marginBottom: 0,
        padding: 10,
        borderRadius: 10,

    }
});

export default CarritoScreen;
