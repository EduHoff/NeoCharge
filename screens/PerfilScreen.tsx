import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, BackHandler } from "react-native";
import { UserContext } from "../UserContext";
import { stylesPerfilScreen } from "../styles/styles";

export function PerfilScreen() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <View style={stylesPerfilScreen.container}>
        <Text>Carregando usuário...</Text>
      </View>
    );
  }

  const handleExit = () => {
    BackHandler.exitApp();
  };

  return (
    <View style={stylesPerfilScreen.container}>
      <Text style={stylesPerfilScreen.title}>Perfil do Usuário</Text>

      <Image source={user.fotoPerfil} style={stylesPerfilScreen.fotoPerfil} />

      <View style={stylesPerfilScreen.infoCard}>
        <Text style={stylesPerfilScreen.label}>Nome</Text>
        <Text style={stylesPerfilScreen.info}>{user.nome}</Text>

        <Text style={stylesPerfilScreen.label}>Email</Text>
        <Text style={stylesPerfilScreen.info}>{user.email}</Text>

        <Text style={stylesPerfilScreen.label}>CPF</Text>
        <Text style={stylesPerfilScreen.info}>{user.cpf}</Text>
      </View>

      <TouchableOpacity style={stylesPerfilScreen.exitButton} onPress={handleExit}>
        <Text style={stylesPerfilScreen.exitText}>Sair do App</Text>
      </TouchableOpacity>
    </View>
  );
}