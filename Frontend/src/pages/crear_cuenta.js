import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Alert, Button, TouchableOpacity, Linking } from 'react-native';
import Boton from '../components/boton';

const CrearScreen = ({navigation}) => {
 
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
        />
         
        <TextInput
          style={styles.input}
          placeholder="correo o numero"
    
        />
         <TextInput
          style={styles.input}
          placeholder="direccion"
      
        />
        <TextInput
          style={styles.input}
          placeholder="Crea una contraseña"
          secureTextEntry={true}
        />
         <TextInput
          style={styles.input}
          placeholder="Repite la contraseña"
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={() => navigation.navigate('login') }  style={styles.button}>
  <Text style={[styles.text, {textAlign: 'center'}]}>Crear cuenta</Text>
      </TouchableOpacity>
  
     

         <TouchableOpacity onPress={() => navigation.navigate('login')}  >
          <Text style={styles.link}>Ya tengo una cuenta</Text>
        </TouchableOpacity>

        <Boton/>

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
