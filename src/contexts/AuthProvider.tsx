import { FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import UserContext from "./UserContext";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userId, setUserId] = useState<number | null>(null);

  const { setItem, getItem } = useLocalStorage();

  const { resetLoading } = useContext(UserContext);

  const login = (userId: number) => {
    setItem("userId", userId);
    setUserId(userId);
  };

  const logout = () => {
    setItem("userId", "");
    setUserId(null);
    resetLoading();
  };

  const storedUserId = getItem("userId");

  useEffect(() => {
    if (storedUserId) {
      setUserId(Number(storedUserId));
    }
  }, [getItem, storedUserId]);

  return (
    <AuthContext.Provider value={{ userId: Number(userId), login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
