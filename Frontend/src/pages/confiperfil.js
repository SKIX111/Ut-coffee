import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';

const ConfiScreen = () => {
  const [showImageModal, setShowImageModal] = useState(false);

  const toggleImageModal = () => {
    setShowImageModal(!showImageModal);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleImageModal} style={styles.profileContainer}>
          <Image
            source={require('../../assets/icons/gato.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileText}>Roberto Baltazar</Text>
        </TouchableOpacity>
        <Modal
          visible={showImageModal}
          transparent={true}
          onRequestClose={toggleImageModal}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={toggleImageModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
            <Image
              source={require('../../assets/icons/gato.jpg')}
              style={styles.fullImage}
            />
          </View>
        </Modal>
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
          <Text style={styles.sectionTitle}>Editar Perfil</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Idioma</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Seleccionar Idioma</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Modo de Tema</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cambiar Tema</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eliminar Cuenta</Text>
          <TouchableOpacity style={[styles.button, styles.deleteButton]}>
            <Text style={styles.buttonText}>Eliminar Cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#000000',
  },
  profileText: {
    fontSize: 20,
    marginTop: 10,
    color: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#8d4925',
  },
  section: {
    marginBottom: 20,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
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
    fontSize: 18,
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: '#ff0000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0.3, 0.4, 0.4, 0.7)',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  fullImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default ConfiScreen;
