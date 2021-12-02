import { useQuery } from '@hexhive-api/signage';
import { Box, List, Text } from 'grommet'
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { DisplaySingleProvider } from './context';
import { DisplayCluster } from './DisplayCluster';
import { DisplayComputers } from './DisplayComputers';
import { DisplayScreen } from './DisplayScreen';

export const DisplaySingle = (props) => {
	const query = useQuery()

	const display = query.displays({where: {id: props.match.params.id}})?.[0]

	return (
		<DisplaySingleProvider value={{
			id: props.match.params.id
		}}>
		<Box 
			round="xsmall"
			flex 
			overflow="hidden"
			background="neutral-1" 
			elevation="small">
			
			<Box pad="xsmall" background="accent-1" direction="row">
				<Text>{display.label}</Text>
			</Box>

			<Box flex direction="row">
				<Box elevation="small" border={{side: 'right', size: 'small'}}>
					<List 
						border={false}
						onClickItem={({item}) => props.history.push(`${props.match.url}/${item.toLowerCase()}`)}
						data={["Computers", "Screen", "Cluster"]} />
				</Box>
				<Box flex>
					<Switch>
						<Route path={`${props.match.url}/computers`} component={DisplayComputers} />
						<Route path={`${props.match.url}/screen`} component={DisplayScreen} />
						<Route path={`${props.match.url}/cluster`} component={DisplayCluster} />
					</Switch>
				</Box>
			</Box>
		</Box>
		</DisplaySingleProvider>
	)
}