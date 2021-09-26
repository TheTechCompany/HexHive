import { mutation, useMutation  } from '@hexhive/client';
import { gql, useQuery } from '@apollo/client';
import { ActionNodeFactory, BlockTray, IconNodeFactory, InfiniteCanvas, StartNodeFactory } from '@hexhive/ui';
import { Box, Text, List, Button, TextInput } from 'grommet';
import _, { debounce } from 'lodash';
import { nanoid } from 'nanoid';
import React, { useRef, useMemo, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MultiportNodeFactory } from './nodes/multi-port/factory';
import { useEffect } from 'react';
import { Add, Upload, Play } from 'grommet-icons';
import { EditorPane } from '../../components/editor-pane/EditorPane';
import { RunModal } from '../../modals/run-modal';
import { getSuggestions } from './utils/getSuggestions';
import { NodeSettings } from './menu/node-settings';


export interface WorkflowsProps extends RouteComponentProps<{id: string}> {

}

export const Workflows : React.FC<WorkflowsProps> = (props) => {
    
    const [ runParams, setRunParams ] = useState<any[]>([])

    const [ runModal, openRun ] = useState<boolean>(false);
    const [ triggers, setTriggers ] = useState<any[]>([])
    const [editorView, setEditorView] = useState<string>('nodes');
    const [ shift, setShift ] = useState<boolean>(false)
    const paths = useRef<{p?: any[]}>({p: []})

    const [ selected, setSelected ] = useState<any[]>([])

    const [process, setProcess] = useState<any>() 

    const [ nodes, setNodes ] = useState<any[]>([])
    const [ _paths, _setPaths ] = useState<{source: string, sourceHandle?: string, targetHandle?: string, target?: string}[]>([])

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
                    options
                    runner{
                      
                        ... on HiveProcess {
                            id
                            name
    
                            ports {
                                direction
                                type
                                name
                                id
                            }
                        }

                        ... on HivePipelineTrigger {
                            id 
                            name
                            produces {
                                id
                                name
                            }
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
                    callerConnection {
                        edges {
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

            hivePipelineTriggers{
                id
                name
            }
        }
    `)

    // const query = useQuery({suspense: false})

    // const workflow = query.hivePipelineNodes({where: {pipeline: {id: props.match.params.id}}})

    const [ addWorkflowNode, addNodeInfo ] = useMutation((mutation, args: {runner: string, kind: string, x: number, y: number}) => {
        let runner : any = {};

        if(args.kind == "Trigger"){
            runner = {HivePipelineTrigger : {connect: {where: {node: {id: args.runner}}}}}
        }else {
            runner = {HiveProcess : {connect: {where: {node: {id: args.runner}}}}}
        }
        const item = mutation.updateHivePipelines({where: {id: props.match.params.id}, update: {
            nodes: [{create: [{node: {
                runner: runner, // args.runner ,
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

    const [ runWorkflow, runNodeInfo ] = useMutation((mutation, args: {id: string, params: {key: string, type: string, urn: string}[]}) => {
        const item = mutation.runWorkflow({id: args.id, params: args.params})
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


const [ publishWorkflow, publishInfo ] = useMutation((mutation, args: {id: string}) => {
    
    const item = mutation.publishHivePipeline({id:args.id})
    return {
        item: {
            success: true
        },
        err: null
    }
}, {
    awaitRefetchQueries: true,
    refetchQueries: [  ],
    suspense: false
})


    const [ updateWorkflowNode, updateNodeInfo ] = useMutation((mutation, args: {id: string, runner?: string, x?: number, y?: number, options?: {[key: string]: any}}) => {
        let node : any = {

        }

        if(args.x) node.x = args.x;
        if(args.y) node.y = args.y;

        if(args.options) node.options = JSON.stringify(args.options)

        if(args.runner) node.runner = {connect: [{where: {node: {id: args.runner}}}]}

        const item = mutation.updateHivePipelines({where: {id: props.match.params.id}, update: {
            nodes: [{
                where: {node: {id: args.id}},
                update: {
                    node: node,
                
            }}]
        
        }})

        console.log( item.hivePipelines[0])
        return {
            item: {
                id: item.hivePipelines[0].id
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

    
        const starters = data?.hivePipelines?.[0]?.nodes?.filter((node) => {
            return node.callerConnection.edges.length < 1
        }) 

        console.log(starters)
        
        // console.log()

        setRunParams(starters?.reduce((prev, curr) => {
            let new_items = curr?.runner?.ports?.filter((a) => a.direction == 'input')
            if(new_items && new_items.length > 0) prev = (prev || []).concat(new_items)
            return prev
        }, []) || [])

        setNodes( data?.hivePipelines?.[0]?.nodes?.map((x) => ({
            ...x, 
            runner: {
                ...x.runner,
                ports: x?.runner.ports || x?.runner.produces?.map((x) => ({...x, direction: "output", type: "File"}))
            },
            id: x?.id  || nanoid(), 
            extras: {title: x?.runner?.name || x?.id}, 
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

        setTriggers(data?.hivePipelineTriggers?.map((x) => ({
            ...x,
            label: x.name,
            extras: {kind: 'Trigger', title: x.name, runner: x.id},
            blockType: 'multiport-node'
        })) || [])

        setItems(data?.hiveProcesses?.map((x) => ({
            ...x, 
            label: x.name, 
            extras: {kind: 'Action', title: x.name, runner: x.id}, 
            blockType: 'multiport-node'
        })) || [])

        setProcess(data?.hivePipelines?.[0]?.name)
    }, [data])

    const startNodes = useMemo(() => {
        let origin = nodes?.filter((a) => {
            let p = _paths?.filter((b) => b.target == a.id)
            return p.length == 0
        })
        return origin;
    }, [nodes, _paths])


    const changeNodeSetting = (nodeId: string, portKey: string, value: string) => {
        let options = JSON.parse(nodes.find((a) => a.id == nodeId).options || '{}');

        options[portKey] = value;
        updateWorkflowNode({args: {
            id: nodeId,
            options: options
        }}).then((r) => {

            
            console.log(r)
        })
    }
    console.log(startNodes)
    // ?.[0]?.nodes()?.map((x) => ({...x, x: 0, y: 0, type: 'action-node'}))
// paths.current.p.concat(

    // const items = [{blockType: 'multiport-node', label: "STP->GLTF", extras: {title: 'STP->GLB', runner: 'thetechcompany/cae-stp2glb'}},{blockType: 'multiport-node', label: "GLTF->GLTF+fix", extras: {title: 'GLTF->GLTF Fix', runner: 'thetechcompany/cae-gltffix'}}, {blockType: 'multiport-node', label: "GLTF->GLTFPack", extras: {title: 'GLTFPack', runner: 'thetechcompany/cae-gtlfpack'}}]

    return (
        <Box 
            overflow="hidden"
            round="xsmall" 
            flex 
            direction="column">
            <Box 
                
                justify="between"
                align="center"
                pad="xsmall"
                background="accent-2" 
                direction="row">
                <Text>Workflow name</Text>

                <Box direction="row">
                <Button 
                    onClick={() => publishWorkflow({args: {id: props.match.params.id}})}
                    hoverIndicator
                    icon={<Upload size={"20px"} />} />
                <Button 
                    onClick={() =>  {
                        openRun(true)
                        //  runWorkflowNode({args: {id: props.match.params.id}})
                    }}
                    hoverIndicator
                    icon={<Play size={"20px"} />} />
                </Box>
            </Box>
            <RunModal 
                params={runParams}
                open={runModal} 
                onSubmit={(state) => {
                    console.log(state)
                    openRun(false)

                    let params : any[] = [];
                    for(var k in state){
                        state[k].map((x) => {
                            params.push({
                                key: k,
                                type: "File",
                                urn: `ipfs://${x.cid}`
                            })
                        })
                    }

                    runWorkflow({args: {
                        id: props.match.params.id,
                        params: params
                    }})
                    
                }}
                onClose={() => openRun(false)}/>
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
                
                <EditorPane
                    view={editorView}
                    onViewChange={(view) => setEditorView(view)}
                    >
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
                            kind: data.extras.kind,
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
                
                    style={{zIndex:20}}
                    onKeyDown={(e)=> {
                        if(e.key == "Backspace" || e.key == "Delete"){
                            e.stopPropagation()
                            // e.preventDefault()
                        }
                    }}
                    onMouseDown={(e) => {
                        console.log("Box click")
                        e.stopPropagation()
                    }}
                elevation="small" 
                background="neutral-1" 
                width="220px">
                    {editorView == 'nodes' ? (
                        <BlockTray 
                            groupBy="__typename"
                            renderItem={(block : any) => (
                            <Box  
                                round="small"
                                style={{cursor: 'pointer'}}
                                pad="xsmall"
                                background="accent-1"
                                justify={ "center"}
                                align="center"
                                direction="row">
                                <Box 
                                    style={{marginLeft: 8}}>{block.content || block.label}</Box>
                            </Box>)}
                            blocks={triggers.concat(items) as any} /> ) : (<NodeSettings nodes={selected.map((x) => nodes.find((a) => a.id == x.id))} paths={_paths} options={getSuggestions(startNodes)} onOptionChanged={changeNodeSetting} />)}
                </Box>
                </InfiniteCanvas>
                </EditorPane>
            </Box>
        </Box>
        
    )
}
//value={(paths.length > 0) ? paths.map((x) => nodes.find((b) => b.id == x.source)).map((y) => y.runner?.name).join(', ') : ''} 
