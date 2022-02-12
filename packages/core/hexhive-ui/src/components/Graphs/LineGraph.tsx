import React from "react";

import { Box } from "grommet";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
} from "recharts";

export interface LineGraphProps {
  className?: string;

  data?: Array<any>;

  xKey?: string;
  yKey?: string;
}

export const LineGraph: React.FC<LineGraphProps> = (props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        margin={{ left: 0, top: 8, bottom: 8, right: 8 }}
        data={props.data}
        width={12}
      >
        <XAxis dataKey={props.xKey} />
        <YAxis dataKey={props.yKey} />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line
          type="monotone"
          dataKey={props.yKey}
          stroke="#ff7300"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};