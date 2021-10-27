import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, List, Text } from 'grommet';
import { CommandProgramFlow, useMutation } from '@hexhive/client';
import { IconNodeFactory, InfiniteCanvasNode, InfiniteCanvas, ZoomControls, InfiniteCanvasPath } from '@hexhive/ui';
import { HMINodeFactory } from '../../../../components/hmi-node/HMINodeFactory';
import { nanoid } from 'nanoid';
import { NodeDropdown  } from '../../../../components/node-dropdown';
import { Action, Trigger, Add, Clock, Cycle } from 'grommet-icons';
import { gql, useApolloClient, useQuery } from '@apollo/client';
import { ProgramCanvas } from '../../../../components/program-canvas';

import Settings from './Settings';
import { ProgramEditorProvider } from './context';
import { ProgramDrawer } from './Drawer';
import { useEditor } from './store';
import { useAutomergeDoc } from '@hexhive/collaboration-client';
const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_NODE':
            let newNode = action.data;
            console.log("ADD")

            return {...state, nodes: [...state.nodes, newNode]}
            break;
        default:
            return state;
    }
}

export const Program = (props) => {


    const [ program, programRef, updateProgram, updateRef ] = useAutomergeDoc<
    {
        nodes: any[], 
        paths: {
            id?: string,
            points?: {
                x: number,
                y: number
            }[]
            source: string, 
            sourceHandle: string,
            target?: string,
            targetHandle?: string
        }[]
    }>('CommandProgramFlow', props.activeProgram)


    const [ state, dispatch ] = useEditor(reducer, {
        nodes: [],
        paths: []
    })

    const [ conditions, setConditions ] = useState<any[]>([])
    const [ modalOpen, openModal ] = useState<boolean>(false);

    const [ selected, _setSelected ] = useState<{key?: "node" | "path", id?: string}>({})
    const selectedRef = useRef<{selected?: {key?: "node" | "path", id?: string}}>({})
    const setSelected = (s: {key?: "node" | "path", id?: string}) => {
        _setSelected(s)
        selectedRef.current.selected = s;
    }

	const [ nodes, setNodes ] = useState<InfiniteCanvasNode[]>([])
    const [ paths, setPaths ] = useState<InfiniteCanvasPath[]>([])
    
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
            icon: <Cycle />,
            label: "PID",
            extras: {
                label: "PID",
                icon: "Cycle"
            }
        },
        {
            icon: <Clock />,
            label: "Timer",
            extras: {
                label: "Timer",
                icon: "Clock"
            }
        }
    ] 

    const { data } = useQuery(gql`
    query Q ($id: ID){
        commandPrograms(where: {id: $id}){
            id
            name


            devices {
                id
                name
                type {
                    id
                    name
                    actions {
                        id
                        key
                    }
                }
            }
            
            program {
                id
                name
                conditions {
                    id
                    input
                    comparator
                    assertion
                }
                nodes {
                    id
                    type
                    x 
                    y

                    actions {
                        id
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
                            id
                            sourceHandle
                            targetHandle

                            conditions

                            node {
                                id
                            }
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

const refetch = () => {
    client.refetchQueries({include: ['Q']})
}

// let program = data?.commandPrograms?.[0]


useEffect(() => {
    if(program && props.activeProgram){

        // updateProgram((flow) => {
        //     if(!flow.nodes) flow.nodes = [];
        //     flow.nodes.push({
        //         id: '12',
        //         x: 0,
        //         y: 0,
        //         extras: {
        //             icon: 'Action',
        //             configuration: []
        //         },
        //         type: 'icon-node'
        //     })
        //     return flow;
        // }, "SET")
        // setNodes( program.program.find((a) => a.id == props.activeProgram).nodes.map((x) => ({
        //     id: x.id,
        //     x: x.x,
        //     y: x.y,
        //     extras: {
        //         icon: x.type,
        //         configuration: [
        //             ...x.configuration,
        //             {key: "actions", value: x.actions}
        //         ]
        //         // actions: x.actions
        //     },
        //     type: 'icon-node'
            
        // })))

        // setPaths(program.program.find((a) => a.id == props.activeProgram).nodes.map((x) => {
        //     return x.nextConnection.edges.map((conn) => ({
        //         id: conn.id,
        //         source: x.id,
        //         sourceHandle: conn.sourceHandle,
        //         target: conn.node.id,
        //         targetHandle: conn.targetHandle,
        //         extras: {
        //             configuration: {
        //                 conditions: conn.conditions
        //             }
        //         }
        //     }))
        // }).reduce((prev, curr) => prev.concat(curr), []))
    }
}, [data?.commandPrograms?.[0], props.activeProgram])


const [ addNode, addInfo ] = useMutation((mutation, args: {type: string, x: number, y: number}) => {
    const program = mutation.updateCommandPrograms({
        where: {id: props.match.params.id},
        update: {
            program: [{
                where: {node: {id: props.activeProgram}},
                update: {
                    node: {
                        nodes: [{
                            create: [{node: {
                                type: args.type,
                                x: args.x,
                                y: args.y
                            }}]
                        }]
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


const [ updateNode, updateInfo ] = useMutation((mutation, args: {
    id: string,
    x?: number,
    y?: number
}) => {

    let update : any = {};

    if(args.x) update.x = args.x;
    if(args.y) update.y = args.y;

    const updated = mutation.updateCommandProgramNodes({
        where: {id: args.id},
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
})


const [ deleteSelected, deleteInfo ] = useMutation((mutation, args: {
    selected: {type: "node" | "path", id: string}[]
}) => {

    let query : any = {};
    let nodes = args.selected.filter((a) => a.type == "node").map((x) => x.id)
    let _paths = args.selected.filter((a) => a.type == "path").map((x) => x.id)

    let disconnectInfo : any = {};
    let deleteInfo : any = {};
    if(_paths.length > 0){
        let path = paths.find((a) => a.id == _paths[0]);
        disconnectInfo = mutation.updateCommandProgramNodes({
            where: {id: path.source},
            update: {
                next: [{disconnect: [{
                    where: {
                        edge: {
                            sourceHandle: path.sourceHandle,
                            targetHandle: path.targetHandle
                        },
                        node: {
                            id: path.target
                        }}
                }]}]
            }
        })
    }
    if(nodes.length > 0){
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
                ...(disconnectInfo?.commandHmiNodes || {})
            }
        }
})

    const [ connectNodes, connectInfo ] = useMutation((mutation, args: {
        source: string,
        sourceHandle: string,
        target: string,
        targetHandle: string,
        points?: {x: number, y: number}[]
    }) => {
        const updated = mutation.updateCommandProgramNodes({
            where: {id: args.source},
            update: {
                next: [{connect: [{ where: {node: {id: args.target}}, edge: {
                    sourceHandle: args.sourceHandle,
                    targetHandle: args.targetHandle,
                    points: args.points
                }}] }]
            }
        })
        return {
            item: {
                ...updated.commandProgramNodes[0]
            }
        }
    })

    const renderSelectedSettings = () => {
        if(!selected || selected.key != 'node') return;

        let node = nodes.find((a) => a.id == selected.id)

        switch(node?.extras?.icon){
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


    useEffect(() => {
        // window.addEventListener('keydown', watchEditorKeys)
        
        // return () => {
        //     window.removeEventListener('keydown', watchEditorKeys)
        // }
    }, [])

    const deleteSelect = () => {
        updateProgram((program) => {
            let {key, id} = selectedRef.current.selected;
            let ix;
            if(key == "node"){
                ix = program.nodes.map((x) => x.id).indexOf(id)
                if(ix < 0) return;
                program.nodes.splice(ix, 1)
            }else if(key == "path"){
                ix = program.paths.map((x) => x.id).indexOf(id)
                if(ix < 0) return;
                program.paths.splice(ix, 1)
            }
            return program;
        })
                // deleteSelected({
                //     args: {
                //         selected: [selectedRef.current.selected].map((x) => ({
                //             type: x.key,
                //             id: x.id
                //         }))
                //     }
                // }).then(() => {
                //     refetch()
                // })
            
    }
    

    const devices = data?.commandPrograms?.[0].devices || []

    useEffect(() => {
        console.log(data?.commandPrograms, props.activeProgram)
        const active = data?.commandPrograms?.[0]?.program?.find((a) => a.id == props.activeProgram)
        console.log("ACTIVE", active?.conditions, active)
        setConditions(active?.conditions)
    }, [props.activeProgram, data])

    console.log("Conditions", program?.nodes?.slice() )

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
                onDelete={deleteSelect}
                menu={[
                    {
                        key: 'nodes', 
                        icon: <Action />, 
                        panel: (		
                            <NodeDropdown
                                items={nodeMenu}
                                />
                        )
                    },
                    {
                        key: 'settings',
                        icon: <Settings />,
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
                    console.log("Node create")

                    updateProgram((flow) => {
                        if(!flow.nodes) flow.nodes = [];
                        flow.nodes.push({
                            id: nanoid(),
                            x: position.x,
                            y: position.y,
                            extras: {
                                icon: node.extras.icon
                            },
                            type: node.extras.icon || 'icon-node'
                        })
                        return flow;
                    }, "ADD_NODE")
                    // dispatch({type: "ADD_NODE", data: {
                    //     x: position.x,
                    //     y: position.y,
                    //     type: node.extras.icon
                    // }})

                    // addNode({args: {
                    //     x: position.x,
                    //     y: position.y,
                    //     type: node.extras.icon
                    // }}).then(() => {
                    //     refetch()
                    // })
                }}
                onNodeUpdate={(node) => {

                    updateProgram((flow) => {
                        // let nodes = flow.nodes.slice();
                        let ix = flow.nodes.map((x) => x.id).indexOf(node.id)

                        flow.nodes[ix].x = node.x;
                        flow.nodes[ix].y = node.y;
                        
                        // = {
                        //     ...nodes[ix],
                        //     ...node
                        // }
                        // flow.nodes = nodes;

                        return flow
                    }, "UPDATE-NODE");

                    // updateNode({args:{ 
                    //     id: node.id,
                    //     x: node.x,
                    //     y: node.y
                    // }}).then(() => {
                    //     refetch()
                    // })
                }}

                onPathCreate={(path) => {
                    console.log("ADD PATH", path)
                    updateProgram((flow) => {
                        if(!flow.paths) flow.paths = [];
                        flow.paths.push({
                            id: path.id,
                            source: path.source,
                            sourceHandle: path.sourceHandle,
                            points: path.points
                        })
                        return flow;
                    }, "ADD_PATH")
                    // connectNodes({
                    //     args: {
                    //         source: path.source,
                    //         sourceHandle: path.sourceHandle,
                    //         target: path.target,
                    //         targetHandle: path.targetHandle,
                    //         points: path.points
                    //     }
                    // }).then(() => {
                    //     refetch()
                    // })
                }}
                onPathUpdate={(path) => {
                    console.log("Update", path)

                    updateProgram((flow) => {
                        let ix = flow.paths.map((x) => x.id).indexOf(path.id)

                        console.log(ix,flow.paths, "Path ix")
                        let _path = flow.paths[ix];

                        _path.target = '';
                        _path.targetHandle = ''

                        path.points.forEach((point, yx) => {
                            // if(!flow.paths[ix]?.points) flow.paths[ix].points = [];
                            
                            // _path.points.push({x: point.x, y: point.y});

                            // flow.paths[ix].points[yx].x = point.x
                            // flow.paths[ix].points[yx].y = point.y
                        })

                        // if(flow.paths[ix].points.length > path.points.length){
                        //     console.log("Deleting a point")
                        //     for(var i = 0; i < (flow.paths[ix].points.length  - path.points.length); i++){
                        //         let cx = path.points.length + i;
                        //         flow.paths[ix].points.splice(ix, 1)
                        //     }
                        // }

                        // if(flow.paths[ix].points){
                        //     let current = flow.paths[ix].points.map((x) => `${x.x}:${x.y}`);

                        //     //
                        //     path.points.filter((a) => {
                        //         return current.indexOf(`${a.x}:${a.y}`) > -1
                        //     })

                        //     path.points.forEach((point, yx) => {
                        //         let _point = flow.paths[ix].points[yx];
                        //         if(!_point) _point = {x: point.x, y: point.y};

                        //         flow.paths[ix].points[yx].x = point.x;
                        //         flow.paths[ix].points[yx].y = point.y;
                        //     })
                        // }else{
                        //     flow.paths[ix].points = path.points.slice()
                        // }

                        flow.paths[ix].points = [];
                        flow.paths[ix].points = path.points || [];

                         if(path.target){
                             console.log("IT HAS A TARGET")
                             _path.target = path.target
                         }
                        if(path.targetHandle){
                             _path.targetHandle = path.targetHandle
                        }

                        return flow;
                    }, "UPDATE_PATH")
                }}
                nodes={program?.nodes?.map((x) => ({
                    ...x,
                    extras: {
                        icon: x.type
                    },
                    type: 'icon-node'
                })) || []}
                paths={program?.paths?.map((x) => ({
                    ...x,
                })) as any || []}
                />
		</Box>
        </ProgramEditorProvider>

	)
} 