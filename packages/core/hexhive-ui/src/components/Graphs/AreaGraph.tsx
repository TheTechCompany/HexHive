import React from "react";

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

export interface AreaGraphProps {

  data?: Array<any>;

  xKey?: string;
  yKey?: string;
}

export const AreaGraph: React.FC<AreaGraphProps> = (props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        margin={{ left: 0, top: 8, bottom: 8, right: 8 }}
        data={props.data}
        width={12}
      >
         <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#ff7300" stopOpacity={0}/>
          </linearGradient>
         </defs>
        <XAxis dataKey={props.xKey} angle={-45} tickMargin={40} height={85} />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="name" stroke="#ff7300" fillOpacity={1} fill="ff7300" />
      </AreaChart>
    </ResponsiveContainer>
  );
};