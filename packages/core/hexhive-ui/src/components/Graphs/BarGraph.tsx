import React from "react";

import { Box } from "grommet";

import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar,
} from "recharts";

export interface BarGraphProps {
  className?: string;

  data?: Array<any>;

  yKey: string;
  xKey: string;
  color: string;
}

export const BarGraph: React.FC<BarGraphProps> = (props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        margin={{ left: 0, top: 8, bottom: 8, right: 8 }}
        data={props.data}
        width={12}
      >
        <XAxis dataKey={props.xKey} />
        <YAxis dataKey={props.yKey} />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar
            dataKey={props.yKey}
            type="monotone"
            fill={props.color || "#ff7300"}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};