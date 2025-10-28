import React, { useState } from "react";
import { View,Text, TouchableOpacity, Modal, StyleSheet, Alert } from "react-native";
import { Veiculo } from "../entities/Veiculo";

export function VehicleDetailsScreen({ route, navigation }: any) {
  const { veiculo }: { veiculo: Veiculo } = route.params;
  const [showModal, setShowModal] = useState(false);

  const handleRecharge = (tipo: "curta" | "media" | "completa") => {
    const taxa = 2.5; // R$ por kWh
    const porcentagens = { curta: 25, media: 50, completa: 100 };
    const porcentagemDesejada = porcentagens[tipo];

    const cargaDesejada = (porcentagemDesejada / 100) * veiculo.capacidadeTotal;
    const cargaAtual = veiculo.cargaAtual;

    if (cargaAtual >= veiculo.capacidadeTotal) {
      Alert.alert("Bateria completa", "O veículo já está totalmente carregado.");
      return;
    }

    // quanto ainda cabe
    const faltando = veiculo.capacidadeTotal - cargaAtual;
    const cargaNecessaria = Math.min(faltando, cargaDesejada);
    const custo = cargaNecessaria * taxa;

    Alert.alert(
      "Confirmar recarga",
      `Tipo: ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}\n` +
        `Energia: ${cargaNecessaria.toFixed(1)} kWh\n` +
        `Valor: R$ ${custo.toFixed(2)}`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => {
            veiculo.cargaAtual = Math.min(
              veiculo.cargaAtual + cargaNecessaria,
              veiculo.capacidadeTotal
            );
            setShowModal(false);
            Alert.alert(
              "Sucesso",
              `Recarga concluída!\nBateria: ${veiculo.porcentagemCarga.toFixed(
                1
              )}%`
            );
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {veiculo.marca} {veiculo.modelo}
      </Text>

      <Text style={styles.info}>Placa: {veiculo.placa}</Text>
      <Text style={styles.info}>Cor: {veiculo.cor}</Text>
      <Text style={styles.info}>Categoria: {veiculo.categoria}</Text>
      <Text style={styles.info}>
        Carga Atual: {veiculo.cargaAtual} / {veiculo.capacidadeTotal} kWh
      </Text>
      <Text style={styles.battery}>
        Bateria: {veiculo.porcentagemCarga.toFixed(1)}%
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
        <Text style={styles.buttonText}>Recarregar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#6c757d", marginTop: 10 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      {/* Modal de opções de recarga */}
      <Modal transparent visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Escolha o tipo de carga</Text>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleRecharge("curta")}
            >
              <Text style={styles.optionText}>Carga Curta (25%)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleRecharge("media")}
            >
              <Text style={styles.optionText}>Carga Média (50%)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleRecharge("completa")}
            >
              <Text style={styles.optionText}>Carga Completa (100%)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.optionButton, { backgroundColor: "#dc3545" }]}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.optionText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    marginBottom: 4,
  },
  battery: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "80%",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  optionText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
