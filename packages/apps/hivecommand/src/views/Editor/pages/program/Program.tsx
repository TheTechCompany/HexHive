import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, List, Text } from 'grommet';
import { useMutation } from '@hexhive/client';
import { IconNodeFactory, InfiniteCanvasNode, InfiniteCanvas, ZoomControls, InfiniteCanvasPath } from '@hexhive/ui';
import { HMINodeFactory } from '../../../../components/HMINode/HMINodeFactory';
import { nanoid } from 'nanoid';
import { NodeDropdown } from '../../../../components/node-dropdown';
import { Connect, Action, Trigger, PowerShutdown, Add, Clock, Cycle } from 'grommet-icons';
import { gql, useApolloClient, useQuery } from '@apollo/client';
import { ProgramCanvas } from '../../../../components/program-canvas';

import Settings from './Settings';
import { ProgramEditorProvider } from './context';
import { ProgramDrawer } from './Drawer';
import { useEditor } from './store';
import { debounce, pick } from 'lodash';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NODE':
            let newNode = action.data;
            console.log("ADD")

            return { ...state, nodes: [...state.nodes, newNode] }
            break;
        default:
            return state;
    }
}

export const Program = (props) => {

    const [state, dispatch] = useEditor(reducer, {
        nodes: [],
        paths: []
    })

    const [conditions, setConditions] = useState<any[]>([])
    const [modalOpen, openModal] = useState<boolean>(false);

    const [selected, _setSelected] = useState<{ key?: "node" | "path", id?: string }>({})
    const selectedRef = useRef<{ selected?: { key?: "node" | "path", id?: string } }>({})
    const setSelected = (s: { key?: "node" | "path", id?: string }) => {
        _setSelected(s)
        selectedRef.current.selected = s;
    }

    const [nodes, setNodes] = useState<InfiniteCanvasNode[]>([])
    const [paths, setPaths] = useState<InfiniteCanvasPath[]>([])

    const client = useApolloClient()

    const nodeMenu = [
        {
            icon: <Action />,
            label: "Action",
            extras: {
                label: "Action",
                icon: 'Action'
            },
        },
        {
            icon: <Trigger />,
            label: "Trigger",
            extras: {
                label: "Trigger",
                icon: 'Trigger'
            }
        },
        {
            icon: <PowerShutdown />,
            label: "Shutdown",
            extras: {
                label: "Shutdown",
                icon: "PowerShutdown"
            }
        },
        // {
        //     icon: <Cycle />,
        //     label: "PID",
        //     extras: {
        //         label: "PID",
        //         icon: "Cycle"
        //     }
        // },
        {
            icon: <Clock />,
            label: "Timer",
            extras: {
                label: "Timer",
                icon: "Clock"
            }
        },
   
    ]

    const { data } = useQuery(gql`
    query Q ($id: ID, $program: ID){
        commandPrograms(where: {id: $id}){
            id
            name


            devices {
                id
                name
                requiresMutex
                type {
                    id
                    name
                    state {
                        id
                        key
                        type
                    }
                    actions {
                        id
                        key
                    }
                }
            }

        }

        commandProgramFlows (where: {id: $program}) {
                id
                name

                children {
                    id
                    name
                }

                conditions {
                    id
                    inputDevice {
                        id
                        name
                    }
                    inputDeviceKey {
                        id
                        key
                    }
                    comparator
                    assertion
                }
                nodes {
                    id
                    type
                    x 
                    y


                    subprocess {
                        id
                        name
                    }

                    actions {
                        id
                        release

                        device {
                            id
                            name
                        }
                        request {
                            id
                            key
                        }
                    }
                    configuration {
                        id
                        key
                        
                        value
                    }

                    nextConnection {
                        edges {
                            conditions

                            id
                            sourceHandle
                            targetHandle


                            points {
                                x
                                y
                            }
                            node {
                                id
                            }
                        }
                    }
                }
            
        }
    }
`, {
        variables: {
            id: props.match.params.id,
            program: props.activeProgram
        }
    })

    const refetch = () => {
        client.refetchQueries({ include: ['Q'] })
    }

    let program = data?.commandProgramFlows?.[0]


    useEffect(() => {
        if (program && props.activeProgram) {
            setNodes(program.nodes.map((x) => ({
                id: x.id,
                x: x.x,
                y: x.y,
                extras: {
                    icon: x.type,
                    label: x.subprocess?.name,
                    configuration: [
                        ...x.configuration,
                        { key: "actions", value: x.actions }
                    ]
                    // actions: x.actions
                },
                type: 'icon-node'

            })))

            
            setPaths(program.nodes.map((x) => {
                console.log("NEXT", x)
                return x.nextConnection.edges.map((conn) => ({
                    id: conn.id,
                    source: x.id,
                    sourceHandle: conn.sourceHandle,
                    target: conn.node.id,
                    targetHandle: conn.targetHandle,
                    points: conn.points,
                    extras: {
                        configuration: {
                            conditions: conn.conditions
                        }
                    }
                }))
            }).reduce((prev, curr) => prev.concat(curr), []))
        }
    }, [program, props.activeProgram])


    const [addNode, addInfo] = useMutation((mutation, args: { type: string, x: number, y: number, subprocess?: string}) => {
        let createNode : any = {
       
                type: args.type,
                x: args.x,
                y: args.y,
            
        }

        if(args.type == "Connect" && args.subprocess){
            console.log("CoNFIG")
            createNode.subprocess = {
                connect: {where: {node: {id: args.subprocess}}}
            }
        }
        const program = mutation.updateCommandProgramFlows({
            where: { id: props.activeProgram },
            update: {
                    nodes: [{
                        create: [{
                           node: createNode
                        }]
                    }]
            }

        })
        return {
            item: {
                ...program.commandProgramFlows[0]
            }
        }
    })


    const [updateNode, updateInfo] = useMutation((mutation, args: {
        id: string,
        x?: number,
        y?: number
    }) => {

        let update: any = {};

        if (args.x) update.x = args.x;
        if (args.y) update.y = args.y;

        const updated = mutation.updateCommandProgramNodes({
            where: { id: args.id },
            update: {
                x: args.x,
                y: args.y
            }
        })
        return {
            item: {
                ...updated.commandProgramNodes[0]
            }
        }
    });


    const [deleteSelected, deleteInfo] = useMutation((mutation, args: {
        selected: { type: "node" | "path", id: string }[]
    }) => {

        let query: any = {};
        let nodes = args.selected.filter((a) => a.type == "node").map((x) => x.id)
        let _paths = args.selected.filter((a) => a.type == "path").map((x) => x.id)

        let disconnectInfo: any = {};
        let deleteInfo: any = {};
        if (_paths.length > 0) {
            let path = paths.find((a) => a.id == _paths[0]);
            disconnectInfo = mutation.updateCommandProgramNodes({
                where: { id: path.source },
                update: {
                    next: [{
                        disconnect: [{
                            where: {
                                edge: {
                                    sourceHandle: path.sourceHandle,
                                    targetHandle: path.targetHandle
                                },
                                node: {
                                    id: path.target
                                }
                            }
                        }]
                    }]
                }
            })
            // return {
            //     item: {
            //         ...disconnectInfo.commandProgramNodes?.[0]
            //     }
            // }
        }
        if (nodes.length > 0) {
            query = {
                id_IN: nodes,
            }

            deleteInfo = mutation.deleteCommandProgramNodes({
                where: query
            })

        }
        return {
            item: {
                ...(deleteInfo || {}),
                ...(disconnectInfo?.commandProgramNodes?.[0] || {})
            }
        }
    })

    const [connectNodes, connectInfo] = useMutation((mutation, args: {
        source: string,
        sourceHandle: string,
        target: string,
        targetHandle: string,
        points?: { x: number, y: number }[]
    }) => {
        const updated = mutation.updateCommandProgramNodes({
            where: { id: args.source },
            update: {
                next: [{
                    connect: [{
                        where: {
                            node: {
                                id: args.target
                            }
                        }, edge: {
                            sourceHandle: args.sourceHandle,
                            targetHandle: args.targetHandle,
                            points: args.points.map((x) => pick(x, ['x', 'y']))
                        }
                    }]
                }]
            }
        })
        return {
            item: {
                ...updated.commandProgramNodes[0]
            }
        }
    })

    const renderSelectedSettings = () => {
        if (!selected || selected.key != 'node') return;

        let node = nodes.find((a) => a.id == selected.id)

        switch (node?.extras?.icon) {
            case 'Cycle':
                return (
                    <Box flex>
                        <Box
                            align="center"
                            direction="row">
                            <Text>PID</Text>

                            <Button
                                size="small"
                                icon={<Add size="small" />} />
                        </Box>

                    </Box>
                )
            case 'Action':
                return (
                    <Box flex>
                        <Box
                            align="center"
                            justify="between"
                            direction="row">
                            <Text>Actions</Text>
                            <Button
                                onClick={() => openModal(true)}
                                hoverIndicator
                                icon={<Add size="small" />} />
                        </Box>
                        <Box>
                            <List

                                data={node.extras.actions || []}>
                                {(datum) => (
                                    <Text size="small">{datum.device.name} - {datum.request.key}</Text>
                                )}
                            </List>
                        </Box>
                    </Box>
                )
            case 'Trigger':
                return (<Text>Triggers</Text>)
        }

    }



    const watchEditorKeys = () => {
        if (selectedRef.current.selected.id) {
            deleteSelected({
                args: {
                    selected: [selectedRef.current.selected].map((x) => ({
                        type: x.key,
                        id: x.id
                    }))
                }
            }).then(() => {
                refetch()
            })
        }

    }


    const devices = data?.commandPrograms?.[0].devices || []

    useEffect(() => {
        setConditions(program?.conditions)
    }, [program])

    console.log("Conditions", conditions)

    return (
        <ProgramEditorProvider
            value={{
                refresh: refetch,
                devices,
                conditions: conditions,
                program,
                activeProgram: props.activeProgram,
                selectedType: selected.key,
                selected: selected.key == 'node' ? nodes.find((a) => a.id == selected.id) : paths.find((a) => a.id == selected.id)
            }}
        >
            <Box flex>

                <ProgramCanvas
                    onDelete={watchEditorKeys}
                    menu={[
                        {
                            key: 'nodes',
                            icon: <Action />,
                            panel: (
                                <NodeDropdown
                                    items={nodeMenu.concat((program?.children || []).map((x) => ({
                                        icon: <Connect />,
                                        label: x.name,
                                        
                                        extras: {
                                            label: x.name,
                                            icon: "Connect",
                                            subprocess: x.id
                                        }
                                    })))}
                                />
                            )
                        },
                        {
                            key: 'settings',
                            icon: <Settings width="24px" />,
                            panel: (
                                <ProgramDrawer />
                            )
                        }
                    ]}
                    selected={[selected]}
                    onSelect={(selected) => {
                        setSelected(selected)
                    }}

                    onNodeCreate={(position, node) => {
                        console.log("Node create", node)
                        // dispatch({type: "ADD_NODE", data: {
                        //     x: position.x,
                        //     y: position.y,
                        //     type: node.extras.icon
                        // }})

                        addNode({
                            args: {
                                x: position.x,
                                y: position.y,
                                type: node.extras.icon,
                                subprocess: node.extras.subprocess
                            }
                        }).then(() => {
                            refetch()
                        })
                    }}
                    onNodeUpdate={(node) => {
                        updateNode({
                            args: {
                                id: node.id,
                                x: node.x,
                                y: node.y
                            }
                        }).then(() => {
                            refetch()
                        })
                    }}

                    onPathCreate={(path) => {
                        connectNodes({
                            args: {
                                source: path.source,
                                sourceHandle: path.sourceHandle,
                                target: path.target,
                                targetHandle: path.targetHandle,
                                points: path.points
                            }
                        }).then(() => {
                            refetch()
                        })
                    }}

                    nodes={nodes}
                    paths={paths}
                />
            </Box>
        </ProgramEditorProvider>

    )
}