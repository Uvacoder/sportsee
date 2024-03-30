import { createContext } from "react";
import { User } from "../types/user";

interface UserContextType {
  user: User | null;
  getUser: (userId: number) => void;
  resetUser: () => void;
  isLoading: null | boolean;
  resetLoading: () => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  getUser: () => {},
  resetUser: () => {},
  isLoading: null,
  resetLoading: () => {},
});

export default UserContext;
