import { FC, PropsWithChildren, useContext, useState } from "react";
import UserContext from "./UserContext";
import { User } from "../types/user";
import { requests } from "../api/requests";
import { UserActivity } from "../types/userActivity";
import { UserAverageSessions } from "../types/userAverageSessions";
import { UserPerformance } from "../types/userPerformance";
import NotificationContext from "./NotificationContext";
import mockedUsers from "../mocks/users.mock.json";
import mockedUsersActivity from "../mocks/userActivity.mock.json";
import mockedUsersAverageSession from "../mocks/userAverageSession.mock.json";
import mockedUsersPerformance from "../mocks/userPerformance.mock.json";

const getRandomUserId = () => {
  const mockedUsersIds = mockedUsers.map((user) => user.id);
  return mockedUsersIds[Math.floor(Math.random() * mockedUsersIds.length)];
};

const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [activity, setActivity] = useState<UserActivity | null>(null);
  const [averageSession, setAverageSession] =
    useState<UserAverageSessions | null>(null);
  const [performance, setPerformance] = useState<UserPerformance | null>(null);
  const [isLoading, setIsLoading] = useState<null | boolean>(null);

  const { showNotification } = useContext(NotificationContext);

  const getUser = async (userId: number, useMockedData?: boolean) => {
    try {
      setIsLoading(true);

      if (useMockedData) {
        const mockedUserId = getRandomUserId();
        const mockedUser = mockedUsers.find(
          (user) => user.id === mockedUserId
        ) as User;
        const mockedUserActivity = mockedUsersActivity.find(
          (activity) => activity.userId === mockedUserId
        ) as UserActivity;
        const mockedUserAverageSession = mockedUsersAverageSession.find(
          (averageSession) => averageSession.userId === mockedUserId
        ) as UserAverageSessions;
        const mockedUserPerformance = mockedUsersPerformance.find(
          (performance) => performance.userId === mockedUserId
        ) as UserPerformance;

        setUser(mockedUser);
        setActivity(mockedUserActivity);
        setAverageSession(mockedUserAverageSession);
        setPerformance(mockedUserPerformance);

        setIsLoading(false);
        return;
      }

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
