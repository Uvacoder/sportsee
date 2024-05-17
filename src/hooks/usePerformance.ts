import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export const usePerformance = () => {
  const { performance } = useContext(UserContext);

  const getTranslatedKind = (kind: string) => {
    switch (kind) {
      case "cardio":
        return "Cardio";
      case "energy":
        return "Energie";
      case "endurance":
        return "Endurance";
      case "strength":
        return "Force";
      case "speed":
        return "Vitesse";
      case "intensity":
        return "Intensité";
      default:
        return kind;
    }
  };

  const data = performance?.data
    ?.map(({ value, kind }) => {
      return {
        value,
        kind: getTranslatedKind(performance?.kind[kind]),
      };
    })
    .reverse();

  return {
    data,
  };
};
