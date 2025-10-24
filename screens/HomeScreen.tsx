import { View, Text, Button } from "react-native";

export function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>NeoCharge - Página Inicial</Text>
      <Button
        title="Ir para Perfil"
        onPress={() => navigation.navigate("Perfil")}
      />
    </View>
  );
}