import React, {useState} from 'react';
import { Box, List, Text } from 'grommet'
import { useQuery, gql } from '@apollo/client';
import { ProgramDeviceModal } from '../../components/modals/program-device';
import { useMutation } from '@hexhive/client';

export const DeviceDevices : React.FC<any> = (props) => {
	
	const [ modalOpen, openModal ] = useState<boolean>(false);

	const [ selected, setSelected ] = useState<any>()

	const { data } = useQuery(gql`
		query Q ($id: ID){
			commandProgramDevices{
				id
				name
			}
			commandDevices(where: {id: $id}){
				name
				configuredDevices {
					id
					device {
						id
					}
					conf {
						id
					}
					value
				}
				activeProgram {
					devices {
						id
						name

						type {
							id
							name

							configuration {
								id
								key
								type
							}
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

	const [ updateDeviceConfiguration, updateInfo ] = useMutation((mutation, args: {
		conf: {
			id?: string;
			device: string,
			conf: string,
			value: string
		}[]
	}) => {
		const peripheralUpdate = mutation.updateCommandDevices({
			where: {id: props.match.params.id},
			update: {
				configuredDevices: [{
					create: args.conf.filter((a) => a.id == undefined).map((conf_item) => ({
						node: {
							device: {connect: {where: {node: {id: conf_item.device}}}},
							conf: {connect: {where: {node: {id: conf_item.conf}}}},
							value: conf_item.value
						}
					}))
				}, ...args.conf.filter((a) => a.id != undefined).map((conf_item) => ({
					where: {node: {id: conf_item.id}},
					update: {
						node: {
							device: {connect: {where: {node: {id: conf_item.device}}}},
							conf: {connect: {where: {node: {id: conf_item.conf}}}},
							value: conf_item.value
						}
					}
				}))]
			}
		})
		return {
			item: {
				...peripheralUpdate.commandDevices?.[0]
			}
		}
	})

	const device = data?.commandDevices?.[0];

	console.log(device?.activeProgram?.devices?.find((a) => a?.type?.configuration?.length > 0)?.type?.configuration)

	return (
		<Box
			overflow="hidden"
			round="xsmall"
			flex
			background="neutral-1"
			>
			<ProgramDeviceModal
				open={modalOpen}
				onClose={() => {
					openModal(false);
				}}
				onSubmit={(device) => {
					console.log("DEVICE", device)
					if(device.configuration){
						updateDeviceConfiguration({
							args:{ 
								conf: device.configuration.map((x) => ({
									id: x.id,
									device: device.id,
									conf: x.confKey,
									value: x.value
								}))
							}
						})
					}
				}}
				selected={selected}
				configuration={selected?.type?.configuration}
				deviceTypes={data?.commandProgramDevices}
				/>
			<Box pad="xsmall" direction="row" background="accent-2">
				<Text>{device?.name} - Devices</Text>

			</Box>
			<Box overflow="scroll" flex>
				<List
					pad="none" 
					onClickItem={({item}) => {
						let configuration = device.configuredDevices.filter((a) => a.device.id == item.id)

						console.log("Item", configuration)

						// item.configuration = configuration;

						openModal(true)
						setSelected({...item, configuration: configuration})
					}}
					data={device?.activeProgram?.devices || []} >
					{(datum) => (
						<Box
							align="center"
							justify="between"
							pad="xsmall" 
							direction="row">
							<Text size="medium">{datum.name}</Text>

							<Text size="small">{datum?.type?.name}</Text>
						</Box>
					)}
				</List>
			</Box>
		</Box>
	)
}