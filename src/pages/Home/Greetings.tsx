import { FC } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing, typography } from "../../styleVariables.stylex";

const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.lg,
  },
  title: {
    color: "black",
    fontSize: typography.xxxl,
    fontWeight: 500,
  },
  name: {
    color: colors.primary,
  },
  message: {
    fontSize: typography.md,
  },
});

type Props = {
  firstName?: string;
  isLoaded: boolean;
};

const Greetings: FC<Props> = ({ firstName, isLoaded }) => {
  return (
    <div {...stylex.props(styles.root)}>
      <h1 {...stylex.props(styles.title)}>
        Bonjour{" "}
        <span {...stylex.props(styles.name)}>{isLoaded && firstName}</span>
      </h1>
      {isLoaded && (
        <p {...stylex.props(styles.message)}>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      )}
    </div>
  );
};

export default Greetings;
