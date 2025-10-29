import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Alert } from "react-native";
import { Veiculo } from "../entities/Veiculo";
import { stylesVehicleDetailsScreen } from "../styles/styles";

export function VehicleDetailsScreen({ route, navigation }: any) {
  const { veiculo }: { veiculo: Veiculo } = route.params;
  const [showModal, setShowModal] = useState(false);

  const handleRecharge = (tipo: "curta" | "media" | "completa") => {
    if (veiculo.cargaAtual >= veiculo.capacidadeTotal) {
      Alert.alert("Bateria completa", "O veículo já está totalmente carregado.");
      return;
    }

    const energia = veiculo.calcularEnergiaNecessaria(tipo);
    const custo = veiculo.calcularCusto(tipo);

    Alert.alert(
      "Confirmar recarga",
      `Tipo: ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}\n` +
        `Energia: ${energia.toFixed(1)} kWh\n` +
        `Valor: R$ ${custo.toFixed(2)}`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          onPress: () => {
            const novaPorcentagem = veiculo.recarregar(tipo);
            setShowModal(false);
            Alert.alert("Sucesso", `Recarga concluída!\nBateria: ${novaPorcentagem.toFixed(1)}%`);
          },
        },
      ]
    );
  };

  return (
    <View style={stylesVehicleDetailsScreen.container}>
      <View style={stylesVehicleDetailsScreen.card}>
        <Text style={stylesVehicleDetailsScreen.title}>
          {veiculo.marca} {veiculo.modelo}
        </Text>

        <Text style={stylesVehicleDetailsScreen.info}>Placa: {veiculo.placa}</Text>
        <Text style={stylesVehicleDetailsScreen.info}>Cor: {veiculo.cor}</Text>
        <Text style={stylesVehicleDetailsScreen.info}>
          Categoria: {veiculo.categoria}
        </Text>
        <Text style={stylesVehicleDetailsScreen.info}>
          Carga Atual: {veiculo.cargaAtual} / {veiculo.capacidadeTotal} kWh
        </Text>
        <Text style={stylesVehicleDetailsScreen.battery}>
          Bateria: {veiculo.porcentagemCarga.toFixed(1)}%
        </Text>

        <TouchableOpacity
          style={stylesVehicleDetailsScreen.button}
          onPress={() => setShowModal(true)}
        >
          <Text style={stylesVehicleDetailsScreen.buttonText}>Recarregar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            stylesVehicleDetailsScreen.button,
            { backgroundColor: "#6c757d", marginTop: 12 },
          ]}
          onPress={() => navigation.goBack()}
        >
          <Text style={stylesVehicleDetailsScreen.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de recarga */}
      <Modal transparent visible={showModal} animationType="slide">
        <View style={stylesVehicleDetailsScreen.modalContainer}>
          <View style={stylesVehicleDetailsScreen.modalBox}>
            <Text style={stylesVehicleDetailsScreen.modalTitle}>
              Escolha o tipo de carga
            </Text>

            {["curta", "media", "completa"].map((tipo) => (
              <TouchableOpacity
                key={tipo}
                style={stylesVehicleDetailsScreen.optionButton}
                onPress={() => handleRecharge(tipo as "curta" | "media" | "completa")}
              >
                <Text style={stylesVehicleDetailsScreen.optionText}>
                  Carga {tipo.charAt(0).toUpperCase() + tipo.slice(1)} (
                  {tipo === "curta" ? "25" : tipo === "media" ? "50" : "100"}%)
                </Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={[stylesVehicleDetailsScreen.optionButton, { backgroundColor: "#dc3545" }]}
              onPress={() => setShowModal(false)}
            >
              <Text style={stylesVehicleDetailsScreen.optionText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}