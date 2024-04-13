import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, ServerContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiciosScreen from './src/pages/Vista';
import LoginScreen from './src/pages/loggin';
import CrearScreen from './src/pages/crear_cuenta';
import ConfiScreen from './src/pages/confiperfil';
import Servicios1Screen from './src/pages/vistacomida';
import ServiciosScreen2 from './src/pages/vista2';

const Tab = createBottomTabNavigator(); 
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="23" component={Servicios1Screen} /> 
     <Tab.Screen name="22" component={ConfiScreen} />
     
    </Tab.Navigator>
    
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="loggin"
          component={LoginScreen}
          options={{ title: 'Welcome' }}
        />
      <Stack.Screen name="vista" component={Home} />
      
      <Stack.Screen name="vista1" component={ServiciosScreen} />
      <Stack.Screen name="vista2" component={ServiciosScreen2} />
        <Stack.Screen name="crear" component={CrearScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



