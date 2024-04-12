import { FC, PropsWithChildren, useState } from "react";
import NotificationContext, {
  NotificationType,
  Notification,
} from "./NotificationContext";

const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notification, setNotification] = useState<Notification>({
    message: "",
    type: "info",
  });
  const [autoClose, setAutoClose] = useState<boolean>(true);

  const [show, setShow] = useState<boolean>(false);

  const showNotification = (
    message: string,
    type: NotificationType,
    autoClose: boolean
  ) => {
    setNotification({ message, type });
    setAutoClose(autoClose);

    setShow(true);

    if (autoClose) {
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        ...notification,
        showNotification,
        isDisplayed: show,
        autoClose,
        onClose: () => setShow(false),
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
