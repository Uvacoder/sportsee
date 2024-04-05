import { FC, PropsWithChildren, useContext, useEffect } from "react";
import * as stylex from "@stylexjs/stylex";
import Header from "./Header";
import AppBar from "./AppBar";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const MEDIA_MOBILE = "@media (max-width: 1426px)" as const;

const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  main: {
    padding: {
      default: "46px 104px",
      [MEDIA_MOBILE]: "46px 32px",
    },
    backgroundColor: "white",
    color: "black",
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "42px",
    maxHeight: "calc(100vh - 90px)",
    overflowY: "auto",
  },
  logOutButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: "8px 16px",
    fontSize: "16px",
    fontWeight: 500,
    backgroundColor: "#B30000",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
    margin: "8px",
    width: "90px",
    textAlign: "center",
  },
});

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  const { userId, logout } = useContext(AuthContext);

  const onLogOut = () => {
    logout();
    navigate(`/auth`);
  };

  useEffect(() => {
    if (!userId) {
      navigate(`/auth`);
    }
  }, [userId, navigate]);

  if (!userId) return null;

  return (
    <div {...stylex.props(styles.root)}>
      <Header />
      <div {...stylex.props(styles.contentContainer)}>
        <AppBar />
        <main {...stylex.props(styles.main)}>{children}</main>
      </div>
      <button onClick={onLogOut} {...stylex.props(styles.logOutButton)}>
        Log out
      </button>
    </div>
  );
};

export default Layout;
