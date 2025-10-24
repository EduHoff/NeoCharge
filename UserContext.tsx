import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Usuario } from "./entities/Usuario";

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
    const usuarioInicial = new Usuario(
      "Fulano Beltrano de Sicrano",
      "fulanobeltranodesicrano@email.com",
      "111.111.111-11",
      require("./assets/default_profile.png")
    );
    setUser(usuarioInicial);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
