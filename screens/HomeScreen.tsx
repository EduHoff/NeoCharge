import { View, Text, TouchableOpacity, FlatList } from "react-native";

const veiculos = [
  { id: "1", nome: "Carro 1", modelo: "Modelo A", placa: "ABC-1234" },
  { id: "2", nome: "Carro 2", modelo: "Modelo B", placa: "DEF-5678" },
  { id: "3", nome: "Moto 1", modelo: "Modelo C", placa: "GHI-9012" },
];

export function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f2f2f2" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
        Veículos cadastrados
      </Text>

      {/* LISTA DE CAIXAS */}
      <FlatList
        data={veiculos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("VehicleDetails", { veiculo: item })}
            style={{
              backgroundColor: "#fff",
              padding: 16,
              borderRadius: 12,
              marginBottom: 12,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.nome}</Text>
            <Text>{item.modelo}</Text>
            <Text>{item.placa}</Text>
          </TouchableOpacity>
        )}
      />

      {/* BOTÃO PARA PERFIL */}
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "#007bff",
          padding: 12,
          borderRadius: 8,
          alignSelf: "center",
        }}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Ir para Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
