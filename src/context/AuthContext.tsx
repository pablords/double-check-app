import React, { createContext, ReactNode } from "react";
import { USER } from "../services/auth";

const user = JSON.parse(localStorage.getItem(USER) as string);

const AuthContext = createContext({ user: user });

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => (
  <AuthContext.Provider value={{ user: user }}>{children}</AuthContext.Provider>
);

export default AuthContext;
