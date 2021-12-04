import React from 'react';
import { Box, Button, Text } from 'grommet';
import { useQuery } from '@hexhive-api/signage';
import { Analytics, Scorecard, Map, SchedulePlay } from 'grommet-icons';
import { Route, Switch } from 'react-router';
import { ScheduleLocations } from './views/ScheduleLocations';
import { ScheduleCampaigns } from './views/ScheduleCampaigns';
import { ScheduleReports } from './views/ScheduleReports';
import { ScheduleSingleProvider } from './context';
import { useQuery as useApolloQuery, useApolloClient, gql } from '@apollo/client'
import { ScheduleTiers } from './views/ScheduleTiers';
export const ScheduleSingle = (props) => {
	const query = useQuery()

	const { data } = useApolloQuery(gql`
		query Q ($id: ID){
			schedules(where: {id: $id}) {
				id
				name

				locations {
					id
					name
				}

				campaigns {
					id
					name
				}

			
			}
		}
	`)

	const schedule = data?.schedules?.[0]

	const menu = [ 
		{
			route: `locations`,
			icon: <Map />,
			label: 'Locations'
		},
		{
			route: 'campaigns',
			icon: <SchedulePlay />,
			label: 'Campaigns'
		},
		{
			route: 'tiers',
			icon: <Scorecard />
		},
		{
			route: 'reports',
			icon: <Analytics />,
			label: 'Reports'
		}
	]
	return (
		<ScheduleSingleProvider value={{
			scheduleId: props.match.params.id,
			locations: schedule?.locations,
			campaigns: schedule?.campaigns,
		}}>
		<Box 
			overflow="hidden"
			round="xsmall"
			flex 
			elevation="small" 
			background="neutral-1">
			<Box background="accent-2" pad="xsmall" direction="row">
				<Text>{schedule?.name}</Text>
			</Box>
			<Box direction="row" flex>
				<Box elevation="small" background="accent-1">
					{menu.map((menu_item) => (
						<Box direction="row">
							<Button onClick={() => props.history.push(`${props.match.url}/${menu_item.route}`)} hoverIndicator icon={menu_item.icon} />
						</Box>
					))}
				</Box>
				<Box flex>
					<Switch>
						<Route path={`${props.match.url}/locations`} component={ScheduleLocations} />
						<Route path={`${props.match.url}/campaigns`} component={ScheduleCampaigns} />
						<Route path={`${props.match.url}/tiers`} component={ScheduleTiers} />
						<Route path={`${props.match.url}/reports`} component={ScheduleReports} />
					</Switch>
				</Box>
			</Box>
		</Box>
		</ScheduleSingleProvider>
	)
}