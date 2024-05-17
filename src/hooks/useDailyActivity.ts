import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { NameType } from "recharts/types/component/DefaultTooltipContent";

export const useDailyActivity = () => {
  const { activity } = useContext(UserContext);

  const formatDate = (date: string) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const data = activity?.sessions?.map(({ day, kilogram, calories }) => ({
    day: formatDate(day),
    kilogram,
    calories,
  }));

  const getUnit = (string: NameType) => {
    if (typeof string === "string" && string.includes("kg")) {
      return "kg";
    }
    if (typeof string === "string" && string.includes("kCal")) {
      return "kCal";
    }
    return "";
  };

  return {
    data,
    getUnit,
  };
};
