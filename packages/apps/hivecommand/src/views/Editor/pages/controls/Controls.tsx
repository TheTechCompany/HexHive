import React, { useEffect, useState } from 'react';
import { Box, Text, List } from 'grommet'
import { InfiniteCanvas, IconNodeFactory, InfiniteCanvasNode, ZoomControls } from '@hexhive/ui';
import { HMINodeFactory } from '../../../../components/hmi-node/HMINodeFactory';
import { NodeDropdown  } from '../../../../components/node-dropdown';
import { BallValve, Blower, Conductivity, DiaphragmValve, Filter, FlowSensor, PressureSensor, Pump, SpeedController, Tank } from '../../../../assets/hmi-elements';
import { gql, useApolloClient, useQuery } from '@apollo/client';
import * as HMIIcons from '../../../../assets/hmi-elements'

export const Controls = (props) => {
    
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
                        x
                        y
                    }
                }
            }
        }
    `, {
        variables: {
            id: props.match.params.id
        }
    })

    useEffect(() => {
        let program = data?.commandPrograms?.[0]
        if(program && props.activeProgram){
            setNodes((program.hmi).find((a) => a.id == props.activeProgram).nodes.map((x) => ({
                id: x.id,
                x: x.x,
                y: x.y,
                extras: {
                    icon: HMIIcons[x.type],
                },
                type: 'hmi-node',
                
            })))
        }
    }, [data?.commandPrograms?.[0], props.activeProgram])

    
	return (
		<Box flex>
			<InfiniteCanvas 
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
                    //     addHMINode({args: {
                    //         x: position.x,
                    //         y: position.y,
                    //         type: data.extras.icon
                    //     }})
                    // }
                    // console.log(position, data)

                    // if(view == "HMI"){
                    //     data.extras.icon = HMIIcons[data.extras.icon]
                    // }
                    // setNodes([...nodes, {
                    //     id: nanoid(),
                    //     x: position.x,
                    //     y: position.y,
                    //     extras: {
                    //         icon: data.extras.icon
                    //     },
                    //     type: view == "Program" ? IconNodeFactory.TAG : HMINodeFactory.TAG
                    // }])
                }}
                >
                <NodeDropdown
                    items={nodeMenu.map((node) => ({
                        ...node,
                        icon: (
                            <Box 
                                background="neutral-4" round="xsmall" pad={{horizontal: "xsmall"}}>
                                    {node.icon} 
                                </Box>
                        )
                    }))}
                    />
                <ZoomControls anchor={{vertical: 'bottom', horizontal: 'right'}} />
            </InfiniteCanvas>
		</Box>
	)
}