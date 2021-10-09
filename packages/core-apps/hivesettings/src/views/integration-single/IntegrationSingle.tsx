import { Box, Button, List, Text } from 'grommet';
import { Add, Play, Stop } from 'grommet-icons';
import React, { useState } from 'react';
import { useQuery as useApollo, gql, useApolloClient } from '@apollo/client'
import { IntegrationModal } from '../../components/modals/IntegrationModal/IntegrationModal';
import { client, useMutation } from '@hexhive/client';
import { AppModal } from '../../components/modals/AppModal/AppModal';
import { ConnectionModal } from '../../components/modals/ConnectionModal';
export const IntegrationSingle = (props) => {

	const [ modalOpen, openModal ] = useState<boolean>(false);
	const [ connectionOpen, openConnections ] = useState<boolean>(false);

	const client = useApolloClient()
	const { data } = useApollo(gql`
		query Q ($id: ID){
			hiveAppliances {
				id
				name
			}
			hiveIntegrationInstances(where: {id: $id}){
				id
				name
				isRunning

				appliances {
					id
					name
				}

				connections {
					id
					name
				}
			}
		}
	`, {
		variables: {
			id: props.match.params.id
		}
	})

	const refetchIntegrations = () => {
		client.refetchQueries({
			include: ['Q']
		})
	}


	const [ updateState, updateInfo ] = useMutation((mutation, args: {id: string, state :boolean}) => {
		const res = mutation.updateHiveIntegrationInstanceState({
			id: args.id,
			state: args.state
		})
		return {
			item: res,
			err: null
		}
	})


	const [ createConnection, info ] = useMutation((mutation, args: {id: string, item :any}) => {
		const res = mutation.updateHiveIntegrationInstances({
			where: {id: args.id},
			update: {
				connections: [{create: [{node: {
					name: args.item.name,

				}}]}]
			}
		})
		return {
			item: {
				...res.hiveIntegrationInstances[0]
			},
			err: null
		}
	})

	const addConnection = (item: any) => {
		createConnection({args: {id: props.match.params.id, item: {
			name: item.name
		}}}).then(() => {
			refetchIntegrations()
		})
	}

	// const [ createIntegration, info ] = useMutation((mutation, args: {item: {name: string, integration?: string}}) => {
	// 	let update = {
	// 	}
	// 	if(args.item.integration){
	// 		update = {
	// 			...update,
	// 			integration: {connect: {where: {node: {id: args.item.integration}}}},
	// 		}
	// 	}
	// 	const integration = mutation.updateHiveOrganisations({
	// 		update: {
	// 			integrations: [{create: [{node: {
	// 				...update,
	// 				name: args.item.name,
	// 				appliance: {connect: {where: {node: {id: props.match.params.id}}}}
	// 			}}]}]
	// 		}
	// 	})
	// 	return {
	// 		item: {
	// 			...integration.hiveOrganisations[0]
	// 		}
	// 	}
	// })

	// const integrations = data?.hiveIntegrations || []

	const instances = data?.hiveIntegrationInstances?.[0] || {}

	const apps = data?.hiveAppliances || []

	return (
		<Box flex>
			<Box
				flex
				overflow="hidden"
				round="xsmall"
				background="neutral-1">
				<AppModal 
					workers={apps}
					onClose={() =>{
						openModal(false)
					}}
					open={modalOpen} />
				<ConnectionModal 
					onClose={() => {
						openConnections(false)
					}}
					onSubmit={addConnection}
					open={connectionOpen} />
				<Box
					direction="row"
					justify="between"
					align="center"
					pad="xsmall"
					background="accent-2">
					<Text>{instances?.name}</Text>
					<Button 
						onClick={() => {
							updateState({args: {
								id: props.match.params.id,
								state: !instances?.isRunning
							}}).then(() => {
								refetchIntegrations()
							})
						}}
						plain 
						style={{padding: 6, borderRadius: 3}} 
						hoverIndicator 
						icon={instances?.isRunning ? <Stop size="small" /> : <Play size="small" />} />
				</Box>
				<Box gap="xsmall" flex direction="row">
					<Box gap="xsmall" flex>
						<Box 	
							pad="xsmall"
							elevation="small"
							flex>
							<Text size="small">Usage</Text>

							{/* <Text>$20</Text> */}
						</Box>
						<Box
							pad="xsmall"
							elevation="small"
							flex>
							<Box 
								border={{side: 'bottom', size: 'small'}}
								align="center"
								justify="between"
								direction="row">
							<Text size="small">Connections</Text>
							<Button	
								onClick={() => openConnections(true)}
								hoverIndicator
								icon={<Add size='small' />} 
								size="small" />
							</Box>
						<List 
							primaryKey={"name"}
							data={instances?.connections || []} />
 
						</Box>
					</Box>
					<Box
						pad="xsmall"
						elevation="small"
						width="medium">
						<Box
							border={{side: 'bottom', size: 'small'}}
							align="center"
							justify="between"
							direction="row">
							<Text size="small">Apps</Text>

							<Button 
								onClick={() => openModal(true)}
								size="small" 
								hoverIndicator 
								icon={<Add size="small" />} />
						</Box>
						<List 
							primaryKey="name"
							data={instances?.appliances ? instances?.appliances : []} />

					</Box>
				</Box>
			</Box>

		</Box>
	)
}