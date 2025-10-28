import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { stylesHomeScreen } from "../styles/styles";


export function HomeScreen({ navigation }: any) {
  const { user } = useContext(UserContext);

  return (
    <View style={stylesHomeScreen.container}>
      <Text style={stylesHomeScreen.title}>
        Veículos cadastrados
      </Text>

      {/* LISTA DE CAIXAS */}
      <FlatList
        data={user?.veiculos || []}
        keyExtractor={(item) => item.placa}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("VehicleDetails", { veiculo: item })}
            style={stylesHomeScreen.bntVehicleDetails}
          >
            <Text style={stylesHomeScreen.txtVehicleDetails}>
              {item.marca} {item.modelo}
            </Text>
            <Text>Categoria: {item.categoria}</Text>
            <Text>Placa: {item.placa}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}