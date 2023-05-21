import { Box,IconButton, Button, List, ListItem, Typography } from '@mui/material';
import { Add, PlayArrow, Edit, Stop } from '@mui/icons-material';
import React, { useState } from 'react';
import { useQuery as useApollo, gql, useApolloClient } from '@apollo/client'
import { IntegrationModal } from '../../components/modals/IntegrationModal/IntegrationModal';
import { client, useMutation } from '@hexhive/client';
import { AppModal } from '../../components/modals/AppModal/AppModal';
import { ConnectionModal } from '../../components/modals/ConnectionModal';
import { useNavigate } from 'react-router-dom';
export const IntegrationSingle = (props) => {

	const navigate = useNavigate()

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
		// const res = mutation.updateHiveIntegrationInstanceState({
		// 	id: args.id,
		// 	state: args.state
		// })
		// return {
		// 	item: res,
		// 	err: null
		// }
	})


	const [ createConnection, info ] = useMutation((mutation, args: {id: string, item :any}) => {
		// const res = mutation.updateHiveIntegrationInstances({
		// 	where: {id: args.id},
		// 	update: {
		// 		connections: [{create: [{node: {
		// 			name: args.item.name,

		// 		}}]}]
		// 	}
		// })
		// return {
		// 	item: {
		// 		...res.hiveIntegrationInstances[0]
		// 	},
		// 	err: null
		// }
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
		<Box>
			<Box
				>
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
				<Box>
					<Typography>{instances?.name}</Typography>
					<Box>
						<IconButton 
							onClick={() => {
								updateState({args: {
									id: props.match.params.id,
									state: !instances?.isRunning
								}}).then(() => {
									refetchIntegrations()
								})
							}}
							>
							{instances?.isRunning ? <Stop  /> : <PlayArrow  />}
						</IconButton>
						<IconButton
							onClick={() => {
								navigate(`edit`)
							}}
						>
							<Edit />
						</IconButton>
							
					</Box>
				</Box>
				<Box>
					<Box >
						<Box 	>
							<Typography>Usage</Typography>

							{/* <Text>$20</Text> */}
						</Box>
						<Box>
							<Box >
							<Typography >Connections</Typography>
							<IconButton	
								onClick={() => openConnections(true)}
							>
								<Add />
							</IconButton>

							</Box>
						<List >
							{instances?.connections?.map((conn) => (
								<ListItem>
									{conn.name}
								</ListItem>
							))}
						</List>
 
						</Box>
					</Box>
					<Box>
						<Box>
							<Typography>Apps</Typography>

							<IconButton 
								onClick={() => openModal(true)}
								>
								<Add  />
							</IconButton>
							
						</Box>
						<List >
							{instances?.appliances?.map((app) => (
								<ListItem>{app.name}</ListItem>
							))}
						</List>

					</Box>
				</Box>
			</Box>

		</Box>
	)
}