import { gql, useApolloClient, useQuery } from '@apollo/client';
import React, { Suspense, lazy, useEffect, useRef, useState, useCallback } from 'react';
import { GET_PROGRAM, GET_PROGRAM_SHARDS, GET_STACKS } from '../../actions/flow-shards';
import { Box, Text, Spinner, Button, Collapsible, List } from 'grommet';
import { programActions } from '../../actions';
import { useQuery as useQLess} from '@hexhive/client';
import Editor from '@hexhive/command-editor'
import qs from 'qs';
import { matchPath, RouteComponentProps } from 'react-router-dom';
import { IconNodeFactory, InfiniteCanvas, InfiniteCanvasNode, InfiniteCanvasPath, HyperTree } from '@hexhive/ui'
import { useAutomergeDoc } from '@hexhive/collaboration-client'
import { IEditorProgram } from '@hexhive/command-editor';
import { IFlowShardPaths } from '@hexhive/types/dist/interfaces';
//const Editor = lazy(() => import('@hive-flow/editor'));
import { ZoomControls } from '../../components/zoom-controls';
import { NodeDropdown } from '../../components/node-dropdown';
import { nanoid } from 'nanoid';
import { Action, Add, Trigger, Menu } from 'grommet-icons'
import { useMutation } from '@hexhive/client';
import { BallValve, Blower, Conductivity, DiaphragmValve, Filter, FlowSensor, PressureSensor, Pump, SpeedController, Tank } from '../../assets/hmi-elements';
import * as HMIIcons from '../../assets/hmi-elements'
import { HMINodeFactory } from '../../components/hmi-node/HMINodeFactory';
import { ProgramCanvasModal } from '../../components/modals/program-canvas';

import { Switch, Route } from 'react-router-dom';
import {Program} from './pages/program'
import {Controls} from './pages/controls'
import { Alarms } from './pages/alarms';
import { Devices, DeviceSingle } from './pages/devices';
import { Documentation } from './pages/documentation';
import { ObjectTypeDefinitionNode } from 'graphql'
export interface EditorProps extends RouteComponentProps<{id: string}> {

}

export const EditorPage: React.FC<EditorProps> = (props) => {
    const [ modalOpen, openModal ] = useState<boolean>(false);

    const [ selectedItem, setSelectedItem ] = useState<any>(undefined);

    const [ view, setView ] = useState<"Documentation" | "Program" | "HMI" | "Devices" | "Alarms">("Program")

    const [ sidebarOpen, openSidebar ] = useState<boolean>(false);

    const [ nodes, setNodes ] = useState<InfiniteCanvasNode[]>([]);
    const [ paths, _setPaths ] = useState<InfiniteCanvasPath[]>([]);


    const [ activeProgram, setActiveProgram ] = useState<string>('')


    const client = useApolloClient()

    const { data } = useQuery(gql`
        query EditorCommandProgram ($id: ID){
            commandPrograms(where: {id: $id}){
                id
                name
                devices {
                    id
                    name
                }
                program {
                    id
                    name
                    children {
                        id
                        name
                    }
                }

                hmi {
                    id
                    name
                   
                }
            }
        }
    `, {
        variables: {
            id: props.match.params.id
        }
    })

    const [ addProgramNode, addInfo ] = useMutation((mutation, args: {type: string, x: number, y: number}) => {
        const program = mutation.updateCommandPrograms({
            where: {id: props.match.params.id},
            update: {
                program: [{
                    where: {node: {id: activeProgram}},
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


    const [ addProgram, addProgramInfo ] = useMutation((mutation, args: {name: string, parent?: string}) => {
       let update : any = {};

       if(!args.parent){
        update = {
            program: [{
                create: [{node: {
                    name: args.name || "Default"
                }}]
            }]
        }
       }else{
           update = {
            program: [{
                where: {node: {id: args.parent}},
                update: {
                    node: {
                        children: [{
                            create: [{node: {
                                name: args.name || "Default"
                            }}]
                        }]
                    }
                }
            }]
           }
       }
        const program = mutation.updateCommandPrograms({
            where: {id: props.match.params.id},
            update: update
        })
        return {
            item: {
                ...program.commandPrograms[0]
            }
        }
    })


    const [ addHMI, addHMIParentInfo ] = useMutation((mutation, args: {name: string, parent?: string}) => {
        let update : any = {};

        if(!args.parent){
            update = {
                hmi: [{create: [{node: {
                    name: args.name || "Default"
                }}]}]
            }
        }else{
            update = {
                hmi: [{
                    where: {id: args.parent},
                    update: {
                        children: [{
                            create: [{node: {
                                name: args.name || "Default"
                            }}]
                        }]
                    }
                }]
            }
        }
        const program = mutation.updateCommandPrograms({
            where: {id: props.match.params.id},
            update: {
              
            }
        })
        return {
            item: {
                ...program.commandPrograms[0]
            }
        }
    })


    // useEffect(() => {
    //     let program = data?.commandPrograms?.[0]
    //     if(program && activeProgram){
    //         console.log(program, activeProgram, program.program.find((a) => a.id == activeProgram))
    //         setNodes((view == "Program" ? program.program : program.hmi).find((a) => a.id == activeProgram).nodes.map((x) => ({
    //             id: x.id,
    //             x: x.x,
    //             y: x.y,
    //             extras: {
    //                 icon: view == "Program" ? x.type : HMIIcons[x.type],
    //             },
    //             type: view == "Program" ? 'icon-node' : 'hmi-node',
                
    //         })))
    //     }
    // }, [data?.commandPrograms?.[0], activeProgram])

    const refetch = () => {
        client.refetchQueries({include: ['EditorCommandProgram']})
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

    const menu = [
        "Documentation",
        "Program",
        "Controls",
        "Devices",
        "Alarms"
    ]

    useEffect(() => {

        menu.forEach((item, ix) => {
            const match =  matchPath(window.location.pathname, {
                path: `${process.env.PUBLIC_URL}${props.match.url}/${item.toLowerCase()}`,
            })
            if(match){
                setView(item as any)
            }

        })

    }, [window.location.pathname])

    const cleanTree = (nodes: any[]) => {
        return (nodes || []).map((node) => ({
            ...node,
            children: cleanTree(node.children)
        }))
    }

    console.log(props.match)
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
                    justify="between"
                    align="center"
                    overflow="hidden"
                    direction="row">
                    {menu.map((menu_item) => (
                        <Button 
                        
                            hoverIndicator
                            onClick={() => {
                                setActiveProgram(undefined)
                                setView(menu_item as any)
                                props.history.push(`${props.match.url}/${menu_item.toLowerCase()}`)
                            }}
                            style={{padding: 6, borderRadius: 3}} 
                            active={view == menu_item} 
                            plain 
                            label={menu_item} />
                    ))}
                   
                    
                </Box>
            </Box>

            <ProgramCanvasModal
                open={modalOpen}
                onSubmit={(item) => {
                    if(view == "Program"){
                        let parent = selectedItem.id !== 'root' ? selectedItem.id : undefined;
                        addProgram({args: {name: item.name, parent: parent}}).then(() => {
                            refetch()
                        })
                    }else{
                        addHMI({args: {name: item.name, parent: selectedItem.id}}).then(() => {
                            refetch()
                        })
                    }
                    
                    openModal(false)
                }}
                onClose={() => {
                    setSelectedItem(undefined)
                    openModal(false)
                }}
                modal={(gql`
                    type ${view} {
                        name: String
                    }
                `).definitions.find((a) => (a as ObjectTypeDefinitionNode).name.value == view) as ObjectTypeDefinitionNode} />
            <Box
                flex
                direction="row">
                <Collapsible    
                    direction="horizontal"
                    open={sidebarOpen}>
                    <Box 
                        flex
                        width="small">
                        {/* <Box 
                            pad="xsmall"
                            border={{side: 'bottom', size: 'small'}}
                            direction="row" 
                            align="center" 
                            justify="between">
                            <Text size="small">{view}</Text>
                            <Button
                                onClick={() => {
                                    if(view == "Program"){
                                        addProgram().then(() => {
                                            refetch()
                                        })
                                    }else{
                                        addHMI().then(() => {
                                            refetch()
                                        })
                                    }
                                 
                                }}
                                hoverIndicator
                                plain
                                style={{padding: 6, borderRadius: 3}}
                                icon={<Add size="small" />} />
                        </Box> */}

                        <HyperTree 
                            id="editor-menu"
                            onCreate={(node) => {
                                console.log("CREATE", node)
                                setSelectedItem(node.data)
                                openModal(true)
                            }}
                            onSelect={(node) => {
                                if(node.data.id !== 'root'){
                                    setActiveProgram(node.data.id)
                                }
                            }}
                            data={[{
                                id: 'root',
                                name: view,
                                children: (program.program || program.hmi) ? view == "Program" ? cleanTree(program.program) : cleanTree(program.hmi) : []
                            }]} />
                        {/* <List 
                            onClickItem={({item}) => {
                                console.log(item)
                                setActiveProgram(item.id)
                            }}
                            primaryKey="name"
                            data={view == "Program" ? program.program : program.hmi} /> */}
                    </Box>
                </Collapsible>
                <Box flex>
                    <Switch>
                        <Route path={[`${props.match.path}/program`, `${props.match.url}/`, `${props.match.url}`]} exact render={(props) => <Program {...props} activeProgram={activeProgram} />} />
                        <Route path={`${props.match.path}/controls`} render={(props) => <Controls {...props} activeProgram={activeProgram} />} />
                        <Route path={`${props.match.path}/devices`} exact component={Devices} />
                        <Route path={`${props.match.path}/devices/:id`} render={(other) => <DeviceSingle {...other} program={props.match.params.id} />} />
                        <Route path={`${props.match.path}/alarms`} component={Alarms} />
                        <Route path={`${props.match.path}/documentation`} component={Documentation} />
                    </Switch>
                </Box>
                
            </Box>
        </Box>
        </Suspense>
    )
}