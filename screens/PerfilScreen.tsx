import { View, Text, Image } from "react-native";

import { useContext } from "react";
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

  return (
    <View style={stylesPerfilScreen.container}>
      <Text>Página de Perfil do Usuário</Text>
 
      <Image source={user.fotoPerfil} style={stylesPerfilScreen.fotoPerfil} />
      <Text>Nome: {user.nome}</Text>
      <Text>CPF: {user.cpf}</Text>
      <Text>Email: {user.email}</Text>

    </View>
  );
}