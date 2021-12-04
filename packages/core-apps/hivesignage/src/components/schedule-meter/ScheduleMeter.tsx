import { Box, Text } from 'grommet'
import React from 'react'

export interface ScheduleMeterProps {
	items?: {percent: number, color: string, label: string}[]
}

export const ScheduleMeter : React.FC<ScheduleMeterProps> = (props) => {
	const total = props.items?.reduce((prev, curr) => prev + curr.percent, 0)
	return (
		<Box height="20px" direction="row" align="center">
			{props.items?.map((item, index) => {

				return (
					<Box align="center" justify="center" height="100%" style={{flex: item.percent / total, background: item.color || '#f0af0a'}}>
						<Text size="small" color="white">{item.label}</Text>
					</Box>
				)
			})}
		</Box>
	)
}