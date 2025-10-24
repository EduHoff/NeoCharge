import { ImageSourcePropType } from "react-native";
import { Veiculo } from "./Veiculo";

export class Usuario {
  nome: string;
  email: string;
  cpf: string;
  fotoPerfil: ImageSourcePropType;
  veiculos: Veiculo[] = [];

  constructor(nome: string, email: string, cpf: string, fotoPerfil: ImageSourcePropType) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.fotoPerfil = fotoPerfil;
  }

  // Adicionar veículo ao usuário AINDA VOU REVER ISSO AQUI
  adicionarVeiculo(veiculo: Veiculo) {
    this.veiculos.push(veiculo);
  }
}