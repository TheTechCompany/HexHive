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
  dataKey?: any;
  nameKey?: string;
}

export const PieGraph: React.FC<PieGraph> = (props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={props.data} dataKey={props.dataKey} nameKey={props.nameKey} fill="#8884d8" label/>
      </PieChart>
    </ResponsiveContainer>
  );
};