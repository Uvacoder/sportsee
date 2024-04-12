import { FC, useContext } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../styleVariables.stylex";
import closeIcon from "../assets/close-icon.svg";
import NotificationContext from "../contexts/NotificationContext";

const appearFromBottom = stylex.keyframes({
  from: {
    transform: "translateY(100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

const styles = stylex.create({
  root: {
    position: "fixed",
    bottom: "0.2rem",
    left: "130px",
    padding: "1rem",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "300px",
    boxShadow: "9px 7px 15px 12px rgba(0, 0, 0, 0.1)",
    fontWeight: 500,
    gap: "1rem",
    animationName: appearFromBottom,
    animationDuration: "0.3s",
    animationTimingFunction: "ease-out",
  },
  success: {
    backgroundColor: colors.green,
    color: "white",
  },
  error: {
    backgroundColor: colors.primary,
    color: "white",
  },
  info: {
    backgroundColor: colors.blue,
    color: "white",
  },
  warning: {
    backgroundColor: colors.yellow,
    color: "white",
  },
  message: {
    fontSize: "1rem",
  },
  button: {
    cursor: "pointer",
    padding: "0.3rem",
    backgroundColor: "transparent",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ":hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    ":hover img": {
      opacity: 0.5,
    },
  },
  closeIcon: {
    width: "18px",
    height: "18px",
  },
});

const Notification: FC = () => {
  const { isDisplayed, message, type, autoClose, onClose } =
    useContext(NotificationContext);

  const getTypeKey = (type: string) => {
    switch (type) {
      case "success":
        return "success";
      case "error":
        return "error";
      case "info":
        return "info";
      case "warning":
        return "warning";
      default:
        return "info";
    }
  };

  if (!isDisplayed) {
    return null;
  }

  return (
    <div {...stylex.props(styles.root, styles[getTypeKey(type)])}>
      <p {...stylex.props(styles.message)}>{message}</p>
      {!autoClose && (
        <button onClick={onClose} {...stylex.props(styles.button)}>
          <img src={closeIcon} {...stylex.props(styles.closeIcon)} />
        </button>
      )}
    </div>
  );
};

export default Notification;
