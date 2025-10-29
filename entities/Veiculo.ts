import { CategoriaVeiculo } from "./CategoriasVeiculo";

export class Veiculo {
  marca: string;
  modelo: string;
  ano: number;
  placa: string;
  cor: string;
  categoria: CategoriaVeiculo;
  capacidadeTotal: number; // kWh
  cargaAtual: number; // kWh

  constructor(
    marca: string,
    modelo: string,
    ano: number,
    placa: string,
    cor: string,
    categoria: CategoriaVeiculo,
    capacidadeTotal: number,
    cargaAtual: number
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.placa = placa;
    this.cor = cor;
    this.categoria = categoria;
    this.capacidadeTotal = capacidadeTotal;
    this.cargaAtual = cargaAtual;
  }

  get porcentagemCarga(): number {
    return (this.cargaAtual / this.capacidadeTotal) * 100;
  }

  calcularCusto(tipo: "curta" | "media" | "completa", taxaPorKwh: number = 2.5): number {
    const porcentagens = { curta: 25, media: 50, completa: 100 };
    const porcentagemDesejada = porcentagens[tipo];
    const cargaDesejada = (porcentagemDesejada / 100) * this.capacidadeTotal;

    const faltando = this.capacidadeTotal - this.cargaAtual;
    const cargaNecessaria = Math.min(faltando, cargaDesejada);

    return cargaNecessaria * taxaPorKwh;
  }

  recarregar(tipo: "curta" | "media" | "completa") {
    const porcentagens = { curta: 25, media: 50, completa: 100 };
    const porcentagemDesejada = porcentagens[tipo];
    const cargaDesejada = (porcentagemDesejada / 100) * this.capacidadeTotal;

    const faltando = this.capacidadeTotal - this.cargaAtual;
    const cargaNecessaria = Math.min(faltando, cargaDesejada);

    this.cargaAtual = Math.min(this.cargaAtual + cargaNecessaria, this.capacidadeTotal);

    return this.porcentagemCarga;
  }

  calcularEnergiaNecessaria(tipo: "curta" | "media" | "completa"): number {
    const porcentagens = { curta: 25, media: 50, completa: 100 };
    const porcentagemDesejada = porcentagens[tipo];
    const cargaDesejada = (porcentagemDesejada / 100) * this.capacidadeTotal;

    const faltando = this.capacidadeTotal - this.cargaAtual;
    return Math.min(faltando, cargaDesejada);
  }
}