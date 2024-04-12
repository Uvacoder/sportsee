import { FC, PropsWithChildren } from "react";
import AuthProvider from "./AuthProvider";
import UserProvider from "./UserProvider";
import NotificationProvider from "./NotificationProvider";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NotificationProvider>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </NotificationProvider>
  );
};

export default Providers;
