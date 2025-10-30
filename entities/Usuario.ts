import { ImageSourcePropType } from "react-native";
import { Veiculo } from "./Veiculo";

export class Usuario {
  nome: string;
  cpf: string;
  email: string;
  fone: string;
  fotoPerfil: ImageSourcePropType;
  veiculos: Veiculo[] = [];

  constructor(nome: string, cpf: string, email: string, fone: string,  fotoPerfil: ImageSourcePropType) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.fone = fone;
    this.fotoPerfil = fotoPerfil;
  }

  adicionarVeiculo(veiculo: Veiculo) {
    this.veiculos.push(veiculo);
  }
}