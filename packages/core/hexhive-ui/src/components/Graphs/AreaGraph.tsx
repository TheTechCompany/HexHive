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
      width={730} 
      height={250} 
      data={props.data}
      >
        <XAxis dataKey={props.xKey} angle={-45} tickMargin={40} height={85} />
        <YAxis dataKey={props.yKey} />
        <Tooltip /> 
        <Area type="monotone"
          dataKey={props.yKey}
          stroke="#ff7300"
          dot={false}/>
      </AreaChart>
    </ResponsiveContainer>
  );
};