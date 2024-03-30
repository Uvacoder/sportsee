import { FC, useContext } from "react";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../styleVariables.stylex";
import { StatCard, StatCardProps } from "../../components/StatCard";
import UserContext from "../../contexts/UserContext";
import calorieIcon from "../../assets/calories-icon.svg";
import proteinIcon from "../../assets/protein-icon.svg";
import fatIcon from "../../assets/fat-icon.svg";
import carbsIcon from "../../assets/carbs-icon.svg";
import { KeyData } from "../../types/user";
import DailyActivity from "./DailyActivity";
import Score from "./Score";

const MEDIA_MOBILE = "@media (max-width: 1426px)" as const;

const styles = stylex.create({
  root: {
    display: "flex",
    flex: 1,
    gap: spacing.lg,
    flexWrap: "wrap",
  },
  leftSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: spacing.lg,
  },
  leftBottomSection: {
    display: "flex",
    gap: spacing.lg,
    justifyContent: "space-between",
  },
  rightSection: {
    width: {
      default: "258px",
      [MEDIA_MOBILE]: "100%",
    },
    display: "flex",
    flexDirection: {
      default: "column",
      [MEDIA_MOBILE]: "row",
    },
    justifyContent: "space-between",
  },
  graphCard: {
    width: "258px",
    height: "263px",
    backgroundColor: "yellow",
  },
});

const Content: FC = () => {
  const { user } = useContext(UserContext);

  const getStatCardProps: (
    stat: [keyof KeyData | string, number]
  ) => StatCardProps = ([key, value]) => {
    switch (key) {
      case "calorieCount":
        return {
          icon: calorieIcon,
          data: value,
          label: "Calories",
          unit: "kCal",
        };

      case "proteinCount":
        return {
          icon: proteinIcon,
          data: value,
          label: "Protéines",
          unit: "g",
        };

      case "carbohydrateCount":
        return { icon: carbsIcon, data: value, label: "Glucides", unit: "g" };

      case "lipidCount":
        return { icon: fatIcon, data: value, label: "Lipides", unit: "g" };
      default:
        return { icon: "icon", data: value, label: "label", unit: "g" };
    }
  };

  return (
    <div {...stylex.props(styles.root)}>
      <section {...stylex.props(styles.leftSection)}>
        <DailyActivity />
        <section {...stylex.props(styles.leftBottomSection)}>
          <div {...stylex.props(styles.graphCard)}>graph card</div>
          <div {...stylex.props(styles.graphCard)}>graph card</div>
          <Score />
        </section>
      </section>
      <section {...stylex.props(styles.rightSection)}>
        {user?.keyData &&
          Object.entries(user.keyData).map((stat, index) => (
            <StatCard key={index} {...getStatCardProps(stat)} />
          ))}
      </section>
    </div>
  );
};

export default Content;
