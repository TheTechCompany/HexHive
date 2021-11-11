import React, { useState } from 'react';
import { Add, Action, MoreVertical } from 'grommet-icons';
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

					requiresMutex
					type{
						id
						name
					}

					plugins {
						id
						plugin {
							name
						}

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
	const [ selected, setSelected ] = useState<any>();

	const [ updateDevicePlaceholder, updateInfo ] =useMutation((mutation, args: {id: string, requiresMutex: boolean, name: string, type: string}) => {
		const updated = mutation.updateCommandPrograms({
			where: {id: props.match.params.id},
			update: {
				devices: [{
					where: {node: {id: args.id}},
					update: {
							
						node: {
							requiresMutex: args.requiresMutex,
							name: args.name,
							type: {connect: {where: {node: {id: args.type}}}}
						}
					}
				}]
			}
		})
		return {
			item: {
				...updated.commandPrograms[0]
			}
		}
	})


	const [ addDevicePlaceholder, addInfo ] = useMutation((mutation, args: {requiresMutex: boolean, name: string, type: string}) => {
		const newdevice = mutation.updateCommandPrograms({
			where: {id: props.match.params.id},
			update: {
				devices: [{
					create: [{node: {
						requiresMutex: args.requiresMutex,
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

	const onEdit = (datum: any) => {
		setSelected(datum)
		openModal(true)
	}

	const deviceTypes = data?.commandProgramDevices || [];
	const devices = data?.commandPrograms?.[0].devices || []

	return (
		<Box flex>
			<ProgramDeviceModal
				selected={selected}
				deviceTypes={deviceTypes}
				onClose={() => {
					openModal(false);
				}}
				onSubmit={(device) => {
					if(device.id){
						updateDevicePlaceholder({args: {
							id: device.id,
							requiresMutex: device.requiresMutex,
							name: device.name,
							type: device.type,
						}})
					}else{
						addDevicePlaceholder({args: {
							requiresMutex: device.requiresMutex,
							name: device.name,
							type: device.type
						}}).then(() => {
							openModal(false)
							refetch()
						})
					}

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
					pad="none"
					// onClickItem={({item}) => {
					// 	props.history.push(`${props.match.url}/${item.id}`)
					// }}
					primaryKey="name"
					data={devices}>
					{(datum) => (
						<Box direction="row">
							<Box 
								pad="small" 
								flex
								onClick={() => {
									props.history.push(`${props.match.url}/${datum.id}`)
								}}
								hoverIndicator
								justify="between"
								align="center"
								direction="row">
								<Text size="small">{datum.name}</Text>
							{datum.plugins?.length > 0 && (
								<Button 
									disabled
									hoverIndicator
									plain 
									size="small"
									style={{padding: 3, borderRadius: 6}} icon={<Action size="20px" />} /> )}
			
							</Box>

							<Button 
								onClick={() => onEdit(datum)}
								hoverIndicator 
								plain
								size="small" 
								style={{padding: 6, borderRadius: 3}} 
								icon={<MoreVertical size="small" />} />
						</Box>
					)}
				</List>
			</Box>
		</Box>

	)
}