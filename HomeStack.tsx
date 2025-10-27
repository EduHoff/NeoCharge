// HomeStack.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { VehicleDetailsScreen } from "./screens/VehicleDetailsScreen";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Início" }} />
      <Stack.Screen name="VehicleDetails" component={VehicleDetailsScreen} options={{ title: "Detalhes do Veículo" }} />
    </Stack.Navigator>
  );
}