import { mutation, useMutation  } from '@hexhive/client';
import { gql, useQuery } from '@apollo/client';
import { ActionNodeFactory, BlockTray, IconNodeFactory, InfiniteCanvas, StartNodeFactory } from '@hexhive/ui';
import { Box, Text, List, Button } from 'grommet';
import _, { debounce } from 'lodash';
import { nanoid } from 'nanoid';
import React, { useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MultiportNodeFactory } from './nodes/multi-port/factory';
import { useEffect } from 'react';
import { Add, Play } from 'grommet-icons';


export interface WorkflowsProps extends RouteComponentProps<{id: string}> {

}

export const Workflows : React.FC<WorkflowsProps> = (props) => {
    const [ shift, setShift ] = useState<boolean>(false)
    const paths = useRef<{p?: any[]}>({p: []})

    const [ selected, setSelected ] = useState<any[]>([])

    const [process, setProcess] = useState<any>() 

    const [ nodes, setNodes ] = useState<any[]>([])
    const [ _paths, _setPaths ] = useState<any[]>([])

    const [ items, setItems ] = useState<any[]>([])

    const setPaths = (new_paths: any[]) => {
        paths.current.p = new_paths;
        _setPaths(new_paths)
    }
    const updateRef = useRef<{addPath?: (path: any) => void, updatePath?: (path: any) => void}>({
        updatePath: (path) => {
            let p = paths.current.p.slice()
            let ix = p.map((x) => x.id).indexOf(path.id)
            p[ix] = path;
            setPaths(p)
        },
        addPath: (path) => {
            let p = paths.current.p.slice()
            p.push(path)
            setPaths(p)
        }
    })

    const {data} = useQuery(gql`
        query Q {
            hivePipelines(where: {id: "${props.match.params.id}"}){
                name

                nodes {
                    id
                    x
                    y
                    runner{
                        id
                        name
                        ports {
                            direction
                            type
                            name
                            id
                        }
                    }
                    next {
                        id
                    }
                    nextConnection {
                        edges{
                          source
                          target
                        }
                    }
                }
            }
            hiveProcesses{
                id
                name
            }
        }
    `)

    // const query = useQuery({suspense: false})

    // const workflow = query.hivePipelineNodes({where: {pipeline: {id: props.match.params.id}}})

    const [ addWorkflowNode, addNodeInfo ] = useMutation((mutation, args: {runner: string, x: number, y: number}) => {
        const item = mutation.updateHivePipelines({where: {id: props.match.params.id}, update: {
            nodes: [{create: [{node: {
                runner: {connect: {where: {node: {id: args.runner}}}}, // args.runner ,
                x: args.x,
                y: args.y,
            }}]}]
        }})
        return {
            item: {
                ...item.hivePipelines[0],
            },
            err: null
        }
    }, {
        awaitRefetchQueries: true,
        refetchQueries: [ ],
        suspense: false
    })

    const [ runWorkflowNode, runNodeInfo ] = useMutation((mutation, args: {id: string}) => {
        const item = mutation.runWorkflow({id: args.id})
        return {
            item: {
                ...item
            },
            err: null
        }
    }, {
        awaitRefetchQueries: true,
        refetchQueries: [ ],
        suspense: false
    })
/*
        [{node: {
                runner: args.runner ,
                x: args.x,
                y: args.y,
            }}]}]
*/

    const [ updateWorkflowNode, updateNodeInfo ] = useMutation((mutation, args: {id: string, runner?: string, x: number, y: number}) => {
        let node : any = {
            x: args.x,
            y: args.y
        }

        if(args.runner) node.runner = {connect: [{where: {node: {id: args.runner}}}]}

        const item = mutation.updateHivePipelines({where: {id: props.match.params.id}, update: {
            nodes: [{
                where: {node: {id: args.id}},
                update: {
                    node: node,
                
            }}]
        
        }})
        return {
            item: {
                ...item.hivePipelines[0],
            },
            err: null
        }
    }, {
        awaitRefetchQueries: true,
        refetchQueries: [  ],
        suspense: false
    })


    const [ removeWorkflowNode, removeNodeInfo ] = useMutation((mutation, args: {id: string}) => {



        const item = mutation.updateHivePipelines({where: {id: props.match.params.id}, update: {
            nodes: [{
                where: {node: {id: args.id}},
                delete: [{
                    where: {node: {id: args.id}},
                
            }]}]
        
        }})
        return {
            item: {
                ...item.hivePipelines[0],
            },
            err: null
        }
    }, {
        awaitRefetchQueries: true,
        refetchQueries: [  ],
        suspense: false
    })

    const [ connectWorkflowNodes, connectInfo ] = useMutation((mutation, args: {id: string, to: string, source: string, target: string}) => {
        const item = mutation.updateHivePipelines({where: {id: props.match.params.id}, update: {
            nodes: [{
                connect: [{
                    where: {node: {id: args.id}},
                    connect: [{
                        next: [{where: {node: {id: args.to}}, edge: { source: args.source, target: args.target } }]
                    }]
                }]
            }]
        }})
        return {
            item: {
                ...item.hivePipelines[0],
            },
            err: null
        }
    })




    useEffect(() => {
        console.log(data)
        setNodes( data?.hivePipelines?.[0]?.nodes?.map((x) => ({
            ...x, 
            id: x?.id  || nanoid(), 
            extras: {title: x?.runner?.name}, 
            type: 'multiport-node'
        })) || [])
        setPaths( data?.hivePipelines?.[0]?.nodes?.filter((a) => a.next).map((x) => {
            
            return x?.next?.map((next, ix) => ({
                id: nanoid(),
                source: x.id,
                sourceHandle: x?.nextConnection?.edges?.[ix]?.source,
                target: next?.id,
                points: [],
                targetHandle: x?.nextConnection?.edges?.[ix]?.target
            }))
        
        }).reduce((origin, current) => {
            return origin.concat(current)
        }, []).concat([
            {
                id: 'entrypoint',
                source: 'entry',
                sourceHandle: 'entry',
                target: data?.hivePipelines?.[0]?.first?.id,
                targetHandle: data?.hivePipelines?.[0]?.firstConnection?.edges?.[0]?.target
            }
        ]))

        console.log(data?.hiveProcesses)
        setItems(data?.hiveProcesses?.map((x) => ({
            ...x, 
            label: x.name, 
            extras: {title: x.name, runner: x.id}, 
            blockType: 'multiport-node'
        })) || [])

        setProcess(data?.hivePipelines?.[0]?.name)
    }, [data])
    // ?.[0]?.nodes()?.map((x) => ({...x, x: 0, y: 0, type: 'action-node'}))
// paths.current.p.concat(

    // const items = [{blockType: 'multiport-node', label: "STP->GLTF", extras: {title: 'STP->GLB', runner: 'thetechcompany/cae-stp2glb'}},{blockType: 'multiport-node', label: "GLTF->GLTF+fix", extras: {title: 'GLTF->GLTF Fix', runner: 'thetechcompany/cae-gltffix'}}, {blockType: 'multiport-node', label: "GLTF->GLTFPack", extras: {title: 'GLTFPack', runner: 'thetechcompany/cae-gtlfpack'}}]

    return (
        <Box 
         
            round="small" flex direction="column">
            <Box 
                
                justify="between"
                align="center"
                pad="xsmall"
                background="accent-2" 
                direction="row">
                <Text>Workflow name</Text>

                <Button 
                    onClick={() => runWorkflowNode({args: {id: props.match.params.id}})}
                    hoverIndicator
                    icon={<Play />} />
            </Box>
            <Box 
                tabIndex={0}
                onKeyUp={(e) => {
                    if(!e.shiftKey){
                        setShift(false)
                    }
                }}
                onKeyDown={(e) => {
                    console.log(e)
                    if(e.shiftKey){
                        setShift(true)
                    }
                    if(e.key == "Delete" || e.key == "Backspace"){
                        let n = nodes.slice()
                        let s=  selected.map((x) => x.id)

                        selected.forEach((node) => {
                            removeWorkflowNode({args: {id: node.id}})
                        })
                        
                        setNodes(n.filter((a) => s.indexOf(a.id) < 0))
                        setSelected([])
                    }
                }}
                flex direction="row">
                
                <InfiniteCanvas 
                    editable={true}
                    nodes={nodes}
                    paths={paths.current.p}
                
                    factories={[new MultiportNodeFactory(),new ActionNodeFactory(), new IconNodeFactory(), new StartNodeFactory()]}
                    onDrop={(position, data) => {
                        console.log("DROP", position, data)
                        let node = {
                            id: nanoid(),
                            type: data.type,
                            extras: {
                                ...data.extras
                            },
                            x: position.x,
                            y: position.y,
                        }

                        addWorkflowNode({args: { 
                            runner: data.extras.runner,
                            x: position.x,
                            y: position.y
                        }})

                        setNodes([...nodes, node])
                
                    }}
                    onNodeUpdate={(node) => {
                        console.log("Node update", node, nodes)
                        let ix = nodes.map((x) => x.id).indexOf(node.id)
                        let n = nodes.slice()
                        n[ix] = node;

                        debounce(() =>{
                            updateWorkflowNode({args: {id: node.id, x: node.x, y: node.y}}).then(() => {
                            
                            })
                        }, 1000)()
            

                        setNodes(n)
                    }}
                    onNodeRemove={(node) => {
                        console.log("Remove node", node)
                    }}
                    onPathCreate={(path) => {
                        console.log("PATH CREATE", path, paths)
                        updateRef.current.addPath(path)
                        // setPaths([...paths, path])
                    }}
                    onPathUpdate={(path) => {
                        console.log("Path Update", path, paths)

                        if(path.source && path.target){

                                connectWorkflowNodes({args: {
                                    id: path.source, 
                                    to: path.target,
                                    source: path.sourceHandle,
                                    target: path.targetHandle
                                }}).then(() => {

                                })
                            
                        }
                        updateRef.current.updatePath(path)
                        // let p = paths.slice()
                        // let ix = p.map((x) => x.id).indexOf(path.id)
                        // p[ix] = path;
                        // setPaths(p)
                    }}
                    onPathsChanged={(paths) => {
                        console.log("Path Change", paths)
                    }}
                    onNodesChanged={(nodes) => console.log(nodes)}
                    onSelect={(key, id) => {
                        console.log("Select", key, id)
                        if(shift){
                            let s = selected.slice()
                            let ix = selected.map((x) => x.id).indexOf(id);
                            if(ix > -1){
                                s.splice(ix, 1)
                            }else{
                                s.push({key, id})
                            }
                            setSelected(s)
                        }else{
                            if(selected?.[0]?.id == id){
                                setSelected([])
                            }else{
                                setSelected([{key, id}])
                            }
                        }
                    }}
                    selected={selected}
                    >
                

                <Box
                    style={{zIndex:99}}
                    onMouseDown={(e) => {
                        console.log("Box click")
                        e.stopPropagation()
                    }}
                elevation="small" background="neutral-1" width="small">
                
                        <BlockTray 
                            renderItem={(block : any) => (
                            <Box  
                                round="small"
                                style={{cursor: 'pointer'}}
                                pad="xsmall"
                                background="accent-1"
                                justify={block.dimensions ? "center" : 'start'}
                                align="center"
                                direction="row">
                                {block.icon}
                                <Box 
                                    style={block.dimensions || {marginLeft: 8}}>{block.content || block.label}</Box>
                            </Box>)}
                            blocks={items as any} />
                </Box>
                </InfiniteCanvas>
            </Box>
        </Box>
        
    )
}