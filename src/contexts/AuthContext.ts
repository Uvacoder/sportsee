import { createContext } from "react";

interface AuthContextType {
  userId: number | null;
  login: (userId: number) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  userId: null,
  login: () => {},
  logout: () => {},
});

AuthContext.displayName = "AuthContext";

export default AuthContext;
