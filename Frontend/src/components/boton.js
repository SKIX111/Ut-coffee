import React from 'react';
import { View, Image,  StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Boton = () => {

  
    const f = () => { Linking.openURL('http://facebook.com/');
    };
    
    const g = () => {Linking.openURL('https://www.bing.com/ck/a?!&&p=1c3fde1a83604029JmltdHM9MTcwNzA5MTIwMCZpZ3VpZD0xZWI4MTg0Mi0xMmY0LTY2YmEtMGJiYy0wYWU0MTNlZTY3ZjkmaW5zaWQ9NTIwNA&ptn=3&ver=2&hsh=3&fclid=1eb81842-12f4-66ba-0bbc-0ae413ee67f9&psq=google&u=a1aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5teC8&ntb=1/');
    };
    
    const apple = () => {Linking.openURL('http://apple.com/');
      
    };
    return (

<View style={styles.footer}>
          <TouchableOpacity style={styles.socialBoton}onPress={g}>
            <Image
              source={require('../../assets/icons/g+.png')}
              style={styles.socialLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBoton}onPress={f}>
            <Image
              source={require('../../assets/icons/F.png')}
              style={styles.socialLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBoton}onPress={apple}>
            <Image
              source={require('../../assets/icons/apple.png')}
              style={styles.socialLogo}
            />
          </TouchableOpacity>
        </View>
    );
    };
    
const styles = StyleSheet.create({
footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  socialBoton: {
    borderRadius: 50,
    padding: 10,
  },
  socialLogo: {
    width: 30,
    height: 30,
  },

});
export default Boton;