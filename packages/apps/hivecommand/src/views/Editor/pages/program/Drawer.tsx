import React, { useState, useEffect} from 'react';
import { Box, Text, Button, List, TextInput, Select } from 'grommet'
import { Add, MoreVertical, Save } from 'grommet-icons';
import { FormInput, FormControl, InfiniteCanvasNode, InfiniteCanvasPath } from '@hexhive/ui';
import { ActionModal } from '../../../../components/modals/action';
import { useProgramEditor } from './context';
import { useMutation } from '@hexhive/client';
import { gql, operationName } from '@apollo/client'
import { NamedTypeNode, ObjectTypeDefinitionNode } from 'graphql';
import { ProgramCanvasModal } from '../../../../components/modals/program-canvas';
import { nanoid } from 'nanoid';
import _ from 'lodash';

export interface ProgramDrawerProps {
}

const pathType = {
	type: "Condition",
	gconf: gql`
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
}


const types = [
	{
		type: "Clock",
		gconf: gql`
			type Timer {
				timeout: Int @unit(label: "ms")
			}
		`
	},
	{
		type: "Cycle",
		gconf: gql`
			type PID {
				p: Float
				i: Float
				d: Float
				target: Device
				actuator: Device
			}
		`
	},
	{
		type: "Action",
		gconf: gql`
			type Action {
				actions: [ActionItem]
			}			
			
			type ActionItem @exclude {
				device: Device @display(key: "name")
				request: DeviceAction @display(key: "key") @requires(key: "device")
				release: Boolean
			}
		`
	},
	{
		type: "sub-process",
		gconf: gql`
			type SubProcess {
				process: Process
			}
		`
	},
	{
		type: "Trigger",
		gconf: gql`
			type Trigger {
				name: String
			}
		`
	}
]

export const ProgramDrawer : React.FC<ProgramDrawerProps> = (props) => {

	const [ existingItem, setSelected ] = useState<any>()

	const [ edited, setEdited ] = useState<boolean>(false);
	const [ info, setInfo ] = useState<{[key: string]: {id?: string, value: any}}>({})

	const [ modalOpen, openModal ] = useState<boolean>(false);

	const { devices, refresh, program, selected: node } = useProgramEditor()

	const [ createSchema, setCreateSchema ] = useState<ObjectTypeDefinitionNode>()

	const { selected, conditions, activeProgram, selectedType } = useProgramEditor()

	useEffect(() => {
		let newConf : any = {};
		switch(selectedType){
			case 'node':

				selected?.extras?.configuration?.forEach((conf) => {
					let isArray = conf.key.match(/\[(.+)\]\[(.+)\]-(.+)/);
					// if(isArray){
					// 	//isArray 0 - full, 1 key, 2 id, 3 field
						
					// 	if(!newConf[conf.key]) newConf[conf.key] = [];

					// 	// if(!newConf[conf.key].find((a) => ))

					// 	newConf[conf.key]

					// 	newConf[conf.key].push({value: conf.value});

					// }else{
						if(conf.key != "actions"){
							newConf[conf.key] = {id: conf.id, value: conf.value};
						}

					// }
					
				})
				console.log("NEW", selected)
				setInfo({actions: selected?.extras?.configuration?.find((a) => a.key == "actions") || {value: []}, conf: newConf})

			break;	
		case 'path':
			console.log("Path ", conditions, selected?.extras)
				setInfo({
		
						conditions: {
							value: conditions?.filter((a) => selected?.extras?.configuration?.conditions?.indexOf(a.id) > -1)
						}
					
				})
				
			break;
		default:
			break;
		}

	}, [selected, selectedType, conditions]);


	const [ updatePathConditions, updatePathConditionInfo ] = useMutation((mutation, args: {
		id: string,
		conditions: {
			id?: string;
			inputDevice: string | {id?: string},
			inputDeviceKey: string | {id?: string},
			comparator: string,
			assertion: string
		}[]
	}) => {

		let newIds = args.conditions.filter((a) => !a.id).map((x) => nanoid())
		let totalIds = args.conditions.filter((a) => a.id).map((x) => x.id).concat(newIds);

		const res = mutation.updateCommandProgramFlows({
			where: {id: args.id},
			update: {
				nodes: [{
					where: {
						node: {
							id: (selected as InfiniteCanvasPath).source
						}
					},
					update: {
						node: {
							next: [{
								where: {
									edge: {
										id: selected.id
									}
								},
								update: {
									edge: {
										conditions: totalIds
									}
								}
							}]
						}
					}
				}],
				conditions: [{
					create: args.conditions.filter((a) => !a.id).map((condition, ix) => ({
					
							node: {
								id: newIds[ix],
								inputDevice: {
									connect: {
										where: {
											node: {
												 id: (typeof(condition.inputDevice) == "object") ? condition.inputDevice.id : condition.inputDevice 
											}
										},

									},
									disconnect: {
										where: {
											node: {
												id_NOT: (typeof(condition.inputDevice) == "object") ? condition.inputDevice.id : condition.inputDevice 
											}
										}
									}
								},
								inputDeviceKey: {
									connect: {
										where: {
											node: {
												id: (typeof(condition.inputDeviceKey) == "object") ? condition.inputDeviceKey.id : condition.inputDeviceKey
											}
										}
									},
									disconnect: {
										where: {
											node: {
												id_NOT:  (typeof(condition.inputDeviceKey) == "object") ? condition.inputDeviceKey.id : condition.inputDeviceKey
											}
										}
									}
								},
								comparator: condition.comparator,
								assertion: condition.assertion
							}
						
					})),		 
				},
					...args.conditions.filter((a) => a.id).map((condition) => ({
						where: {
							node: {id: condition.id}
						},
						update: {
							node: {
								inputDevice: {connect: {where: {node: {id:  (typeof(condition.inputDevice) == "object") ? condition.inputDevice.id :condition.inputDevice}}}},
								inputDeviceKey: {connect: {where: {node: {id: (typeof(condition.inputDeviceKey) == "object") ? condition.inputDeviceKey.id : condition.inputDeviceKey}}}},
								comparator: condition.comparator,
								assertion: condition.assertion
							}
						}
					}))
				
				]
			}
		})

		// mutation.updateCommandProgramFlows({
		// 	where: {n}
		// })
		return {
			item: {
				...res.commandProgramFlows?.[0]
			}
		}
	})

	const [ removeNodeAction, removeNodeInfo ] = useMutation((mutation, args: {nodeId: string, id: string}) => {
		const removeResult = mutation.updateCommandProgramNodes({
			where: {id: args.nodeId},
			update: {
				actions: [{
					delete: [{where: {node: {id: args.id}}}]
				}]
			}
		})

		return {
			item: {
				...removeResult.commandProgramNodes[0]
			}
		}
	})

	const [ removePathConditions, removeInfo ] = useMutation((mutation, args: {id: string}) => {
		const removeResult = mutation.updateCommandProgramFlows({
			where: {id: activeProgram},
			update: {
				conditions: [{
					delete: [{
						where: {
							node: {
								id: args.id
							}
						}
					}]
				}]
			}
		})
		return {
			item: {
				...removeResult?.commandProgramFlows?.[0]
			}
		}
	})

	const [ updateNodeConfiguration, updateConfigurationInfo ] = useMutation((mutation, args: {
		id: string,
		actions?: {
			id?: string;
			device: {id: string} | string;
			request: {id: string} | string;
			release: boolean;
		}[]
		configuration?: {id?: string, key: string, value: string}[]
	}) => {

		console.log(args.configuration)

		let mutationElem = {}

		let actionMutation = {}

		if(args.actions){
			actionMutation = {
				actions: [{
					create: args.actions.filter((a) => !a.id).map((action) => ({
							node: {
								release: action.release,
								device: {connect: {where: {node: {id: typeof(action.device) == "object" ? action.device.id : action.device}}}},
								request: {connect: {where: {node: {id: typeof(action.request) == "object" ? action.request.id : action.request, device: {usedIn: {id: typeof(action.device) == "object" ? action.device.id : action.device}}}}}}
							}
						}))
					},
					...args.actions.filter((a) => a.id).map((action) => ({
						where: {node: {id: action.id}},
						update: {	
							node: {
									release: action.release,
									request: {
										connect: {
											where: {
												node: {
													id: typeof(action.request) == "object" ? action.request.id : action.request, 
													device: {
														usedIn: {
															id: typeof(action.device) == "object" ? action.device.id : action.device
														}
													}
												}
											}
										},
										disconnect: {
											where: {
												node: {
													id_NOT: typeof(action.request) == "object" ? action.request.id : action.request, 
												}
											}
										}
									},
									device: {
										connect: {
											where: {
												node: {
													id: typeof(action.device) == "object" ? action.device.id : action.device
												}
											}
										},
										disconnect: {
											where: {
												node: {
													id_NOT: typeof(action.device) == "object" ? action.device.id : action.device
												}
											}
										}
									}
								}
							}
						}))
					
				]
			}
		}

		if(args.configuration){
			mutationElem = {
				configuration: [{
					create: args.configuration.filter((a) => !a.id).map((conf) => ({
						node: {
							key: conf.key,
							value: conf.value
						}
					}))
				}, ...args.configuration.filter((a) => a.id).map((conf) => ({
					where: {
						node: {id: conf.id}
					},
					update: {
						node: {
							key: conf.key,
							value: conf.value
						}
					}
				}))]
			}
		}

		const addActions = mutation.updateCommandProgramNodes({

			where: {id: args.id},
			update: {
				...mutationElem,
				...actionMutation,
				// actions: [{
				// 	create: [{
				// 		node: {
				// 			request: {connect: {
				// 				where: {
				// 					node: {
				// 						device: {
				// 							usedIn: {
				// 								id: 
				// 							}
				// 						}
				// 					}
				// 				}
				// 			}}
				// 		}
				// 	}]
				// }]
			}
		})
		// if(!args.configuration.id){
		// 	mutationElem = {
		// 		create: [{
		// 			node: {
		// 				timer: args.configuration.timer,
		// 				actions: args.configuration.actions.map((action) => ({
		// 					node: {
		// 						request: action.operation,
		// 						device: {
		// 							connect: {
		// 								where: {node: {id: action.device}}
		// 							}
		// 						}
		// 					}
		// 				}))
		// 			}
		// 		}]
		// 	}
		// }else{
		// 	mutationElem = {
		// 		where: {
		// 			node: {
		// 				id: args.configuration.id
		// 			}
		// 		},
		// 		update: {
		// 			node: {
		// 				timer: args.configuration.timer,
		// 				actions: [{
		// 					update: args.configuration.actions.map((action) => ({
		// 						node: 	{
		// 							request: action.operation, 
		// 							device: {
		// 								connect: {
		// 									where: {node: {id: action.device}}
		// 								}
		// 							}
		// 						}
		// 					}))
		// 				}]
		// 			}
		// 		},
				
		// 	}
		// }
		// const addAction = mutation.updateCommandProgramNodes({
		// 	where: {id: args.id},
		// 	update: {
		// 		configuration: [{
		// 			...mutationElem
		// 			// create: args.configuration.filter((a) =)
		// 			// [{
		// 			// 	node: {
		// 			// 		timer: 
		// 			// 	}
		// 			// }],
					 
		// 		}]
		// 	}
		// })

		return {
			item: {
				...addActions.commandProgramNodes[0]
			},
			err: null
		}
	})

	const updateNodeConf = () => {
		console.log(info);

		let conf = []
		for(var k in info.conf){
			conf.push({
				id: info.conf[k]?.id,
				key: k, 
				value: info.conf[k]?.value
			})
		}
		updateNodeConfiguration({
			args: {
				id: selected.id,
				configuration: conf
			}
		}).then(() => {
			// refetch()
		})
	}


	const onChange = (key: string, value: any) => {
		setInfo({
			...info,
			conf: {
				...info.conf,
				[key]: {
					...info.conf?.[key],
					value
				}
			}
		})
		console.log("INFO", info)
		setEdited(true);
	}

	useEffect(() => {
		setEdited(false)
		// setInfo(node.extras)
	}, [node])

	const renderListItem = (
		datum: any, 
		type: {
			fields: {
				type: string;
				isList: boolean;
				directives?: {
					name: string, 
					args: {
						name: string, 
						value: string
					}[]
				}[], 
				key?: string
			}[]} ) => {

		console.log(datum)
		
		
		let keys = type.fields.filter((x) => x.directives.map((x) => x.name).indexOf('display') > -1).map((x) => {
			let d = datum[x.key]
			let field = x.directives?.find((a) => a.name == 'display')?.args?.find((a) => a.name == 'key')?.value
			console.log(x.directives)
			return field ? d?.[field] : d;
		})

		console.log(datum)
		// let picked = _.pick(datum, keys)
		return keys.join(' ')
	}

	const renderSelectedSettings = () => {
        // if(!selected || selected.key != 'node') return;

        // let node = nodes.find((a) => a.id == selected.id)
		let type = selectedType == "node" ? types.find((a) => a.type == node?.extras?.icon) : pathType;

		let form_type = (type?.gconf?.definitions || []).map((def : ObjectTypeDefinitionNode) => {
			return {
				name: def.name.value,
				object: def,
				isInput: def?.directives?.find((a) => a?.name?.value == "exclude") != undefined,
				fields: def.fields.map((field) => ({
					key: field.name.value,
					type: field.type.kind == "ListType" ? (field.type.type as NamedTypeNode).name.value : (field.type as NamedTypeNode)?.name?.value,
					isList: field.type.kind == "ListType",
					directives: field.directives.map((x) => ({name: x.name.value, args: x.arguments.map((x) => ({name: x.name.value, value: (x.value as any).value }))}))
					// type: field.type.name.value
				}))
			}
		})

		return (
			<Box gap="xsmall">
				<Box 
					justify={!edited ? "start": "between"}
					direction="row" 
					align="center">
					<Text>{type?.type}</Text>
					{edited && <Button 
						plain
						onClick={updateNodeConf}
						style={{padding: 6, borderRadius: 3}}
						size="small" 
						hoverIndicator 
						icon={<Save size="small" />} />}
				</Box>
				{form_type?.filter((a) => !a.isInput)?.map((item) => 
					item.fields.map((field) => {
						console.log("FIELD", field.key, field, info[field.key], info)
						return field.isList ? (
							<Box>
								<ProgramCanvasModal 
									modal={createSchema}
									selected={existingItem}
									onSubmit={(item) => {
										console.log(item)
										
										if(selectedType == "node"){

											// let confUpdate = [];
											// if(item.id){
												
											// })
											updateNodeConfiguration({
												args: {
													id: selected.id,
													actions: [item],
													configuration: []
												}

											}).then(() => {
												refresh()
											})
										}else{

											updatePathConditions({
												args: {
													id: activeProgram,
													conditions: [...(info[field.key].value || []), item],
												}
											}).then(() => {
												refresh()
											})
										}
									}}
									onDelete={() => {
										if(selectedType == "node"){
											openModal(false);
											setCreateSchema(undefined)
											setSelected(undefined)

											removeNodeAction({
												args: {
													nodeId: selected.id,
													id: existingItem.id
												}
											}).then(() => {
												refresh()
											})
										}else{
											openModal(false)
											setCreateSchema(undefined)
											setSelected(undefined)
											removePathConditions({
												args: {
													id: existingItem.id
												}
											}).then(() => {
												refresh()
											})
										}

									}}
									onClose={() => {
										setCreateSchema(undefined)
										openModal(false)
									}}
									open={modalOpen} />
								<Box 
									justify="between"
									align="center"
									direction="row">
									<Text size="small">{field?.key}</Text>
									<Button 
										onClick={() => {
											openModal(true);
											let schema = form_type.find((a) => a.name == field.type)
											setCreateSchema(schema.object)

										}}
										hoverIndicator
										plain
										style={{padding: 6, borderRadius: 3}}
										size="small" 
										icon={<Add size="small" />} />
								</Box>
								<Box>
									{/* <FormControl 
										onChange={(value) => onChange('device', value)}
										options={devices}
										value={info['device'] || undefined}
										/>
									<FormInput
										onChange={(value) => onChange('operation', value)}
										placeholder="Operation" 
										value={info['operation']} /> */}
									<List
										pad="none"
										data={info?.[field.key]?.value}>
										{(datum) => (
											<Box 
												pad={'xsmall'}
												justify="between"
												align="center" 
												direction="row">
													<Box flex>
														<Text size="small">{renderListItem(datum, form_type.find((a) => a.name == field.type))}</Text>
													</Box>
													<Button 
														onClick={() => {
															openModal(true)
															let schema = form_type.find((a) => a.name == field.type)
															setCreateSchema(schema.object)

															setSelected(datum)

														}}
														hoverIndicator
														style={{padding: 6, borderRadius: 3}}
														plain
														size="small" 
														icon={<MoreVertical size="small" />} />
											</Box>
										)}	
									</List>
								</Box>
							</Box>
						) : field.type == "Device" || field.type == "Process" ? ( 
							<FormControl 
								onChange={(value) => {
									onChange(field.key, value)
								}}
								value={info.conf?.[field.key]?.value}
								placeholder={field.key}
								options={field.type == "Device" ?  devices : []} />
						) : ( 
							<FormInput 
								onChange={(value) => {
									onChange(field.key, value)
						
								}}
								value={info.conf?.[field.key]?.value}
								placeholder={field.key} 
								type={ 'text'}/>
						)
					})
				)}
			</Box>
		)
		

    }

	return (
		<Box focusIndicator={false}>
			
			{renderSelectedSettings()}
		</Box>
	)
}