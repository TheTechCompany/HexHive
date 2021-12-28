import React, { useState } from 'react';
import { Box, Text, List, Button } from 'grommet'
import { RouteComponentProps } from 'react-router-dom';
import { refetch, useMutation, useQuery } from '@hexhive/client';
import { gql, useQuery as useApollo, useApolloClient } from '@apollo/client'
import { Add, MoreVertical } from 'grommet-icons';
import { DevicePluginModal } from '../../../../components/modals/device-plugin';
import { nanoid } from 'nanoid';
import { NamedTypeNode, ObjectTypeDefinitionNode } from 'graphql';
import { DeviceInterlock } from '../../../../components/modals/device-interlock';
import { DeviceSetpointModal } from '../../../../components/modals/device-setpoint';
import { ListBox } from '../../../../components/ListBox';

export interface DeviceSingleProps extends RouteComponentProps<any> {
	program?: string;
}


const conditionGQL = gql`
type Transition {
	conditions: [Condition]
}

type Condition @exclude {
	inputDevice: Device @display(key:"name")
	inputDeviceKey: DeviceState @display(key:"key") @requires(key: "inputDevice")
	comparator: String @display
	assertion: String @display
}
`

export const DeviceSingle: React.FC<DeviceSingleProps> = (props) => {

	const client = useApolloClient();

	const deviceId = props.match.params.id;

	const [selected, setSelected] = useState<any>()
	const [selectedInterlock, setSelectedInterlock] = useState<any>()
	const [modalOpen, openModal] = useState<boolean>(false);
	const [interlockModalOpen, openInterlockModal] = useState<boolean>(false);
	const [ setpointModalOpen, openSetpointModal ] = useState<boolean>(false);
	const query = useQuery({ suspense: false, staleWhileRevalidate: true })

	const selectPlugin = (plugin: any) => {
		openModal(true);
		setSelected(plugin)
	}

	const [ updateSetpoint, updateSetpointInfo ] = useMutation((mutation, args: {
		id: string,
		name: string,
		type: 'ratio' | 'value',
		key: string,
		value: string
	}) => {
		const item = mutation.updateCommandProgramDevicePlaceholders({
			where: {id: deviceId},
			update: {
				setpoints: [{
					where: {node: {id: args.id}},
					update: {
						node: {
							name: args.name,
							key: {connect: {where: {node: {id: args.key}}}},
							type: args.type,
							value: args.value
						}
					}
				}]
			}
		})

		return {
			item: {
				...item?.commandProgramDevicePlaceholders?.[0]
			}
		}
	})
	const [ addSetpoint, addSetpointInfo ] = useMutation((mutation, args: {
		name: string,
		type: "ratio" | "value",
		key: string,
		value: string
	}) => {
		const item = mutation.updateCommandProgramDevicePlaceholders({
			where: {id: deviceId},
			update: {
				setpoints: [{
					create: [{
						node: {
							name: args.name,
							key: {connect: {where: {node: {id: args.key}}}},
							type: args.type,
							value: args.value
						}
					}]
				}]
			}
		})
		return {
			item: {
				...item.commandProgramDevicePlaceholders?.[0]
			}
		}
	})

	const [ addDeviceInterlock, addInterlockInfo ] = useMutation((mutation, args: {
		inputDeviceId: string,
		inputDeviceKeyId: string,
		type: string,
		comparator: string,
		assertion: string;
		action: string
	}) => {
		let assertionValue = {};
		if(args.type == "setpoint"){
			assertionValue = {
				setpoint: {connect: {where: {node: {id: args.assertion}}}}
			}
		}else if(args.type == "value"){
			assertionValue = {
				value: args.assertion
			}
		}
		const item = mutation.updateCommandProgramDevicePlaceholders({
			where: {id: deviceId},
			update: {
				interlocks: [{
					create: [{
						node: {
							inputDevice: {connect: {where: {node: {id: args.inputDeviceId}}}},
							inputDeviceKey: {connect: {where: {node: {id: args.inputDeviceKeyId}}}},
							comparator: args.comparator,
							assertion: {create: {node: {type: args.type, ...assertionValue}}},
							action: {connect: {where: {node: {id: args.action}}}}
						}
					}]
				}]
			}
		})

		return {
			item: {
				...item.commandProgramDevicePlaceholders?.[0]
			}
		}
	})

	const [ updateDeviceInterlock, updateInterlockInfo ] = useMutation((mutation, args: {
		id: string;
		inputDeviceId: string,
		inputDeviceKeyId: string,
		type: string,
		comparator: string,
		assertion: string;
		action: string
	}) => {
		let assertionUpdate = {};
		if(args.type == "setpoint"){
			assertionUpdate = {
				setpoint: {connect: {where: {node: {id: args.assertion}}}}
			}
		}else if(args.type == "value"){
			assertionUpdate = {
				value: args.assertion
			}
		}
		const item = mutation.updateCommandProgramDevicePlaceholders({
			where: {id: deviceId},
			update: {
				interlocks: [{
					where: {node: {id: args.id}},
					update: {
						node: {
							inputDevice: {connect: {where: {node: {id: args.inputDeviceId}}}},
							inputDeviceKey: {connect: {where: {node: {id: args.inputDeviceKeyId}}}},
							comparator: args.comparator,
							assertion: {create: {node: {type: args.type, ...assertionUpdate}}},
							action: {connect: {where: {node: {id: args.action}}}}
						}
					}
				}]
			}
		})

		return {
			item: {
				...item.commandProgramDevicePlaceholders?.[0]
			}
		}
	})

	const [addDevicePlugin, addPluginInfo] = useMutation((mutation, args: { id: string, rules: string, plugin: string, configuration: any }) => {
		let conf = [];

		if (args.configuration) {
			for (var k in args.configuration) {
				conf.push({ id: nanoid(), key: k, value: args.configuration[k] })
			}
		}

		console.log({args})
		let ruleUpdate = {};

		if(args.rules){
			ruleUpdate = {
				rules: {connect: {where: {node: {id: args.rules}}}}
			}
			
		}


		let pluginUpdate = {};

		if(args.id){
			pluginUpdate = {
				plugins: [{
					where: {node: {id: args.id}},
					update: {
						node: {
							plugin: {connect: {where: {node: {id: args.plugin}}}},
							...ruleUpdate,
							configuration: conf.map((c) => ({
								where: {node: {key: c.key}},
								update: {
									node: {
										key: c.key,
										value: c.value
									}
								}
							}))
						}
					}
				}]
			}
		}else{
			pluginUpdate = {
				plugins: [{
					create: {
						node: {
							plugin: {connect: {where: {node: {id: args.plugin}}}},
							...ruleUpdate,
							configuration: {
								create: conf.map((c) => ({
									node: {
										key: c.key,
										value: c.value
									}
								}))
							}
						}
					}
				}]
			}
		}

		const item = mutation.updateCommandProgramDevicePlaceholders({
			where: { id: deviceId },
			update: {
				...pluginUpdate,
			}
		})

		return {
			item: {
				...item.commandProgramDevicePlaceholders?.[0]
			}
		}
	})
	const { data } = useApollo(gql`
		query Q ($id: ID!, $programId: ID) {
			commandProgramDevicePlugins {
				id
				name
				config {
					key
					type

					requiresConnection {
						edges {
							key

							node {
								key
							}
						}
					}
				}
			}

			commandPrograms(where: {id: $programId}){
				devices {
					id
					name
					type {
						state {
							id 
							key
							type
						}
					}

					setpoints {
						id
						name
					}
				}

				program {
					id
					name
					children {
						id
						name
					}
				}
			}

			commandProgramDevicePlaceholders(where: {id: $id}){
				id
				name

				type {
					actions {
						id
						key
					}

					state {
						id
						key
						type
					}
				}

				setpoints {
					id
					name
					type
					key {
						id
						key
					}
					value
				}
				interlocks {
					id
					inputDevice {
						id 
						name
					}
					inputDeviceKey { 
						id
						key
					}

					action {
						id
					}

					comparator
					assertion {
						type
						value
						setpoint {
							id
							name
						}
					}
				}

				plugins {
					id
					plugin {
						id
						name
					}
					configuration {
						id
						key
						value
					}
					rules {
						id
						name
					}
				}
			

			}
		}
	`, {
		variables: {
			id: deviceId,
			programId: props.program
		}
	})

	const refetch = () => {
		return client.refetchQueries({include: ['Q']})
	}

	const device = data?.commandProgramDevicePlaceholders?.[0];

	console.log(device)

	const flows = data?.commandPrograms?.[0]?.program?.map((item) => [item, ...(item.children || []).map((x) => ({...x, name: `${item.name} - ${x.name}`}))]).reduce((prev, curr) => prev.concat(curr), [])
	const devices = data?.commandPrograms?.[0]?.devices;
	const plugins = data?.commandProgramDevicePlugins || [];

	return (
		<Box flex>
			<DeviceInterlock
				devices={devices}
				device={device}
				actions={device?.type?.actions || []}
				open={interlockModalOpen}
				selected={selectedInterlock}
				onClose={() => {
					openInterlockModal(false)
				}}
				onSubmit={(lock) => {
					console.log(lock)
					if(lock.id){
						updateDeviceInterlock({
							args: {
								id: lock.id,
								inputDeviceId: lock.inputDevice,
								inputDeviceKeyId: lock.inputDeviceKey,
								comparator: lock.comparator,
								type: lock.valueType,
								assertion: lock.assertion,
								action: lock.action
							}
						}).then(() => {
							refetch()
						})
					}else{
						addDeviceInterlock({
							args: {
								inputDeviceId: lock.inputDevice,
								inputDeviceKeyId: lock.inputDeviceKey,
								comparator: lock.comparator,
								type: lock.valueType,
								assertion: lock.assertion,
								action: lock.action
							}
						}).then(() => {
							refetch();
						})
					}
		
				}} />
			<DeviceSetpointModal
				selected={selected}
				onSubmit={(setpoint) => {

					if(setpoint.id){
						updateSetpoint({
							args: {
								id: setpoint.id,
								...setpoint
							}
						}).then(() => {
							openSetpointModal(false)
							refetch()
						})
					}else{
					addSetpoint({
						args: {
							...setpoint
						}
					}).then(() => {
						openSetpointModal(false)
						refetch()
					})
					}	
				}}
				onClose={() => {
					openSetpointModal(false)
				}}
				stateItems={device?.type?.state}
				open={setpointModalOpen} />
			<DevicePluginModal
				selected={selected}
				open={modalOpen}
				onSubmit={(config) => {

					addDevicePlugin({ args: config }).then(() => {
						refetch()
					})
				}}
				onClose={() => openModal(false)}
				devices={devices}
				plugins={plugins}
				flows={flows}
			/>
			<Box direction="row" justify="between" align="center" pad="small">
				<Text size="medium">{device?.name}</Text>
			</Box>
			
			<Box flex gap="xsmall" direction="column">
			<Box gap="xsmall" direction="row" flex>
				<ListBox 
					label="Interlocks" 
					onAdd={() => openInterlockModal(true)}
					data={device?.interlocks || []}
					onItemEdit={(item) => {openInterlockModal(true); setSelectedInterlock(item)}}
					renderItem={(item) => {
						return (
							<Text size="small">{item.inputDevice?.name}</Text>
						)
					}} />
				<ListBox 
					label="Controllers"
					onAdd={() => openModal(true)}
					data={device?.plugins || []}
					onItemEdit={(item) => {selectPlugin(item)}}
					renderItem={(item) => {
						return (
							<Text size="small">{item.plugin?.name} {item?.rules && `- ${item?.rules?.name}`}</Text>
						)
					}} />

			
			</Box>
			<Box gap="xsmall" flex direction="row">
				<ListBox
					label="Setpoints"
					onAdd={() => openSetpointModal(true)}
					onItemEdit={(item) => {openSetpointModal(true); setSelected(item)}}
					data={device?.setpoints || []}
					renderItem={(item) => {
						return (
							<Text size="small">{item.name}</Text>
						)
					}} />
				<ListBox
					label="Actions"
					data={device?.type?.actions || []}
					renderItem={(item) => (
						<Text>{item.key}</Text>
					)} />
			
			</Box>
			</Box>


		</Box>
	)
}