import { Box, Button, Text } from 'grommet';
import { Add } from 'grommet-icons';
import React, { useState } from 'react';
import { MappingModal } from '../../components/modals/MappingModal';
import { useQuery as useApollo, gql } from '@apollo/client'

export const IntegrationEditor = (props) => {
	const [ mapOpen, openMap ] = useState<boolean>(false);

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
					types {
						id
						name
						fields{
							id
							name
							type
						}
					}
				}

				connections {
					id
					name
					collections {
						name
					}
				}
			}
		}
	`, {
		variables: {
			id: props.match.params.id
		}
	})

	const appliances = data?.hiveIntegrationInstances?.[0]?.appliances || [];
	const connections = data?.hiveIntegrationInstances?.[0]?.connections || [];

	return (
		<Box flex>
			<MappingModal 
				appliances={appliances}
				connections={connections}
				onClose={() => {
					openMap(false)
				}}
				open={mapOpen} />
			<Box
				flex 
				overflow="hidden"
				round="xsmall" 
				background="neutral-1">
				<Box
					justify="between"
					align="center"
					background="accent-2" 
					pad="xsmall" 
					direction="row">
					<Text size="small">Integration</Text>

					<Button
						onClick={() => {
							openMap(true)
						}}
						plain
						style={{padding: 6, borderRadius: 3}}
						hoverIndicator
						size="small"
						icon={<Add size="small" />} />
				</Box>
			</Box>
		</Box>
	)
}