import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Usuario } from "./entities/Usuario";
import { Veiculo } from "./entities/Veiculo";
import { CategoriaVeiculo } from "./entities/CategoriasVeiculo";

type UserContextType = {
  user: Usuario | null;
  setUser: (user: Usuario) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

type ProviderProps = {
  children: ReactNode;
};

export function UserProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<Usuario | null>(null);

  useEffect(() => {
    const templateUser = new Usuario(
      "Fulano Beltrano de Sicrano",
      "fulanobeltranodesicrano@email.com",
      "111.111.111-11",
      require("./assets/default_profile.png")
      
    );
    setUser(templateUser);

    const carro = new Veiculo("Tesla", "Model 3", 2023, "ABC-1234", "Preto", CategoriaVeiculo.Carro, 75, 40);
    const moto = new Veiculo("Voltz", "EV1", 2022, "XYZ-5678", "Vermelha", CategoriaVeiculo.Moto, 5, 3);
    const caminhao = new Veiculo("Volvo", "FH Elétrico", 2024, "TRK-9090", "Branco", CategoriaVeiculo.Caminhao, 300, 120);
    const bicicleta = new Veiculo("Caloi", "E-Vibe Easy Rider", 2021, "BIC-0001", "Azul", CategoriaVeiculo.Bicicleta, 0.5, 0.2);
    const patinete = new Veiculo("Xiaomi", "Mi Electric Scooter", 2022, "PAT-1010", "Cinza", CategoriaVeiculo.Patinete, 0.4, 0.1);

    templateUser.adicionarVeiculo(carro);
    templateUser.adicionarVeiculo(moto);
    templateUser.adicionarVeiculo(caminhao);
    templateUser.adicionarVeiculo(bicicleta);
    templateUser.adicionarVeiculo(patinete);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
