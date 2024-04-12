import { createContext } from "react";

export type Notification = {
  message: string;
  type: NotificationType;
};

export type NotificationType = "success" | "error" | "info" | "warning";

export interface NotificationContextType {
  message: string | null;
  showNotification: (
    message: string,
    type: NotificationType,
    autoClose: boolean
  ) => void;
  type: NotificationType;
  autoClose: boolean;
  isDisplayed: boolean;
  onClose: () => void;
}

const NotificationContext = createContext<NotificationContextType>({
  message: null,
  showNotification: () => {},
  type: "info",
  isDisplayed: false,
  autoClose: true,
  onClose: () => {},
});

NotificationContext.displayName = "NotificationContext";

export default NotificationContext;
