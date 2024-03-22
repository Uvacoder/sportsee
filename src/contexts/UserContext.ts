import { createContext } from "react";
import { User } from "../types/user";

interface UserContextType {
  user: User | null;
  getUser: (userId: number) => void;
  isLoading: null | boolean;
  resetLoading: () => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  getUser: () => {},
  isLoading: null,
  resetLoading: () => {},
});

export default UserContext;
