import { Box, IconButton, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
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
		<Box>
			<MappingModal 
				appliances={appliances}
				connections={connections}
				onClose={() => {
					openMap(false)
				}}
				open={mapOpen} />
			<Box
				>
				<Box
					>
					<Typography>Integration</Typography>

					<IconButton
						onClick={() => {
							openMap(true)
						}}
					>
						<Add />
					</IconButton>
				</Box>
			</Box>
		</Box>
	)
}