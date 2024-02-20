import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ConfiScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/icons/gato.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.profileText}>Roberto Baltazar</Text>
      </View>
      <Text style={styles.title}>Configuración de Cuenta</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cambiar Contraseña</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cambiar Contraseña</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notificaciones</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Configurar Notificaciones</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cerrar Sesión</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileText: {
    fontSize: 18,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#8d4925',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ConfiScreen;
