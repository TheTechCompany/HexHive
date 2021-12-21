import React from 'react';
import { Box, Text, List } from 'grommet';
import { useQuery } from '@hexhive-api/signage';
import { Route, Switch } from 'react-router-dom';
import { LocationAnalytics } from './LocationAnalytics';
// import { ClusterSchedule } from './ClusterSchedule';
import { ClusterMap } from './ClusterMap';
import { ClusterSingleProvider } from './context';
import { ClusterTiers } from './ClusterTiers';

export const LocationSingle = (props) => {

	const query = useQuery()
	
	const location = query.locations({where: {id: props.match.params.id}})?.[0]

	return (
		<ClusterSingleProvider value={{id: props.match.params.id, analytics: location.cameraAnalytics }}>
		<Box overflow="hidden" flex elevation="small" background="neutral-1" round="xsmall">
			<Box background="accent-2" direction="row" pad="xsmall">
				<Text>{location.name}</Text>
			</Box>
			<Box direction="row" flex>
				<Box border={{side: 'right', size: 'small'}}>
					<List 
						onClickItem={({item}) => props.history.push(`${props.match.url}/${item.toLowerCase()}`)}
						border={false} 
						data={["Analytics"]} />
				</Box>
				<Box flex pad="xsmall">
					<Switch>
						<Route path={`${props.match.url}/analytics`} component={LocationAnalytics} />
						{/* <Route path={`${props.match.url}/schedule`} component={ClusterSchedule} /> */}
						{/* <Route path={`${props.match.url}/tiers`} component={ClusterTiers} />
						<Route path={`${props.match.url}/map`} component={ClusterMap} /> */}
					</Switch>
				</Box>
			</Box>
		</Box>
		</ClusterSingleProvider>
	)
}