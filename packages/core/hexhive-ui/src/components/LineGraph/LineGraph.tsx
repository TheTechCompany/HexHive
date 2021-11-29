import React from 'react'
import { Box } from 'grommet'
import { 
	ResponsiveContainer,
	LineChart,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	Line
} from 'recharts'

export interface LineGraphProps {
	className?: string;
	data?: any[]

	xKey?: string;
	yKey?: string;
}

export const LineGraph : React.FC<LineGraphProps> = (props) => {
	return (
		<Box flex className={props.className}>
            <ResponsiveContainer>
                <LineChart
                    margin={{ left: 0, top: 8, bottom: 8, right: 8 }}
                    data={props.data} >
                    <XAxis dataKey={props.xKey} />
                    <YAxis dataKey={props.yKey} />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line dot={false} type="monotone" dataKey={props.yKey} stroke="#ff7300" />
                </LineChart>
            </ResponsiveContainer>
        </Box>
	)
}