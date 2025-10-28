import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import { UserProvider } from "./UserContext";
import { PerfilScreen } from "./screens/PerfilScreen";
import { HomeStack } from "./HomeStack";
import { stylesApp } from "./styles/styles";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Image source={require("./assets/home.png")} style={stylesApp.tabIcon} />
              ),
            }}
          />
          
          <Tab.Screen
            name="Perfil"
            component={PerfilScreen}
            options={{
              tabBarIcon: () => (
                <Image source={require("./assets/user.png")} style={stylesApp.tabIcon} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}