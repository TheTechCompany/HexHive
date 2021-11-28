import React from 'react';
import { Box, Text, List } from 'grommet';
import { useQuery } from '@hexhive-api/signage';
import { Route, Switch } from 'react-router-dom';
import { ClusterDisplays } from './ClusterDisplays';
import { ClusterSchedule } from './ClusterSchedule';
import { ClusterMap } from './ClusterMap';
import { ClusterSingleProvider } from './context';

export const ClusterSingle = (props) => {

	const query = useQuery()
	
	const cluster = query.clusters({where: {id: props.match.params.id}})?.[0]

	return (
		<ClusterSingleProvider value={{id: props.match.params.id}}>
		<Box overflow="hidden" flex elevation="small" background="neutral-1" round="xsmall">
			<Box background="accent-2" direction="row" pad="xsmall">
				<Text>{cluster.label}</Text>
			</Box>
			<Box direction="row" flex>
				<Box border={{side: 'right', size: 'small'}}>
					<List 
						onClickItem={({item}) => props.history.push(`${props.match.url}/${item.toLowerCase()}`)}
						border={false} 
						data={["Displays", "Schedule", "Map"]} />
				</Box>
				<Box flex pad="xsmall">
					<Switch>
						<Route path={`${props.match.url}/displays`} component={ClusterDisplays} />
						<Route path={`${props.match.url}/schedule`} component={ClusterSchedule} />
						<Route path={`${props.match.url}/map`} component={ClusterMap} />
					</Switch>
				</Box>
			</Box>
		</Box>
		</ClusterSingleProvider>
	)
}