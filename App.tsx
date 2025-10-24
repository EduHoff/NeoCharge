import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {styles} from "./styles"

import { Usuario } from "./entities/Usuario";
import { Veiculo } from "./entities/Veiculo";
import { UserProvider } from "./UserContext";

import { HomeScreen } from "./screens/HomeScreen";
import { PerfilScreen } from "./screens/PerfilScreen";



const Tab = createBottomTabNavigator();

export default function App() {

  

  
  return (
    <UserProvider>   
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
              tabBarIcon: () => (
                <Image source={require("./assets/home.png")} style={styles.icon_tab_styles}/>),
            }}
          />

        <Tab.Screen 
          name="Perfil" component={PerfilScreen}
          options={{
            tabBarIcon: () => (
              <Image source={require("./assets/user.png")} style={styles.icon_tab_styles}/>),
          }}
        />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}