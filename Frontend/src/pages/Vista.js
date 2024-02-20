import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const ServiciosScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
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
        <Text style={styles.description}>Disfruta de nuestro delicioso café expresso recién preparado.</Text>
      </View>
      <View style={styles.section}>
        <Image
          source={require('../../assets/icons/cafe2.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>Bocadillos</Text>
        <Text style={styles.description}>Prueba nuestros bocadillos artesanales, perfectos para acompañar tu café.</Text>
      </View>
      <View style={styles.section}>
        <Image
          source={require('../../assets/icons/cafe3.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>Postres Caseros</Text>
        <Text style={styles.description}>Déjate tentar por nuestra selección de postres caseros y dulces.</Text>
      </View>
      {/* Agregar más secciones aquí */}
      <View style={styles.section}>
        <Image
          source={require('../../assets/icons/cafe4.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>Comida</Text>
        <Text style={styles.description}>Descubre nuestra variedad de platos principales.</Text>
      </View>
      <View style={styles.section}>
        <Image
          source={require('../../assets/icons/cafe5.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>Bebidas</Text>
        <Text style={styles.description}>Refrescantes bebidas para acompañar tu comida.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: 200,
    height: 200,
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
});

export default ServiciosScreen;
