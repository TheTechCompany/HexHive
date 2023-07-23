import { Box, Button, IconButton, List, ListItem, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import React, { useState } from 'react';
import { useQuery as useApollo, gql, useApolloClient } from '@apollo/client'
import { IntegrationModal } from '../../components/modals/IntegrationModal/IntegrationModal';
import { client, useMutation } from '@hexhive/client';
import { useParams } from 'react-router-dom';

export const AppSingle = (props) => {

	const { id } = useParams();
	const [ modalOpen, openModal ] = useState<boolean>(false);
	const client = useApolloClient()
	
	const { data } = useApollo(gql`
		query Q ($id: ID){
			hiveAppliances(where: {id: $id}){
				name

				permissions
			}

		}
	`, {
		variables: {
			id: id
		}
	})


	const app = data?.hiveAppliances?.[0] || {}

	return (
		<Box sx={{flex: 1, display: 'flex'}}>
			<Box
				sx={{
					flexDirection: 'column',
					display: 'flex'
				}}
				>
				
				<Box
					>
					<Typography>{app.name}</Typography>
				</Box>
				<Box>
					<List>
						{app.permissions?.map((perm) => (
							<ListItem>{perm}</ListItem>
						))}
					</List>
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
					
				</Box>
			</Box>

		</Box>
	)
}