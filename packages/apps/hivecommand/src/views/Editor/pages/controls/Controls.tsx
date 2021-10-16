import React, { useEffect, useState } from 'react';
import { Box, Text, List, Button, Collapsible, TextInput, Select } from 'grommet'
import { InfiniteCanvas, IconNodeFactory, InfiniteCanvasNode, ZoomControls } from '@hexhive/ui';
import { HMINodeFactory } from '../../../../components/hmi-node/HMINodeFactory';
import { NodeDropdown  } from '../../../../components/node-dropdown';
import { BallValve, Blower, Conductivity, DiaphragmValve, Filter, FlowSensor, PressureSensor, Pump, SpeedController, Tank } from '../../../../assets/hmi-elements';
import { gql, useApolloClient, useQuery } from '@apollo/client';
import * as HMIIcons from '../../../../assets/hmi-elements'
import { Nodes } from 'grommet-icons'
import Settings from './Settings'
import { nanoid } from 'nanoid';
import { useMutation } from '@hexhive/client';

export const Controls = (props) => {
    
    const [ selected, setSelected ] = useState<{key?: string, id?: string}>({})
    const [ menuOpen, openMenu ] = useState<string | undefined>(undefined);
    const [ nodes, setNodes ] = useState<InfiniteCanvasNode[]>([])

    const nodeMenu = [
        {
            icon: <Blower width="40px" height="40px" />,
            label: "Blower",
            extras: {
                icon: "Blower"
            }
        },
        {
            icon: <Pump width="40px" height="40px" />,
            label: "Pump",
            extras: {
                icon: "Pump"
            }
        },
        {
            icon: <BallValve width="40px" height="40px" />,
            label: "Ball Valve",
            extras: {
                icon: "BallValve"
            }
        },
        {
            icon: <DiaphragmValve width="40px" height="40px" />,
            label: "Diaphragm Valve",
            extras: {
                icon: "DiaphragmValve"
            }
        },
        {
            icon: <Tank width="40px" height="40px" />,
            label: "Tank",
            extras: {
                icon: "Tank"
            }
        },
        {
            icon: <PressureSensor width="40px" height="40px" />,
            label: "Pressure Sensor",
            extras: {
                icon: "PressureSensor"
            }
        },
        {
            icon: <FlowSensor width="40px" height="40px" />,
            label: "Flow Sensor",
            extras: {
                icon: "FlowSensor"
            }
        },
        {
            icon: <Conductivity width="40px" height="40px" />,
            label: "Conductivity Sensor",
            extras: {
                icon: "Conductivity"
            }
        },
        {
            icon: <SpeedController width="40px" height="40px" />,
            label: "Speed Controller",
            extras: {
                icon: "SpeedController" 
            }
        },
        {
            icon: <Filter width="40px" height="40px" />,
            label: "Filter",
            extras: {
                icon: "Filter"
            }
        }
    ]


    const client = useApolloClient()

    const { data } = useQuery(gql`
        query Q ($id: ID){
            commandPrograms(where: {id: $id}){
                id
                name

                hmi {
                    id
                    name
                    nodes {
                        id
                        type
                        devicePlaceholder {
                            id
                            name
                        }
                        x
                        y
                    }
                }

                devices {
                    id
                    name
                    type {
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
    
    const refetch = () => {
        client.refetchQueries({include: ['Q']})
    }

    const [ addHMINode, addHMIInfo ] = useMutation((mutation, args: {type: string, x: number, y: number}) => {
        const program = mutation.updateCommandPrograms({
            where: {id: props.match.params.id},
            update: {
                hmi: [{
                    where: {node: {id: props.activeProgram}},
                    update: {
                        node: {
                            nodes: [{create: [{node: {
                                type: args.type,
                                x: args.x,
                                y: args.y
                            }}]}]
                        }
                    }
                }]
            }
        })
        return {
            item: {
                ...program.commandPrograms[0]
            }
        }
    })

    const [ assignHMINode, assignInfo ] = useMutation((mutation, args: {
        id: string,
        placeholder: string
    }) => {
        const updated = mutation.updateCommandHMINodes({
            where: {id: args.id},
            update: {
                devicePlaceholder: {connect: {where: {node: {id: args.placeholder}}}}
            }
        })
        return {
            item: {
                ...updated.commandHmiNodes[0]
            }
        }
    })

    const devices = data?.commandPrograms?.[0]?.devices
    
    useEffect(() => {
        let program = data?.commandPrograms?.[0]
        if(program && props.activeProgram){
            setNodes((program.hmi).find((a) => a.id == props.activeProgram).nodes.map((x) => ({
                id: x.id,
                x: x.x,
                y: x.y,
                extras: {
                    devicePlaceholder: x.devicePlaceholder,
                    iconString: x.type,
                    icon: HMIIcons[x.type],
                },
                type: 'hmi-node',
                
            })))
        }
    }, [data?.commandPrograms?.[0], props.activeProgram])

    const changeMenu = (view: string) => {
        openMenu(view == menuOpen ? undefined : view)
    }

    const renderMenu = () => {
        switch(menuOpen){
            case 'nodes':
                return (
                    <NodeDropdown
                    items={nodeMenu.map((node) => ({
                        ...node,
                        icon: (
                            <Box 
                                style={{cursor: 'pointer'}}
                                background="neutral-4" 
                                round="xsmall" 
                                pad={{horizontal: "xsmall"}}>
                                {node.icon} 
                            </Box>
                        )
                    }))}
                    />
                )
            case 'config':
                let item = selected.key == 'node' ? nodes.find((a) => a.id == selected.id) : undefined
                return (
                    <Box>
                        Config
                        <Select
                            valueKey={{reduce: true, key: "id"}}
                            labelKey="name"
                            value={item?.extras?.devicePlaceholder?.id}
                            onChange={({value}) => {
                                assignHMINode({args: {
                                    id: selected.id,
                                    placeholder: value
                                }}).then(() => {
                                    refetch()
                                })
                            }}
                            options={devices.filter((a) => a.type.name.replace(/ /, '') == item?.extras?.iconString)}
                            placeholder="Device" />

                        <Box>
                            {item?.extras?.iconString == "BallValve" && (
                                <>
                                <Text size="small">State: OFF</Text>

                                <Button label="Open" />
                                </>
                            )}
                        </Box>
                    </Box>
                )
        }
       
    }
    
	return (
		<Box 
            direction="row"
            flex>
			<InfiniteCanvas
                onSelect={(key, id) => {
                    console.log(key, id)
                    setSelected({
                        key,
                        id
                    })
                }} 
                menu={(<Collapsible 
                    open={Boolean(menuOpen)}
                    direction="horizontal">
                    <Box
                        style={{zIndex: 999999}}
                        onClick={(e) => {
                            e.stopPropagation()
                            e.preventDefault()
                        }}
                        pad={'xsmall'} 
                        width="small">
                            {renderMenu()}
                  
                    </Box>
                </Collapsible>)}
                editable={true}
                nodes={nodes}
                factories={[new IconNodeFactory(), new HMINodeFactory()]}
                onPathCreate={(path) => {
                    // console.log("CREATE", path)
                    // setPaths([...paths, path])


                    // updateRef.current?.addPath(path);
                }}
                onPathUpdate={(path) => {
                    // console.log("UPDATE", path)
                    // let p = paths.slice()
                    // let ix = p.map((x) => x.id).indexOf(path.id)
                    // p[ix] = path;
                    // setPaths(p)

                    // updateRef.current?.updatePath(path)
                }}
                onNodeUpdate={(node) => {

                    console.log("UPDATE", nodes)
                    let n = nodes.slice()
                    let ix = n.map((x) => x.id).indexOf(node.id)
                    n[ix] = node;
                    setNodes(n)
                    // console.log("NODES", node)
                }}
                onDrop={(position, data) => {
                    // if(view == "Program"){
                    //     addProgramNode({args: {
                    //         x: position.x,
                    //         y: position.y,
                    //         type: data.extras.icon
                    //     }})
                    // }else{
                        addHMINode({args: {
                            x: position.x,
                            y: position.y,
                            type: data.extras.icon
                        }})
                    // }
                    // console.log(position, data)
                    
                    data.extras.icon = HMIIcons[data.extras.icon]
                    
                    setNodes([...nodes, {
                        id: nanoid(),
                        x: position.x,
                        y: position.y,
                        extras: {
                            icon: data.extras.icon
                        },
                        type: HMINodeFactory.TAG
                    }])
                }}
                >
     
                <ZoomControls anchor={{vertical: 'bottom', horizontal: 'right'}} />
            </InfiniteCanvas>
           
            <Box background="accent-1" >
                <Button
                    active={menuOpen == 'nodes'}
                    onClick={() => changeMenu('nodes')}
                    hoverIndicator
                    icon={<Nodes />} />
                <Button 
                    active={menuOpen == 'config'}
                    onClick={() => changeMenu('config')}
                    hoverIndicator
                    icon={<Settings />} />
            </Box>
		</Box>
	)
}