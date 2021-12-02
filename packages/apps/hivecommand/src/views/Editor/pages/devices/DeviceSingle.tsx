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

	const query = useQuery({ suspense: false, staleWhileRevalidate: true })

	const selectPlugin = (plugin: any) => {
		openModal(true);
		setSelected(plugin)
	}

	const [ addDeviceInterlock, addInterlockInfo ] = useMutation((mutation, args: {
		inputDeviceId: string,
		inputDeviceKeyId: string,
		comparator: string,
		assertion: string;
		action: string
	}) => {
		const item = mutation.updateCommandProgramDevicePlaceholders({
			where: {id: deviceId},
			update: {
				interlocks: [{
					create: [{
						node: {
							inputDevice: {connect: {where: {node: {id: args.inputDeviceId}}}},
							inputDeviceKey: {connect: {where: {node: {id: args.inputDeviceKeyId}}}},
							comparator: args.comparator,
							assertion: args.assertion,
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
		comparator: string,
		assertion: string;
		action: string
	}) => {
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
							assertion: args.assertion,
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
						}
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
					assertion
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

	const flows = data?.commandPrograms?.[0]?.program?.map((item) => [item, ...(item.children || []).map((x) => ({...x, name: `${item.name} - ${x.name}`}))]).reduce((prev, curr) => prev.concat(curr), [])
	const devices = data?.commandPrograms?.[0]?.devices;
	const plugins = data?.commandProgramDevicePlugins || [];

	return (
		<Box flex>
			<DeviceInterlock
				devices={devices}
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
								assertion: lock.assertion,
								action: lock.action
							}
						}).then(() => {
							refetch();
						})
					}
		
				}} />
			<DevicePluginModal
				selected={selected}
				open={modalOpen}
				onSubmit={(config) => {

					addDevicePlugin({ args: config })
				}}
				onClose={() => openModal(false)}
				devices={devices}
				plugins={plugins}
				flows={flows}
			/>
			<Box direction="row" justify="between" align="center" pad="small">
				<Text size="medium">{device?.name}</Text>

			</Box>

			<Box gap="xsmall" direction="row" flex>
				<Box flex>
					<Box direction="row" justify="between" align="center">
						<Text>Interlocks</Text>
						<Button
							size='small'
							hoverIndicator
							onClick={() => openInterlockModal(true)}
							plain
							style={{ padding: 6, borderRadius: 3 }}
							icon={<Add size="small" />}
						/>
					</Box>
					<List
						pad="small"
						primaryKey="name"
						data={device?.interlocks || []}>
						{(datum) => (
							<Box direction="row" justify="between" align="center">
								<Text size="small">{datum?.inputDevice?.name}</Text>
								<Button
									onClick={() => {
										openInterlockModal(true)
										setSelectedInterlock(datum)
										// selectPlugin(datum)
									}}
									plain
									style={{ padding: 6, borderRadius: 3 }}
									icon={<MoreVertical size="small" />}
									hoverIndicator />
							</Box>
						)}
					</List>
				</Box>
			<Box flex>
				<Box direction="row" justify="between" align="center">
					<Text>Controllers</Text>
					<Button
						size='small'
						hoverIndicator
						onClick={() => openModal(true)}
						plain
						style={{ padding: 6, borderRadius: 3 }}
						icon={<Add size="small" />}
					/>
				</Box>
				<List
					pad="small"
					primaryKey="name"
					data={device?.plugins || []}>
					{(datum) => (
						<Box direction="row" justify="between" align="center">
							<Text size="small">{datum.plugin?.name} {datum?.rules && `- ${datum?.rules?.name}`}</Text>
							<Button
								onClick={() => selectPlugin(datum)}
								plain
								style={{ padding: 6, borderRadius: 3 }}
								icon={<MoreVertical size="small" />}
								hoverIndicator />
						</Box>
					)}
				</List>
			</Box>
			</Box>


		</Box>
	)
}