import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const [authToken, setAuthToken] = useState(() => {
    return localStorage.getItem("access_token");
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!authToken;
  });

  useEffect(() => {
    if (authToken) {
      localStorage.setItem("access_token", authToken);
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("access_token");
      setIsAuthenticated(false);
    }
  }, [authToken]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, setAuthToken, authToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}
