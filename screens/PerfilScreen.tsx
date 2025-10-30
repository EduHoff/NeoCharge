import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
  Alert,
  BackHandler,
} from "react-native";
import { UserContext } from "../UserContext";
import { Veiculo } from "../entities/Veiculo";
import { CategoriaVeiculo } from "../entities/CategoriasVeiculo";
import { stylesPerfilScreen } from "../styles/styles";

export function PerfilScreen() {
  const { user, setUser } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);

  const [novoVeiculo, setNovoVeiculo] = useState({
    marca: "",
    modelo: "",
    ano: "",
    placa: "",
    cor: "",
    categoria: CategoriaVeiculo.Carro,
    capacidadeTotal: "",
    cargaAtual: "",
  });

  const handleExit = () => {
    BackHandler.exitApp();
  };

  const handleAddVeiculo = () => {
    if (!user) return;

    // validação básica
    if (
      !novoVeiculo.marca ||
      !novoVeiculo.modelo ||
      !novoVeiculo.placa ||
      !novoVeiculo.capacidadeTotal
    ) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    const veiculo = new Veiculo(
      novoVeiculo.marca,
      novoVeiculo.modelo,
      parseInt(novoVeiculo.ano) || 2025,
      novoVeiculo.placa,
      novoVeiculo.cor,
      novoVeiculo.categoria,
      parseFloat(novoVeiculo.capacidadeTotal),
      parseFloat(novoVeiculo.cargaAtual) || 0
    );

    user.adicionarVeiculo(veiculo);
    setUser(user);
    setModalVisible(false);
    Alert.alert("Sucesso", "Veículo adicionado com sucesso!");
  };

  if (!user) {
    return (
      <View style={stylesPerfilScreen.container}>
        <Text>Carregando usuário...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={stylesPerfilScreen.container}>
      <Text style={stylesPerfilScreen.title}>Perfil do Usuário</Text>

      <Image source={user.fotoPerfil} style={stylesPerfilScreen.fotoPerfil} />

      <View style={stylesPerfilScreen.infoCard}>
        <Text style={stylesPerfilScreen.label}>Nome</Text>
        <Text style={stylesPerfilScreen.info}>{user.nome}</Text>

        <Text style={stylesPerfilScreen.label}>CPF</Text>
        <Text style={stylesPerfilScreen.info}>{user.cpf}</Text>

        <Text style={stylesPerfilScreen.label}>Email</Text>
        <Text style={stylesPerfilScreen.info}>{user.email}</Text>

        <Text style={stylesPerfilScreen.label}>Telefone</Text>
        <Text style={stylesPerfilScreen.info}>{user.fone}</Text>
      </View>

      <TouchableOpacity
        style={[
          stylesPerfilScreen.exitButton,
          { backgroundColor: "#3498db", marginBottom: 16 },
        ]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={stylesPerfilScreen.exitText}>+ Registrar Novo Veículo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={stylesPerfilScreen.exitButton} onPress={handleExit}>
        <Text style={stylesPerfilScreen.exitText}>Sair do App</Text>
      </TouchableOpacity>

      {/* Modal de registro */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={stylesPerfilScreen.modalContainer}>
          <View style={stylesPerfilScreen.modalBox}>
            <Text style={stylesPerfilScreen.modalTitle}>Novo Veículo</Text>

              <ScrollView>
                {[
                  { campo: "marca", rotulo: "Marca" },
                  { campo: "modelo", rotulo: "Modelo" },
                  { campo: "ano", rotulo: "Ano" },
                  { campo: "placa", rotulo: "Placa" },
                  { campo: "cor", rotulo: "Cor" },
                ].map(({ campo, rotulo }) => (
                  <TextInput
                    key={campo}
                    placeholder={rotulo}
                    style={stylesPerfilScreen.input}
                    keyboardType={campo === "ano" ? "numeric" : "default"}
                    value={novoVeiculo[campo as keyof typeof novoVeiculo].toString()}
                    onChangeText={(txt) =>
                      setNovoVeiculo((prev) => ({ ...prev, [campo]: txt }))
                    }
                  />
                ))}

                {/* 🔽 Seletor de categoria */}
                <Text style={stylesPerfilScreen.label}>Categoria</Text>
                <View style={stylesPerfilScreen.categoriaBox}>
                  {Object.values(CategoriaVeiculo).map((categoria) => (
                    <TouchableOpacity
                      key={categoria}
                      style={[
                        stylesPerfilScreen.categoriaBotao,
                        novoVeiculo.categoria === categoria && stylesPerfilScreen.categoriaSelecionada,
                      ]}
                      onPress={() =>
                        setNovoVeiculo((prev) => ({ ...prev, categoria }))
                      }
                    >
                      <Text
                        style={[
                          stylesPerfilScreen.categoriaTexto,
                          novoVeiculo.categoria === categoria && stylesPerfilScreen.categoriaTextoSelecionado,
                        ]}
                      >
                        {categoria}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* 🔽 Campos de carga com rótulo e unidade */}
                <TextInput
                  placeholder="Capacidade total (kWh)"
                  style={stylesPerfilScreen.input}
                  keyboardType="numeric"
                  value={novoVeiculo.capacidadeTotal.toString()}
                  onChangeText={(txt) =>
                    setNovoVeiculo((prev) => ({ ...prev, capacidadeTotal: txt }))
                  }
                />

                <TextInput
                  placeholder="Carga atual (kWh)"
                  style={stylesPerfilScreen.input}
                  keyboardType="numeric"
                  value={novoVeiculo.cargaAtual.toString()}
                  onChangeText={(txt) =>
                    setNovoVeiculo((prev) => ({ ...prev, cargaAtual: txt }))
                  }
                />

                <TouchableOpacity
                  style={[stylesPerfilScreen.exitButton, { backgroundColor: "#27ae60" }]}
                  onPress={handleAddVeiculo}
                >
                  <Text style={stylesPerfilScreen.exitText}>Salvar Veículo</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    stylesPerfilScreen.exitButton,
                    { backgroundColor: "#aaa", marginTop: 10 },
                  ]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={stylesPerfilScreen.exitText}>Cancelar</Text>
                </TouchableOpacity>
              </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}