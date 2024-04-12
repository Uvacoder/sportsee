import { FC, PropsWithChildren, useContext, useState } from "react";
import UserContext from "./UserContext";
import { User } from "../types/user";
import { requests } from "../api/requests";
import { UserActivity } from "../types/userActivity";
import { UserAverageSessions } from "../types/userAverageSessions";
import { UserPerformance } from "../types/userPerformance";
import NotificationContext from "./NotificationContext";

const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [activity, setActivity] = useState<UserActivity | null>(null);
  const [averageSession, setAverageSession] =
    useState<UserAverageSessions | null>(null);
  const [performance, setPerformance] = useState<UserPerformance | null>(null);
  const [isLoading, setIsLoading] = useState<null | boolean>(null);

  const { showNotification } = useContext(NotificationContext);

  const getUser = async (userId: number) => {
    try {
      setIsLoading(true);

      const promises = [
        requests.getUser(userId),
        requests.getActivity(userId),
        requests.getAverageSession(userId),
        requests.getPerformance(userId),
      ];

      const [user, activity, averageSession, performance] = await Promise.all(
        promises
      );

      setUser(user.data);
      setActivity(activity.data);
      setAverageSession(averageSession.data);
      setPerformance(performance.data);
    } catch (error) {
      console.error("Failed to get user", error);
      showNotification(
        `Failed to get user [getUser]: ${error}`,
        "error",
        false
      );
    } finally {
      setIsLoading(false);
    }
  };

  const resetUser = () => setUser(null);
  const resetLoading = () => setIsLoading(null);

  return (
    <UserContext.Provider
      value={{
        isLoading,
        resetLoading,
        getUser,
        resetUser,
        user,
        activity,
        averageSession,
        performance,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
