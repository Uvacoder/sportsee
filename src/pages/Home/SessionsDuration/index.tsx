import { FC, useContext } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors, typography } from "../../../styleVariables.stylex";
import UserContext from "../../../contexts/UserContext";
import {
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const styles = stylex.create({
  root: {
    width: "258px",
    height: "263px",
    backgroundColor: colors.primary,
    borderRadius: "5px",
    position: "relative",
  },
  mask: {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    backgroundColor: "red",
    opacity: 0.4,
    position: "absolute",
  },
  label: {
    fontSize: typography.md,
    fontWeight: 500,
    fill: "white",
    textAnchor: "start",
    dominantBaseline: "hanging",
  },
  customCursor: {
    transform: "translateY(-60px)",
    opacity: 0.1,
    fill: "black",
    stroke: "black",
  },
  dot: {
    fill: "white",
    stroke: "white",
    strokeWidth: 16,
    strokeOpacity: 0.1,
  },
});

const CustomCursor: FC<{
  points?: { x: number; y: number }[];
  width?: number;
  height?: number;
}> = (props) => {
  const { points, width, height } = props;
  const { x, y } = points![0];

  return (
    <Rectangle
      x={x}
      y={y}
      width={width! + 120}
      height={height! + 120}
      {...stylex.props(styles.customCursor)}
    />
  );
};

const SessionsDuration: FC = () => {
  const { averageSession } = useContext(UserContext);

  const data = averageSession?.sessions || [];

  const getDay = (day: number) => {
    const date = new Date();
    date.setDate(day + 3); // the first day of the week is Sunday, so we add 3 to get the correct day

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

  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.mask)} />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={enhancedData}
          margin={{
            top: 60,
            right: -20,
            left: -20,
            bottom: 20,
          }}
        >
          <XAxis
            dataKey="day"
            tickFormatter={getDay}
            tickLine={false}
            axisLine={false}
            dy={10}
            tick={{ fontSize: typography.sm, fill: "white", fontWeight: 500 }}
          />
          <text x="20" y="20" {...stylex.props(styles.label)}>
            Durée moyenne des
          </text>
          <text x="20" y="20" dy="24" {...stylex.props(styles.label)}>
            sessions
          </text>
          <Tooltip
            wrapperStyle={{ outline: "none" }}
            itemStyle={{
              color: "black",
              fontSize: typography.sm,
              fontWeight: 500,
            }}
            labelStyle={{ display: "none" }}
            formatter={(value) => [`${value} min`]}
            cursor={<CustomCursor />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, ...stylex.props(styles.dot) }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionsDuration;
