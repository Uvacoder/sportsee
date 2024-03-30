import { FC } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing, typography } from "../../../styleVariables.stylex";
import DailyActivityGraph from "./DailyActivityGraph";

const styles = stylex.create({
  root: {
    backgroundColor: colors.lightGrey,
    borderRadius: "4px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: `${spacing.lg} 0 0 ${spacing.lg}`,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: typography.md,
    fontWeight: 500,
  },
  legendsContainer: {
    display: "flex",
    gap: spacing.xl,
  },
});

const DailyActivity: FC = () => {
  return (
    <section {...stylex.props(styles.root)}>
      <DailyActivityGraph />
    </section>
  );
};

export default DailyActivity;
