import { createContext } from "react";
import { User } from "../types/user";
import { UserActivity } from "../types/userActivity";
import { UserAverageSessions } from "../types/userAverageSessions";
import { UserPerformance } from "../types/userPerformance";

interface UserContextType {
  isLoading: null | boolean;
  resetLoading: () => void;
  getUser: (userId: number) => void;
  resetUser: () => void;
  user: User | null;
  activity: UserActivity | null;
  averageSession: UserAverageSessions | null;
  performance: UserPerformance | null;
}

const UserContext = createContext<UserContextType>({
  isLoading: null,
  resetLoading: () => {},
  getUser: () => {},
  resetUser: () => {},
  user: null,
  activity: null,
  averageSession: null,
  performance: null,
});

UserContext.displayName = "UserContext";

export default UserContext;
