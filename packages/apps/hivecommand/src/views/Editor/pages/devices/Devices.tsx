import React, { useState } from 'react';
import { Add } from 'grommet-icons';
import { Box, List, Text, Button } from 'grommet';

import { ProgramDeviceModal } from '../../../../components/modals/program-device';
import { mutation, refetch, useMutation } from '@hexhive/client';

import { useQuery as useApollo , gql, useApolloClient} from '@apollo/client';
export const Devices = (props) => {

	const client = useApolloClient()
	const { data } = useApollo(gql`
		query Q($id: ID) {
			commandProgramDevices {
				id
				name
			}
			commandPrograms(where: {id: $id}){
				devices {
					id
					name
					type{
						id
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

	const [ modalOpen, openModal ] = useState<boolean>(false);
	
	const [ addDevicePlaceholder, addInfo ] = useMutation((mutation, args: {name: string, type: string}) => {
		const newdevice = mutation.updateCommandPrograms({
			where: {id: props.match.params.id},
			update: {
				devices: [{
					create: [{node: {
						name: args.name,
						type: {connect: {where: {node: {id: args.type}}}}
					}}]
				}]
			}
		})
		return {
			item: {
				...newdevice.commandPrograms[0]
			}
		}
	})

	const refetch = () => {
		client.refetchQueries({include: ["Q"]})
	}

	const deviceTypes = data?.commandProgramDevices || [];
	const devices = data?.commandPrograms?.[0].devices || []

	return (
		<Box flex>
			<ProgramDeviceModal
				deviceTypes={deviceTypes}
				onClose={() => {
					openModal(false);
				}}
				onSubmit={(device) => {
					addDevicePlaceholder({args: {
						name: device.label,
						type: device.type.id
					}}).then(() => {
						openModal(false)
						refetch()
					})

				}}
				open={modalOpen}
				/>
			<Box 
				align="center"
				justify="between"
				direction="row">
				<Text size="small"></Text>
				<Button 
					onClick={() => openModal(true)}
					size="small"
					icon={<Add size="small" />} 
					hoverIndicator /> 
			</Box>
			<Box 
				overflow="scroll"
				flex>
				<List
				
					primaryKey="name"
					data={devices} />
			</Box>
		</Box>

	)
}