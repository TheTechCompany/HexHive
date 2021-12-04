import { client, useQuery } from '@hexhive-api/signage';
import { Box, Text, Button } from 'grommet';
import React from 'react';
import { ServerCluster, Monitor, Action, Plug } from 'grommet-icons';
import { TemplateScreenList } from './views/TemplateScreen';
import { TemplateComputerList } from './views/TemplateComputer';
import { Route, Switch } from 'react-router-dom';
import { TemplatePeripheralList } from './views/TemplatePeripheral';
import { TemplatePluginList } from './views/TemplatePlugin';
import { MachineTemplateSingleProvider } from './context';
import { useQuery as useApolloQuery, gql, useApolloClient } from '@apollo/client';

export const MachineTemplateSingle = (props) => {

	const client = useApolloClient()

	const { data } = useApolloQuery(gql`
		query Q ($id: ID){
			machineTemplates(where: {id: $id}){
				id
				name

				computers {
					id
					name
				}
				displays {
					id
					name
					width
					height
					private
				}
				peripherals {
					id
					name
					type
					private
				}
			}
		}
	`, {
		variables: {
			id: props.match.params.id
		}
	})

	const refresh = () => {
		client.refetchQueries({include: ['Q']})
	}

	const machineTemplate = data?.machineTemplates?.[0]

	const menu = [
		{
			route: `screens`,
			icon: <Monitor />,
		},
		{
			route: `computers`,
			icon: <ServerCluster />,
		},
		{
			route: `peripherals`,
			icon: <Action />
		},
		{
			route: `plugins`,
			icon: <Plug />
		}
	]
	return (
		<MachineTemplateSingleProvider
			value={{
				templateId: props.match.params.id,
				computers: machineTemplate?.computers,
				screens: machineTemplate?.displays,
				peripherals: machineTemplate?.peripherals,
				refresh: refresh
			}}
			>
		<Box flex background="neutral-1" round="xsmall" overflow="hidden">
			<Box background="accent-2" pad="xsmall" align="center" justify="between" direction="row">
				<Text>{machineTemplate?.name}</Text>
			</Box>
			<Box direction="row" flex>
				<Box elevation="small" background="accent-1">
					{menu.map((item) => (
						<Button onClick={() => props.history.push(`${props.match.url}/${item.route}`)} hoverIndicator icon={item.icon} />
					))}
				</Box>
				<Box flex>
					<Switch>
						<Route path={`${props.match.url}/screens`} component={TemplateScreenList} />
						<Route path={`${props.match.url}/computers`} component={TemplateComputerList} />
						<Route path={`${props.match.url}/peripherals`} component={TemplatePeripheralList} />
						<Route path={`${props.match.url}/plugins`} component={TemplatePluginList} />
					</Switch>
				</Box>
			</Box>
		</Box>
		</MachineTemplateSingleProvider>
	)
}