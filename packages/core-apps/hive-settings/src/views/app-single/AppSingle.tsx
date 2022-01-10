import { Box, Button, List, Text } from 'grommet';
import { Add } from 'grommet-icons';
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
		const integration = mutation.updateHiveOrganisations({
			update: {
				integrations: [{create: [{node: {
					...update,
					name: args.item.name,
					appliances: {connect: [{where: {node: {id: props.match.params.id}}}]}
				}}]}]
			}
		})
		return {
			item: {
				...integration.hiveOrganisations[0]
			}
		}
	})

	const integrations = data?.hiveIntegrations || []

	const instances = data?.hiveIntegrationInstances || []

	const app = data?.hiveAppliances?.[0] || {}

	return (
		<Box flex>
			<Box
				flex
				overflow="hidden"
				round="xsmall"
				background="neutral-1">
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
					pad="xsmall"
					background="accent-2">
					<Text>{app.name}</Text>
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
						<Box flex>

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
							<Text size="small">Integrations</Text>

							<Button 
								onClick={() => openModal(true)}
								size="small" 
								hoverIndicator 
								icon={<Add size="small" />} />
						</Box>
						<List 
							primaryKey="name"
							data={instances} />

					</Box>
				</Box>
			</Box>

		</Box>
	)
}