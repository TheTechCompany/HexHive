import React, { useState, useContext } from 'react';
import { ResponsiveContainer, LineChart, YAxis, XAxis, Tooltip, CartesianGrid, Line } from 'recharts'
import { Box, Text } from 'grommet';
import { CampaignSingleContext } from '../context';
import moment from 'moment';

export const AnalyticsPage = () => {

	const { views, interactions, interactionTimeline } = useContext(CampaignSingleContext);

	return (
		<Box pad="xsmall" gap="small" flex>
			<Box direction="row" justify="between">
				<Box background="white" round="xsmall" width="small" height="small" elevation="small">
					<Box direction="column" align="center" justify="center" pad="small">
						<Text>Total Plays</Text>
						<Text>{views}</Text>
					</Box>
				</Box>
				<Box background="white" round="xsmall" width="small" height="small" elevation="small">
					<Box direction="column" align="center" justify="center" pad="small">
						<Text>Total Interactions</Text>
						<Text>{interactions}</Text>
					</Box>
				</Box>

			</Box>

			<Box overflow="hidden" background="white" round="xsmall" elevation="small" flex>
				<Box margin={{bottom: 'xsmall'}} pad={'xsmall'} background="accent-2" direction="row">
					<Text>Interactions</Text>
				</Box>
				<ResponsiveContainer>
					<LineChart
						data={interactionTimeline?.map((x) => ({
							...x,
							time: (new Date(x.time).getTime())
						}))}
						margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
						>
						<XAxis dataKey="time" />
						<YAxis dataKey="interactions" />
						<Tooltip />
						<CartesianGrid stroke="#f5f5f5" />
						<Line type="monotone" dataKey={"interactions"}  stroke="#ff7300" yAxisId={0} />
					</LineChart>
				</ResponsiveContainer>
			</Box>
		</Box>
	)
}