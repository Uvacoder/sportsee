import { FC } from "react";
import * as stylex from "@stylexjs/stylex";
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
import { useDailyActivity } from "../../../hooks/useDailyActivity";

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
  helpText: {
    fontSize: typography.md,
    fill: colors.grey,
  },
});

const DailyActivityGraph: FC = () => {
  const { data, getUnit } = useDailyActivity();

  return (
    <div {...stylex.props(styles.root)}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={8}>
          <text x="0%" y="5%" {...stylex.props(styles.title)}>
            Activité quotidienne
          </text>
          {data ? (
            <>
              <CartesianGrid strokeDasharray="1 1" vertical={false} />
              <YAxis
                yAxisId="kilogram"
                dataKey="kilogram"
                type="number"
                domain={["dataMin - 1", "dataMax"]}
                axisLine={false}
                interval={"equidistantPreserveStart"}
                orientation="right"
                tickLine={false}
                tick={{ fontSize: 14 }}
                dx={15}
                allowDecimals={false}
              />
              <YAxis hide yAxisId="calories" />
              <XAxis
                dataKey="day"
                tickLine={false}
                tickFormatter={(_, index) => (index + 1).toLocaleString()}
              />
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
                yAxisId="kilogram"
                dataKey="kilogram"
                name="Poids (kg)"
                fill="#000"
                barSize={7}
                radius={[5, 5, 0, 0]}
                legendType="circle"
              />
              <Bar
                yAxisId="calories"
                dataKey="calories"
                name="Calories brûlées (kCal)"
                fill={colors.primary}
                barSize={7}
                radius={[5, 5, 0, 0]}
                legendType="circle"
              />
            </>
          ) : (
            <text
              x="50%"
              y="50%"
              dy={0}
              textAnchor="middle"
              dominantBaseline="middle"
              {...stylex.props(styles.helpText)}
            >
              Données non disponibles
            </text>
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivityGraph;
