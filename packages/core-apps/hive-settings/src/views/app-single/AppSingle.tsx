import { Box, Button, IconButton, List, ListItem, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import React, { useState } from 'react';
import { useQuery as useApollo, gql, useApolloClient } from '@apollo/client'
import { IntegrationModal } from '../../components/modals/IntegrationModal/IntegrationModal';
import { client, useMutation } from '@hexhive/client';

export const AppSingle = (props) => {

	const [ modalOpen, openModal ] = useState<boolean>(false);
	const client = useApolloClient()
	const { data } = useApollo(gql`
		query Q ($id: ID){
			hiveAppliances(where: {id: $id}){
				name
			}

			hiveIntegrationInstances(where: {appliances: {id: $id}}){
				id
				name
			}

			hiveIntegrations{
				id
				name
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

	const [ createIntegration, info ] = useMutation((mutation, args: {item: {name: string, integration?: string}}) => {
		let update = {
		}
		if(args.item.integration){
			update = {
				...update,
				integration: {connect: {where: {node: {id: args.item.integration}}}},
			}
		}
		// const integration = mutation.updateHiveOrganisations({
		// 	update: {
		// 		integrations: [{create: [{node: {
		// 			...update,
		// 			name: args.item.name,
		// 			appliances: {connect: [{where: {node: {id: props.match.params.id}}}]}
		// 		}}]}]
		// 	}
		// })
		// return {
		// 	item: {
		// 		...integration.hiveOrganisations[0]
		// 	}
		// }
	})

	const integrations = data?.hiveIntegrations || []

	const instances = data?.hiveIntegrationInstances || []

	const app = data?.hiveAppliances?.[0] || {}

	return (
		<Box>
			<Box
				>
					<IntegrationModal
						workers={integrations}
						open={modalOpen}
						onSubmit={(integration) => {
							createIntegration({args: {item: {name: integration.name}}}).then(() => {
								refetchIntegrations();
							})
						}}
						onClose={() => {
							openModal(false)
						}} />
				<Box
					>
					<Typography>{app.name}</Typography>
				</Box>
				<Box >
					<Box >
						<Box >
							<Typography>Usage</Typography>

							{/* <Text>$20</Text> */}
						</Box>
						<Box >

						</Box>
					</Box>
					<Box>
						<Box>
							<Typography>Integrations</Typography>

							<IconButton 
								onClick={() => openModal(true)}
								size="small" 
								>
								<Add />
							</IconButton>
						</Box>
						<List >
							{instances.map((instance) => (
								<ListItem>{instance.name}</ListItem>
							))}
						</List>

					</Box>
				</Box>
			</Box>

		</Box>
	)
}