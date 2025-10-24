import { View, Text, Button, Image } from "react-native";

import { useContext } from "react";
import { UserContext } from "../UserContext";

export function PerfilScreen({ navigation }: any) {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando usuário...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Página de Perfil do Usuário</Text>

     
      <Image source={user.fotoPerfil} style={{ width: 100, height: 100, borderRadius: 50 }} />

      <Text>Nome: {user.nome}</Text>
      <Text>Email: {user.email}</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}