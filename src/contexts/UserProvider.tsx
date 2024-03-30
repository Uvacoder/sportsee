import { FC, PropsWithChildren, useState } from "react";
import UserContext from "./UserContext";
import { User } from "../types/user";
import { requests } from "../api/requests";

const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<null | boolean>(null);

  const getUser = async (userId: number) => {
    try {
      setIsLoading(true);
      const { data: user } = await requests.getUser(userId);
      setUser(user);
    } catch (error) {
      console.error("Failed to get user", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetUser = () => setUser(null);
  const resetLoading = () => setIsLoading(null);

  return (
    <UserContext.Provider
      value={{ user, getUser, isLoading, resetUser, resetLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
