import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Alert,  TouchableOpacity } from 'react-native';

const CrearScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
 

  const handleCrearCuenta = async () => {
    try {
     
      const response = await fetch('http://localhost:3000/u/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          direccion: direccion,
          telefono: correo, 
          correo: correo,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Usuario creado:', data);
        Alert.alert('Éxito', 'Usuario creado correctamente');
        navigation.navigate('login');
      } else {
        const errorData = await response.json();
        console.error('Error al crear usuario:', errorData);
        Alert.alert('Error', 'Error al crear usuario');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      Alert.alert('Error', 'Error al realizar la solicitud');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <View style={styles.cuadro}>
        <Image
          source={
            require('../../assets/icons/cafe.png')
          }
          style={styles.logo}
        />
        <Text style={styles.titulo}>UT-COFFEES</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre y apellido"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
        />
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          value={direccion}
          onChangeText={setDireccion}
        />
         <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
        />
         <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={handleCrearCuenta}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.link}>Ya tengo una cuenta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    width:"100%",
    height:"100%",
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  cuadro: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding:100,
    shadowColor: '#000',
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  titulo: {
    marginTop: 5,
    textAlign: 'center',
    color: 'black',
    fontSize: 35,
    color: '#8d4925',
    fontWeight: 'bold'
  },
  link: {
    marginTop: 10,
    textAlign: 'center',
    color: '#8d4925',
    textDecorationLine: 'underline',
  },
  text:{
    color:'white',
    textAlign: 'center',

    
  },
  input: {
    height: 40,
    marginTop: 20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  crearCuentaLink: {
    marginTop: 10,
    textAlign: 'center',
    color: '#8d4925',
    textDecorationLine: 'underline',
  },
  button: {
    width: 250,
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems:'center',
    justifyContent:'center',
    marginTop: 20,
    backgroundColor: '#8d4925',
    
  },
  
 
});

export default CrearScreen;
