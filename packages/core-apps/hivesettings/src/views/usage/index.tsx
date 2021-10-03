import { Box, Text } from "grommet";
import React from "react";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts';
export const Usage = () => {
	const data = [];
	return (
		<Box 
			align={'start'}
			wrap
			gap="xsmall"
			direction="row"
			flex>
			{/* Disk Usage */}
			<Box 
				round="xsmall"
				overflow="hidden"
				elevation="small"
				background="neutral-1">
			<Box pad="xsmall" background="accent-2">
				<Text>Disk Usage</Text>
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
			<Box 
				round="xsmall"
				overflow="hidden"
				elevation="small"
				background="neutral-1">
			<Box pad="xsmall" background="accent-2">
				<Text>Network Usage</Text>
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
			<Box 
				round="xsmall"
				overflow="hidden"
				elevation="small"
				background="neutral-1">
			<Box pad="xsmall" background="accent-2">
				<Text>CPU Usage</Text>
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
				round="xsmall"
				overflow="hidden"
				elevation="small"
				background="neutral-1">
			<Box pad="xsmall" background="accent-2">
				<Text>Memory Usage</Text>
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