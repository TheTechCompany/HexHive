import { Box, Typography } from "@mui/material";
import React from "react";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts';
export const Usage = () => {
	const data = [];
	return (
		<Box 
			sx={{flex: 1}}>
			{/* Disk Usage */}
			<Box >
			
			<Box >
				<Typography>Disk Usage</Typography>
			</Box>
			<LineChart
				width={400}
				height={200}
				data={data}
				margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
				>
				<XAxis dataKey="name" />
				<Tooltip />
				<CartesianGrid stroke="#f5f5f5" />
				<Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
				<Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
			</LineChart>
			</Box>
			{/* Network Usage */}
			<Box >
			<Box>
				<Typography>Network Usage</Typography>
			</Box>
			<LineChart
				width={400}
				height={200}
				data={data}
				margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
				>
				<XAxis dataKey="name" />
				<Tooltip />
				<CartesianGrid stroke="#f5f5f5" />
				<Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
				<Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
			</LineChart>
			</Box>
			{/* CPU */}
			<Box >
			<Box>
				<Typography>CPU Usage</Typography>
			</Box>

			<LineChart
				width={400}
				height={200}
				data={data}
				margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
				>
				<XAxis dataKey="name" />
				<Tooltip />
				<CartesianGrid stroke="#f5f5f5" />
				<Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
				<Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
			</LineChart>
			</Box>
			{/* Memory Usage */}
			<Box 
				>
			<Box>
				<Typography>Memory Usage</Typography>
			</Box>
			<LineChart
				width={400}
				height={400}
				data={data}
				margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
				>
				<XAxis dataKey="name" />
				<Tooltip />
				<CartesianGrid stroke="#f5f5f5" />
				<Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
				<Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
			</LineChart>
			</Box>
		</Box>
	)	
}