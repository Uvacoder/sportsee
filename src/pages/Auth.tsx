import { FC, useCallback, useContext, useEffect } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../styleVariables.stylex";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const styles = stylex.create({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  authContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    backgroundColor: colors.lightBlack,
    padding: "32px",
    borderRadius: "8px",
  },
  title: {
    fontSize: "32px",
    color: "white",
    textAlign: "center",
  },
  button: {
    padding: "8px 16px",
    fontSize: "16px",
    fontWeight: 500,
    backgroundColor: colors.primary,
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
    margin: "8px",
    width: "80px",
    textAlign: "center",
  },
});

const Auth: FC = () => {
  const navigate = useNavigate();

  const { userId, login } = useContext(AuthContext);

  const onButtonClick = useCallback(
    (userId: number) => {
      navigate(`/home`);
      login(userId);
    },
    [navigate, login]
  );

  useEffect(() => {
    if (userId) {
      navigate(`/home`);
    }
  }, [userId, navigate]);

  if (userId) return null;

  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.authContainer)}>
        <h1 {...stylex.props(styles.title)}>Choose user</h1>
        <div>
          <button
            {...stylex.props(styles.button)}
            onClick={() => onButtonClick(12)}
          >
            Karl
          </button>
          <button
            {...stylex.props(styles.button)}
            onClick={() => onButtonClick(18)}
          >
            Cecilia
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
