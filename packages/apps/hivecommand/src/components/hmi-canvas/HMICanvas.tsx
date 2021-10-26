import React, { useEffect, useState, useRef } from 'react';
import { Box, Text, List, Button, Collapsible, TextInput, Select } from 'grommet'
import { InfiniteCanvas, IconNodeFactory, InfiniteCanvasNode, ZoomControls, InfiniteCanvasPath } from '@hexhive/ui';
import { HMINodeFactory } from '../hmi-node/HMINodeFactory';
import { gql, useApolloClient, useQuery } from '@apollo/client';
import * as HMIIcons from '../../assets/hmi-elements'
import { Nodes } from 'grommet-icons'
import { nanoid } from 'nanoid';
import { useMutation } from '@hexhive/client';

export interface HMICanvasProps {
	id: string;
    
    deviceValues?: {conf: {device: {id: string}, conf: {key: string}, value: any}[], devicePlaceholder: {id: string, name: string}, values: any}[];
    program?: any;
	
	onConnect?: (path: {
		source: string,
		sourceHandle: string,
		target: string,
		targetHandle: string
	}) => void;

	onSelect?: (selection: {
		key: "node" | "path",
		id: string
	}) => void;
}


export const HMICanvas : React.FC<HMICanvasProps> = (props) => {
    
    const [ selected, _setSelected ] = useState<{key?: "node" | "path", id?: string}>({})
    const selectedRef = useRef<{selected?: {key?: "node" | "path", id?: string}}>({})
    const setSelected = (s: {key?: "node" | "path", id?: string}) => {
        _setSelected(s)
        selectedRef.current.selected = s;
    }

    const [ menuOpen, openMenu ] = useState<string | undefined>(undefined);

    const [ nodes, setNodes ] = useState<InfiniteCanvasNode[]>([])
    const [ paths, _setPaths ] = useState<InfiniteCanvasPath[]>([])
    
    const pathRef = useRef<{paths: InfiniteCanvasPath[]}>({paths: []})

    const setPaths = (paths: InfiniteCanvasPath[]) => {
        _setPaths(paths)
        pathRef.current.paths = paths;
    }

    const updateRef = useRef<{addPath?: (path: any) => void, updatePath?: (path: any) => void}>({
        updatePath: (path) => {
            let p = pathRef.current.paths.slice()
            let ix = p.map((x) => x.id).indexOf(path.id)
            p[ix] = path;
            setPaths(p)
        },
        addPath: (path) => {
            let p = pathRef.current.paths.slice()
            p.push(path)
            setPaths(p)
        }
    })

    const client = useApolloClient()

    // const { data } = useQuery(gql`
    //     query Q ($id: ID){
    //         commandPrograms(where: {id: $id}){
    //             id
    //             name

    //             hmi {
    //                 id
    //                 name
    //                 nodes {
    //                     id
    //                     type
    //                     devicePlaceholder {
    //                         id
    //                         name
    //                     }
    //                     x
    //                     y

        
    //                     inputsConnection {
    //                         edges {
    //                             id
    //                             sourceHandle
    //                             targetHandle
    //                             node {
    //                                 id
    //                             }
    //                         }
    //                     }

    //                     outputsConnection {
    //                         edges {
    //                             id
    //                             sourceHandle
    //                             targetHandle
    //                             node {
    //                                 id
    //                             }
    //                         }
    //                     }
    //                 }
    //             }

    //             devices {
    //                 id
    //                 name
    //                 type {
    //                     id
    //                     name
    //                 }
    //             }
    //         }
    //     }
    // `, {
    //     variables: {
    //         id: props.id
    //     }
    // })
    
    const refetch = () => {
        client.refetchQueries({include: ['Q']})
    }

    
    useEffect(() => {
        let program = props.program
        if(program){
            setNodes((program.hmi)?.find((a) => a.name == "Default")?.nodes?.map((x) => {
                // console.log( "VAL", x.devicePlaceholder, props.deviceValues, props.deviceValues.find((a) => a.device == x.devicePlaceholder))

                return {
                    id: x.id,
                    x: x.x,
                    y: x.y,
                    extras: {
                        options: props.deviceValues.find((a) => a.devicePlaceholder.name == x.devicePlaceholder.name)?.values,
                        configuration: props.deviceValues.find((a) => a.devicePlaceholder.name == x.devicePlaceholder.name)?.conf.reduce((prev,curr) => ({...prev, [curr.conf.key]: curr.value}), {}),
                        // color: x.type == 'BallValve' || x.type == "DiaphragmValve" ? (props.deviceValues.find((a) => a.devicePlaceholder.name == x.devicePlaceholder.name)?.values == "false" ? '0deg' : '60deg') : '0deg',
                        devicePlaceholder: x.devicePlaceholder,
                        iconString: x.type,
                        icon: HMIIcons[x.type],
                    },
                    type: 'hmi-node',
                }
                
            }))

            setPaths((program?.hmi)?.find((a) => a.name == "Default")?.nodes?.map((x) => {
                let connections = x.outputsConnection?.edges?.map((edge) => ({
                    id: edge.id,
                    source: x.id,
                    sourceHandle: edge.sourceHandle,
                    target: edge.node.id,
                    targetHandle: edge.targetHandle
                })) 
                return connections
            }).reduce((prev, curr) => {
                return prev.concat(curr)
            }, []))
        }
    }, [props.program, props.deviceValues])

    useEffect(() => {
        window.addEventListener('keydown', watchEditorKeys)
        
        return () => {
            window.removeEventListener('keydown', watchEditorKeys)
        }
    }, [])
    const changeMenu = (view: string) => {
        openMenu(view == menuOpen ? undefined : view)
    }


    const watchEditorKeys = (e: KeyboardEvent) => {
        if(e.key == "Delete" || e.key == "Backspace") {
            console.log("DELETE", selected)
            if(selectedRef.current.selected.id){
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
        }
    }
    
	return (
		<Box 
            direction="row"
            flex>
			<InfiniteCanvas
                onSelect={(key, id) => {

					props.onSelect({key, id})
                    console.log("SELECTEDDDD", key, id)
                    setSelected({
                        key,
                        id
                    })
                }} 

                editable={true}
                nodes={nodes}
                paths={pathRef.current.paths}
                factories={[new IconNodeFactory(), new HMINodeFactory()]}
                onPathCreate={(path) => {
                    // console.log("CREATE", path)
                    // setPat'hs([...paths, path])



                    updateRef.current?.addPath(path);
                }}
                onPathUpdate={(path) => {
          

                    if(path.source && path.target){
						props.onConnect({
							source: path.source,
							sourceHandle: path.sourceHandle,
							target: path.target,
							targetHandle: path.targetHandle
						})
                        // connectNodes({
                        //     args: {
                        //         source: path.source,
                        //         sourceHandle: path.sourceHandle,
                        //         target: path.target,
                        //         targetHandle: path.targetHandle
                        //     }
                        // }).then(() => {
                        //     refetch()
                        // })
                    }
                    updateRef.current?.updatePath(path)
                }}
                onNodeUpdate={(node) => {

                    console.log("UPDATE", nodes)
                    let n = nodes.slice()
                    let ix = n.map((x) => x.id).indexOf(node.id)
                    n[ix] = node;
                    setNodes(n)

                    // updateHMINode({args: {id: node.id, x: node.x, y: node.y}}).then(() => {
                    //     refetch()
                    // })
                    // console.log("NODES", node)
                }}
                onDrop={(position, data) => {
      
                        // addHMINode({args: {
                        //     x: position.x,
                        //     y: position.y,
                        //     type: data.extras.icon
                        // }})
               
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
           
		</Box>
	)
}