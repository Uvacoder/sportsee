import { FC, useContext, useRef } from "react";
import * as stylex from "@stylexjs/stylex";
import UserContext from "../../../contexts/UserContext";
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { colors, typography } from "../../../styleVariables.stylex";
import { NameType } from "recharts/types/component/DefaultTooltipContent";

const styles = stylex.create({
  root: {
    height: 320,
    width: "100%",
  },
  title: {
    fontSize: typography.md,
    fontWeight: 500,
  },
  label: {
    fontSize: "14px",
    fontWeight: 500,
    color: colors.grey,
    marginLeft: "4px",
    marginRight: "10px",
  },
});

const DailyActivityGraph: FC = () => {
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

  const containerRef = useRef<HTMLDivElement>(null);

  const getUnit = (string: NameType) => {
    if (typeof string === "string" && string.includes("kg")) {
      return "kg";
    }
    if (typeof string === "string" && string.includes("kCal")) {
      return "kCal";
    }
    return "";
  };

  return (
    <div {...stylex.props(styles.root)} ref={containerRef}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={8}>
          <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickFormatter={(_, index) => (index + 1).toLocaleString()}
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={["dataMin - 2", "dataMax + 1"]}
            tickCount={3}
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
          />
          <YAxis dataKey="calories" type="number" hide />
          <text x="0%" y="5%" {...stylex.props(styles.title)}>
            Activité quotidienne
          </text>
          <Legend
            verticalAlign="top"
            align="right"
            height={70}
            iconSize={8}
            formatter={(value) => (
              <span {...stylex.props(styles.label)}>{value}</span>
            )}
          />
          <Tooltip
            wrapperStyle={{
              fontSize: typography.sm,
              color: "white",
              fontWeight: 500,
            }}
            itemStyle={{ color: "white", fontWeight: 500 }}
            contentStyle={{
              backgroundColor: colors.primary,
              border: "none",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
            formatter={(value, name) => [`${value}${getUnit(name)}`]}
          />
          <Bar
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#000"
            barSize={7}
            radius={[5, 5, 0, 0]}
            legendType="circle"
          />
          <Bar
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill={colors.primary}
            barSize={7}
            radius={[5, 5, 0, 0]}
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivityGraph;
