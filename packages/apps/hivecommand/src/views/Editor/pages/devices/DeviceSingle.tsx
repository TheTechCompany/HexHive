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

	const [addDevicePlugin, addPluginInfo] = useMutation((mutation, args: { plugin: string, configuration: any }) => {
		let conf = [];

		if (args.configuration) {
			for (var k in args.configuration) {
				conf.push({ id: nanoid(), key: k, value: args.configuration[k] })
			}
		}

		const item = mutation.updateCommandProgramDevicePlaceholders({
			where: { id: deviceId },
			update: {
				pluginsConfiguration: [{
					create: conf.map((x) => ({
						node: {
							id: x.id,
							key: x.key,
							value: x.value
						}
					}))
				}],
				plugins: [{
					connect: [{
						where: { node: { id: args.plugin } },
						edge: {
							configuration: conf.map((x) => x.id)
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
			}

			commandProgramDevicePlaceholders(where: {id: $id}){
				id
				name

				interlocks {
					id
					inputDevice {
						id 
						name
					}
					inputDeviceKey { 
						key
					}
				}
				pluginsConfiguration {
					id
					key
					value
				}

				pluginsConnection {
					edges {
						configuration
						

						node {
							id
							name
						}
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

	const devices = data?.commandPrograms?.[0]?.devices;
	const plugins = data?.commandProgramDevicePlugins || [];

	return (
		<Box flex>
			<DeviceInterlock
				devices={devices}
				open={interlockModalOpen}
				onClose={() => {
					openInterlockModal(false)
				}}
				onSubmit={(lock) => {
					console.log(lock)
					addDeviceInterlock({
						args: {
							inputDeviceId: lock.inputDevice,
							inputDeviceKeyId: lock.inputDeviceKey,
							comparator: lock.comparator,
							assertion: lock.assertion
						}
					}).then(() => {
						refetch();
					})
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
								<Text size="small">{datum.inputDevice.name}</Text>
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
					data={device?.pluginsConnection?.edges?.map((x) => ({
						...x.node,
						configuration: device?.pluginsConfiguration?.filter((y) => x.configuration.indexOf(y.id) > -1)
					}))}>
					{(datum) => (
						<Box direction="row" justify="between" align="center">
							<Text size="small">{datum.name}</Text>
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