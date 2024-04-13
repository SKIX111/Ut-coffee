import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const ServiciosScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const precios = {
    "Café Espresso": "$20",
    "Bocadillos": "$25",
    "Postres Caseros": "$30",
    "Comida": "$40",
    "Bebidas": "$19"
  };

  const addItemToCart = (itemName, price) => {
    setCartItems([...cartItems, { itemName, price }]);
  };

  const removeItemFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);

  const handleCompra = () => {
    console.log("Compra realizada!");
    clearCart();
  };

  return (
    <View style={styles.con}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.appName}>UT-COFFEES</Text>
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar comida.."
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.searchButton} onPress={() => console.log('Buscar', searchText)}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Image
            source={require('../../assets/icons/cafe1.jpg')}
            style={styles.image}
          />
          <Text style={styles.title}>Café Espresso</Text>
          <Text style={styles.description}>Disfruta de nuestro delicioso café expresso recién preparado</Text>
          <Text style={styles.price}>Precio: {precios["Café Espresso"]}</Text>
          <TouchableOpacity style={[styles.searchButton, { backgroundColor: '#8d4925' }]} onPress={() => addItemToCart("Café Espresso", precios["Café Espresso"])}>
            <Text style={styles.searchButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Image
            source={require('../../assets/icons/cafe2.jpg')}
            style={styles.image}
          />
          <Text style={styles.title}>Bocadillos</Text>
          <Text style={styles.description}>Prueba nuestros bocadillos artesanales, perfectos para acompañar tu café</Text>
          <Text style={styles.price}>Precio: {precios["Bocadillos"]}</Text>
          <TouchableOpacity style={[styles.searchButton, { backgroundColor: '#8d4925' }]} onPress={() => addItemToCart("Bocadillos", precios["Bocadillos"])}>
            <Text style={styles.searchButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Image
            source={require('../../assets/icons/cafe3.jpg')}
            style={styles.image}
          />
          <Text style={styles.title}>Postres Caseros</Text>
          <Text style={styles.description}>Déjate tentar por nuestra selección de postres caseros y dulces</Text>
          <Text style={styles.price}>Precio: {precios["Postres Caseros"]}</Text>
          <TouchableOpacity style={[styles.searchButton, { backgroundColor: '#8d4925' }]} onPress={() => addItemToCart("Postres Caseros", precios["Postres Caseros"])}>
            <Text style={styles.searchButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Image
            source={require('../../assets/icons/cafe4.jpg')}
            style={styles.image}
          />
          <Text style={styles.title}>Comida</Text>
          <Text style={styles.description}>Descubre nuestra variedad de platos principales</Text>
          <Text style={styles.price}>Precio: {precios["Comida"]}</Text>
          <TouchableOpacity style={[styles.searchButton, { backgroundColor: '#8d4925' }]} onPress={() => addItemToCart("Comida", precios["Comida"])}>
            <Text style={styles.searchButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Image
            source={require('../../assets/icons/cafe5.jpg')}
            style={styles.image}
          />
          <Text style={styles.title}>Bebidas</Text>
          <Text style={styles.description}>Refrescantes bebidas para acompañar tu comida</Text>
          <Text style={styles.price}>Precio: {precios["Bebidas"]}</Text>
          <TouchableOpacity style={[styles.searchButton, { backgroundColor: '#8d4925' }]} onPress={() => addItemToCart("Bebidas", precios["Bebidas"])}>
            <Text style={styles.searchButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Carrito de Compras</Text>
        {cartItems.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.cartItem}>{item.itemName}: {item.price}</Text>
            <TouchableOpacity onPress={() => removeItemFromCart(index)}>
              <Text style={{ color: '#8d4925', textDecorationLine: 'underline' }}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        ))}
        <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
        <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
          <Text style={styles.clearButtonText}>Limpiar Carrito</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.comprarButton} onPress={handleCompra}>
          <Text style={styles.comprarButtonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8d4925',
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#8d4925',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#8d4925',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  searchButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  section: {
    width: 350,
    height: 260,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#8d4925',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#333333',
  },
  price: {
    textAlign: 'center',
    color: '#8d4925',
    fontWeight: 'bold',
    marginTop: 5,
  },
  cartContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#8d4925',
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#8d4925',
    textAlign: 'auto'
  },
  cartItem: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333333',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#8d4925',
  },
  clearButton: {
    backgroundColor: '#8d4925',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
  },
  clearButtonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  comprarButton: {
    backgroundColor: '#8d4925',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  comprarButtonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ServiciosScreen;

