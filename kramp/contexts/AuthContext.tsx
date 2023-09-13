// contexts/AuthContext.tsx

import { createContext, ReactNode, useContext } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  // ... any other auth-related states or functions you might have
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // For demonstration purposes, set this as per your actual authentication status.
  const isAuthenticated = true;

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
