import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Usuario } from "./entities/Usuario";
import { Veiculo } from "./entities/Veiculo";

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
    const tamplateUser = new Usuario(
      "Fulano Beltrano de Sicrano",
      "fulanobeltranodesicrano@email.com",
      "111.111.111-11",
      require("./assets/default_profile.png")
    );
    setUser(tamplateUser);

    const carro = new Veiculo("Tesla", "Model 3", 2023, "ABC-1234", "Preto", "Carro", 75, 40);
    const moto = new Veiculo("Voltz", "EV1", 2022, "XYZ-5678", "Vermelha", "Moto", 5, 3);

    tamplateUser.adicionarVeiculo(carro);
    tamplateUser.adicionarVeiculo(moto);


  }, []);

    

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
