import { FC } from "react";
import * as stylex from "@stylexjs/stylex";
import { spacing, colors, typography } from "../styleVariables.stylex";

const styles = stylex.create({
  root: {
    width: "100%",
    height: "124px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: spacing.lg,
    paddingLeft: spacing.xl,
    backgroundColor: colors.lightGrey,
    borderRadius: "4px",
  },
  data: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
  },
  dataValue: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  dataLabel: {
    fontSize: typography.md,
    fontWeight: 500,
    color: colors.grey,
  },
});

export type StatCardProps = {
  icon: string;
  label: string;
  data: number;
  unit: "kCal" | "g";
};

export const StatCard: FC<StatCardProps> = ({ icon, data, label, unit }) => {
  return (
    <div {...stylex.props(styles.root)}>
      <div>
        <img src={icon} alt={`${label} icon`} />
      </div>
      <div {...stylex.props(styles.data)}>
        <h2 {...stylex.props(styles.dataValue)}>{data + unit}</h2>
        <p {...stylex.props(styles.dataLabel)}>{label}</p>
      </div>
    </div>
  );
};
