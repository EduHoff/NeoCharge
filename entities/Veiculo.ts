export class Veiculo {
  marca: string;
  modelo: string;
  ano: number;
  placa: string;
  cor: string;
  categoria: string;
  capacidadeTotal: number; // kWh
  cargaAtual: number; // kWh

  constructor(
    marca: string,
    modelo: string,
    ano: number,
    placa: string,
    cor: string,
    categoria: string,
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

  // Porcentagem da bateria atual AINDA VOU REVISAR ISSO AQUI
  get porcentagemCarga(): number {
    return (this.cargaAtual / this.capacidadeTotal) * 100;
  }
}