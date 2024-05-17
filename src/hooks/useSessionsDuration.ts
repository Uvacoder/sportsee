import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export const useSessionsDuration = () => {
  const { averageSession } = useContext(UserContext);
  const data = averageSession?.sessions || [];

  const getDay = (day: number) => {
    const date = new Date();
    date.setDate(day);

    if (day === 0 || day === 8) return ""; // we don't want to display the first and last day since they're fake

    return date
      .toLocaleDateString("fr-FR", { weekday: "long" })
      .charAt(0)
      .toLocaleUpperCase();
  };

  const getAverage = (data: { sessionLength: number }[]) => {
    const sum = data.reduce((acc, { sessionLength }) => acc + sessionLength, 0);
    return sum / data.length;
  };

  const enhancedData = [
    { day: 0, sessionLength: getAverage(data) },
    ...data,
    { day: 8, sessionLength: getAverage(data) },
  ];

  return {
    data: enhancedData,
    getDay,
  };
};
