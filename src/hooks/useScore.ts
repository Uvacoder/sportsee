import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { colors } from "../styleVariables.stylex";

export const useScore = () => {
  const { user } = useContext(UserContext);

  const score = user?.todayScore && user?.todayScore * 100; // Backend need a fix, sometimes the property is named todayScore and sometimes it's named score

  const data = [
    {
      score: score || 0,
      fill: colors.primary,
    },
  ];

  return {
    data,
    score,
  };
};
