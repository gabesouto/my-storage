import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  setIsAuthenticated: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
 const [isAuthenticated, setIsAuthenticated] = useState(() => {

    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });

  const login = () => {
    setIsAuthenticated(true);

    localStorage.setItem('isAuthenticated', JSON.stringify(true));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
