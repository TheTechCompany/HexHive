import { gql, useApolloClient, useQuery } from '@apollo/client';
import React, { Suspense, lazy, useEffect, useRef, useState, useCallback } from 'react';
import { GET_PROGRAM, GET_PROGRAM_SHARDS, GET_STACKS } from '../../actions/flow-shards';
import { Box, Text, Spinner, Button, Collapsible, List } from 'grommet';
import { programActions } from '../../actions';
import { Program, useQuery as useQLess} from '@hexhive/client';
import Editor from '@hexhive/command-editor'
import qs from 'qs';
import { RouteComponentProps } from 'react-router-dom';
import { IconNodeFactory, InfiniteCanvas, InfiniteCanvasNode, InfiniteCanvasPath } from '@hexhive/ui'
import { useAutomergeDoc } from '@hexhive/collaboration-client'
import { IEditorProgram } from '@hexhive/command-editor';
import { IFlowShardPaths } from '@hexhive/types/dist/interfaces';
//const Editor = lazy(() => import('@hive-flow/editor'));
import { ZoomControls } from '../../components/zoom-controls';
import { NodeDropdown } from '../../components/node-dropdown';
import { nanoid } from 'nanoid';
import { Action, Add, Trigger, Menu } from 'grommet-icons'
import { useMutation } from '@hexhive/client';

export interface EditorProps extends RouteComponentProps<{id: string}> {

}

export const EditorPage: React.FC<EditorProps> = (props) => {

    const [ sidebarOpen, openSidebar ] = useState<boolean>(false);

    const [ nodes, setNodes ] = useState<InfiniteCanvasNode[]>([]);
    const [ paths, _setPaths ] = useState<InfiniteCanvasPath[]>([]);


    const [ activeProgram, setActiveProgram ] = useState<string>('')

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

    const { data } = useQuery(gql`
        query Q ($id: ID){
            commandPrograms(where: {id: $id}){
                id
                name
                program {
                    id
                    name
                    nodes {
                        x 
                        y
                    }
                }

                hmi {
                    id
                    name
                    nodes {
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

    const [ addNode, addInfo ] = useMutation((mutation, args: {x: number, y: number}) => {
        const program = mutation.updateCommandPrograms({
            where: {id: props.match.params.id},
            update: {
                program: [{
                    where: {node: {id: activeProgram}},
                    update: {
                        node: {
                            nodes: [{create: [{node: {
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

    const [ addProgram, addProgramInfo ] = useMutation((mutation, args) => {
        const program = mutation.updateCommandPrograms({
            where: {id: props.match.params.id},
            update: {
                program: [{create: [{node: {
                    name: "Default"
                }}]}]
            }
        })
        return {
            item: {
                ...program.commandPrograms[0]
            }
        }
    })

    useEffect(() => {
        let program = data?.commandPrograms?.[0]
        if(program && activeProgram){
            console.log(program, activeProgram, program.program.find((a) => a.id == activeProgram))
            setNodes(program.program.find((a) => a.id == activeProgram).nodes.map((x) => ({
                x: x.x,
                y: x.y,
                type: 'icon-node',
                
            })))
        }
    }, [data?.commandPrograms?.[0], activeProgram])

    const refetch = () => {
        client.refetchQueries({include: ['Q']})
    }
    // const program = gqless.commandPrograms
   
    const program = data?.commandPrograms?.[0] || {};

    // const [ program, setProgram ] = useAutomergeDoc<{program: Program[]} & any>('Program', props.match.params.id)

    // const shardQuery = useQuery(GET_PROGRAM_SHARDS, { variables: { parent: props.match.params.id } })
    // const programQuery = useQuery(GET_PROGRAM, { variables: { id: props.match.params.id } })
    // const stackQuery = useQuery(GET_STACKS)
    
    const gqless = useQLess({suspense: false, staleWhileRevalidate: true})

    // const Processes = (shardQuery.data || {}).FlowShardMany || []
    // const program_root = (programQuery.data || {}).ProgramOne;
    const stacks = gqless.StackMany() // ((stackQuery.data || {}).StackMany || [])

    console.log("PROGRAM", program)
    
    // const [ updateProject, updateInfo ] = programActions.useUpdateProgram(props.match.params.id)

    const query = qs.parse(props.location.search, {ignoreQueryPrefix: true})

    return (
        <Suspense fallback={(
            <Box 
                direction="column"
                align="center"
                justify="center"
                flex>
                <Spinner size="medium"/>
                <Text>Loading Editor ...</Text>
            </Box>)}>
        <Box 
            overflow="hidden"
            flex
            round="xsmall" 
            background="neutral-1">
            <Box
                align="center"
                justify="between" 
                pad="xsmall" 
                direction="row" 
                background="accent-2">
                <Box 
                    align="center"
                    direction="row">
                    <Button 
                        onClick={() => {
                            openSidebar(!sidebarOpen)
                        }}
                        plain 
                        hoverIndicator 
                        style={{padding: 6, borderRadius: 3}} 
                        icon={<Menu size="small" />} />
                    <Text>{program.name}</Text>
                </Box>

                <Box 
                    align="center"
                    overflow="hidden"
                    gap="xsmall"
                    round="small"
                    background="accent-1"
                    border={{size: 'small'}}
                    direction="row">
                    <Button style={{padding: 3}} active plain label="Program" />
                    <Button style={{padding: 3}} plain label="HMI" />
                </Box>
            </Box>
            <Box
                flex
                direction="row">
                <Collapsible    
                    direction="horizontal"
                    open={sidebarOpen}>
                    <Box 
                        flex
                        width="small">
                        <Box 
                            pad="xsmall"
                            border={{side: 'bottom', size: 'small'}}
                            direction="row" 
                            align="center" 
                            justify="between">
                            <Text size="small">Programs</Text>
                            <Button
                                onClick={() => {
                                    addProgram().then(() => {
                                        refetch()
                                    })
                                }}
                                hoverIndicator
                                plain
                                style={{padding: 6, borderRadius: 3}}
                                icon={<Add size="small" />} />
                        </Box>
                        <List 
                            onClickItem={({item}) => {
                                console.log(item)
                                setActiveProgram(item.id)
                            }}
                            primaryKey="name"
                            data={program.program} />
                    </Box>
                </Collapsible>
            <InfiniteCanvas 
                editable={true}
                nodes={nodes}
                paths={pathRef.current.paths}
                factories={[new IconNodeFactory()]}
                onPathCreate={(path) => {
                    // console.log("CREATE", path)
                    // setPaths([...paths, path])
                    updateRef.current?.addPath(path);
                }}
                onPathUpdate={(path) => {
                    // console.log("UPDATE", path)
                    // let p = paths.slice()
                    // let ix = p.map((x) => x.id).indexOf(path.id)
                    // p[ix] = path;
                    // setPaths(p)

                    updateRef.current?.updatePath(path)
                }}
                onNodeUpdate={(node) => {
                    let n = nodes.slice()
                    let ix = n.map((x) => x.id).indexOf(node.id)
                    n[ix] = node;
                    setNodes(n)
                    // console.log("NODES", node)
                }}
                onDrop={(position, data) => {
                    addNode({args: {
                        x: position.x,
                        y: position.y
                    }})
                    console.log(position, data)
                    setNodes([...nodes, {
                        id: nanoid(),
                        x: position.x,
                        y: position.y,
                        extras: {
                            icon: data.extras.icon
                        },
                        type: IconNodeFactory.TAG
                    }])
                }}
                >
                <NodeDropdown
                    items={[
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
                        }
                    ]}
                    />
                <ZoomControls />
            </InfiniteCanvas>
            </Box>
        </Box>
        </Suspense>
    )
}