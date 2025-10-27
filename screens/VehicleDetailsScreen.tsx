import { View, Text } from "react-native";

export function VehicleDetailsScreen({ route }: any) {
  const { veiculo } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Detalhes do Veículo</Text>
      <Text style={{ marginTop: 10 }}>Nome: {veiculo.nome}</Text>
      <Text>Modelo: {veiculo.modelo}</Text>
      <Text>Placa: {veiculo.placa}</Text>
    </View>
  );
}