import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export function HomeScreen({ navigation }: any) {
  const { user } = useContext(UserContext);

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f2f2f2" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
        Veículos cadastrados
      </Text>

      {/* LISTA DE CAIXAS */}
      <FlatList
        data={user?.veiculos || []}
        keyExtractor={(item) => item.placa}
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
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.marca} {item.modelo}
            </Text>
            <Text>Categoria: {item.categoria}</Text>
            <Text>Placa: {item.placa}</Text>
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