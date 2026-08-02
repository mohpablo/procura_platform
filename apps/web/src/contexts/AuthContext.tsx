import { createContext } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  authToken: null,
  setAuthToken: () => {},
});

export default AuthContext;
