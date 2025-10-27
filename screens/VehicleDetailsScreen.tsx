import { View, Text, Button } from "react-native";

export function VehicleDetailsScreen({ route, navigation }: any) {
  const { veiculo } = route.params; // ← recebendo veículo enviado pela Home

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#f2f2f2" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
        {veiculo.marca} {veiculo.modelo}
      </Text>

      <Text>Placa: {veiculo.placa}</Text>
      <Text>Cor: {veiculo.cor}</Text>
      <Text>Categoria: {veiculo.categoria}</Text>
      <Text>
        Carga Atual: {veiculo.cargaAtual} / {veiculo.capacidadeTotal} kWh
      </Text>
      <Text style={{ marginVertical: 10 }}>
        Bateria: {veiculo.porcentagemCarga.toFixed(1)}%
      </Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
