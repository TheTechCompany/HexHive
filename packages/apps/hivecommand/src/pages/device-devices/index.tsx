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
				calibrations {
					id
					device {
						id
						name
					}

					deviceKey {
						id
						type
						key
					} 

					min
					max
				}
				activeProgram {
					devices {
						id
						name

						type {
							id
							name

							state {
								id
								type
								key
								min
								max
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
			deviceKey: string,
			min: string
			max: string
		}[]
	}) => {
		const peripheralUpdate = mutation.updateCommandDevices({
			where: {id: props.match.params.id},
			update: {
				calibrations: [
					...args.conf.filter((a) => a.id).map((x) => ({
						where: {node: {id: x.id}},
						update: {
							node: {
								min: x.min,
								max: x.max
							}
						}
					})),
					{
						create: args.conf.filter((a) => !a.id).map((x) => ({
							node: {
								device: {connect: {where: {node: {id: x.device}}}},
								deviceKey: {connect: {where: {node: {key: x.deviceKey, device: {usedIn: {id_IN: [x.device]}}}}}},
								min: x.min,
								max: x.max
							}
						}))
					}
				]
			}
		})
		return {
			item: {
				...peripheralUpdate.commandDevices?.[0]
			}
		}
	})

	const device = data?.commandDevices?.[0];


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
					if(device.calibrated){
						console.log("CALIBRATED", device.calibrated)
						updateDeviceConfiguration({
							args: {
								conf: device.calibrated.map((x) => ({
									id: x.id,
									device: device.id,
									deviceKey: x.key,
									min: x.min,
									max: x.max
								}))
							}
						})

					}
					// if(device.configuration){
					// 	updateDeviceConfiguration({
					// 		args:{ 
					// 			conf: device.configuration.map((x) => ({
					// 				id: x.id,
					// 				device: device.id,
					// 				conf: x.confKey,
					// 				value: x.value
					// 			}))
					// 		}
					// 	})
					// }
				}}
				selected={selected}
				configuration={[]}
				deviceTypes={data?.commandProgramDevices}
				/>
			<Box pad="xsmall" direction="row" background="accent-2">
				<Text>{device?.name} - Devices</Text>

			</Box>
			<Box overflow="scroll" flex>
				<List
					pad="none" 
					onClickItem={({item}) => {
						let calibration = device.calibrations?.filter((a) => a.device.id == item.id);

						// item.calibrated = calibration;

						// let configuration = device.configuredDevices.filter((a) => a.device.id == item.id)

						// console.log("Item", configuration)

						// item.configuration = configuration;

						openModal(true)
						setSelected({...item, calibrated: calibration})
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