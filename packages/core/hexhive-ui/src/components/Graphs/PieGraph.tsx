import React from "react";

import { Box } from "grommet";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
} from "recharts";

export interface PieGraph {
  data?: Array<any>;
  dataKey?: string;
  nameKey?: string;
}

export const PieGraph: React.FC<PieGraph> = (props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={730} height={250}>
        <Pie data={props.data} dataKey={"value"} nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
      </PieChart>
    </ResponsiveContainer>
  );
};