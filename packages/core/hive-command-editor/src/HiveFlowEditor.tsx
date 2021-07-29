import React, { useEffect, useReducer, useState } from 'react';
import { Box, Button } from 'grommet';
import * as Icons from 'grommet-icons';
import { ProgramEditor } from './views/program-editor';

import { ProgramMenu } from './menu/program';
import { HMIMenu } from './menu/hmi';
import { IOMenu } from './menu/io';
import { HMIEditor } from './components/hmi-editor';
import { isEqual } from 'lodash';
import { EditorContext } from './context';
import { EditorReducer, useEditorStore } from './store';

import { SELECT_HMI, SELECT_PROGRAM, SET_ROOT, UPDATE_HMI, UPDATE_PROGRAM } from './store/actions';

import { Grommet } from 'grommet';

import { FlowShard, Stack, IO, StackItems, FlowShardNodes, FlowShardPaths } from '@hive-flow/types'
import _ from 'lodash';
import { nanoid } from 'nanoid';
import { InfiniteCanvasNode, InfiniteCanvasPath } from '@thetechcompany/live-ui';

import Automerge from 'automerge'

export interface IEditorProgram {
    _id?: string;
    id?: string;
    name?: string;

    program?: FlowShard[], //FlowShard
    hmi?: FlowShard[], //FlowShard
    plugins?: Stack[], //Stack
    io?: IO[] //ProgramIO
}

export interface EditorProps {
    program?: IEditorProgram

    view?: "program" | "controls" | "connections"

    onBack?: () => void;
    onPublish?: (program: IEditorProgram) => void;

    onAddProgram?: (program: any) => void;
    onUpdateProgram?: (id: string, program: FlowShard) => void;

    onAddProgramNode?: (id: string, node: FlowShardNodes) => void;
    onUpdateProgramNode?: (id: string, node: FlowShardNodes) => void;

    onAddProgramPath?: (id: string, node: FlowShardPaths) => void;
    onUpdateProgramPath?: (id: string, path: FlowShardPaths) => void;
}



export const HiveFlowEditor: React.FC<EditorProps> = (props) => {
    const initialState: any = {
        program: props.program?.program //[] //_.cloneDeep(props.program) || {}
    }

    const {state, dispatch} = useEditorStore(initialState) //useReducer(EditorReducer, initialState)

    const {
     //   program,
        selectedPluginItem,
        selectedHMI,
      //  selectedProgram,
        edited
    } = state;

    const [ program, setProgram ] = useState<IEditorProgram | undefined>(props.program)

    const [ selectedProgram, setSelectedProgram ] = useState<string>()


    useEffect(() => {

        if (props.program && !isEqual(props.program, program)) {
            setProgram(props.program)
        //    dispatch({ type: SET_ROOT, data: _.cloneDeep(props.program) })
        }
    }, [JSON.stringify(props.program)])

    const [selectedMenu, setSelectedMenu] = useState<number>(-1)



    const _stacks: any[] = [];
    const Processes = [];

    /*
    const shardQuery = useApolloQuery(GET_PROGRAM_SHARDS, { variables: { parent: props.match.params.id } })
    const programQuery = useApolloQuery(GET_PROGRAM, { variables: { id: props.match.params.id } })
    const stackQuery = useApolloQuery(GET_STACKS)
    
    const Processes = (shardQuery.data || {}).FlowShardMany
    const program_root = (programQuery.data || {}).ProgramOne;
    const stacks = (stackQuery.data || {}).StackMany

    const [ _stacks, setStacks ] = useState<any[]>([])
*/

    /*
        useEffect(() => {
            if(stacks && !isEqual(stacks, _stacks)){
                setStacks(stacks)
            }
        }, [stacks])
    
        useEffect(() => {
            console.log(program_root?.program)
            if (program_root && Processes) {
                let p: any = {};
                setProgram(cleanAll(program_root, Processes) as any)
            }
    
        }, [JSON.stringify(program_root), JSON.stringify(Processes)])
    
     */

    const [activePlugin, setActivePlugin] = useState<StackItems | undefined>()


    useEffect(() => {
        if (selectedPluginItem && selectedPluginItem.stack != undefined && selectedPluginItem.item != undefined) {
            setActivePlugin((program?.plugins?.[selectedPluginItem?.stack] || { items: [] }).items?.[selectedPluginItem?.item])
        }
    }, [selectedPluginItem, program?.plugins])


    //plugins -> Stack[]
    const getPluginItemByIndex = (plugins: any[], stack: number, item: number) => {
        let plugin = (plugins[stack] || { items: [] }).items?.[item] || {};
        console.log("Active Plugin", plugin)
        return plugin;
    }


    /*

    */
    const menu = [
        {
            id: 'program',
            icon: <Icons.Folder />,
            label: "Program",
            menu: (
                <ProgramMenu
                onSelect={(selector) => {

                    // let parts = selector.split('.')
                    // let id = parts[parts.length - 1]
                    // if (id == 'root') return;

                    selectProgram(selector)

                 //   setSelectedProgram(program?.program?.find((a) => a._id == id))
                    // dispatch({ type: SELECT_PROGRAM, data: id })

                }}
                onCreate={(program) => {
                    props.onAddProgram?.(program)
                }}
                program={props.program?._id || ''}
                program_shards={props.program?.program || []} />
                ),
            content: (<ProgramEditor
                program={program?.program?.find((a) => a._id == selectedProgram)}
                onChange={(id, program) => {

                    dispatch({
                        type: UPDATE_PROGRAM, data: {
                            id: selectedProgram,
                            update: program
                        }
                    })
                }}
                items={program?.program?.filter((a) => a.parent == selectedProgram)} />)
        },
        {
            id: 'hmi',
            icon: <Icons.Monitor />,
            label: "HMI",
            menu: (<HMIMenu
                program={program?.id}
                onSelect={(hmi) => {
                    dispatch({ type: SELECT_HMI, data: hmi })
                }}
                hmi={program?.hmi || []} />),
            content: (<HMIEditor
                hmi={program?.hmi?.find((a) => a._id == selectedHMI)}
                onChange={(hmi) => {
                    dispatch({
                        type: UPDATE_HMI, data: {
                            id: selectedHMI,
                            hmi
                        }
                    })
                }}
                plugins={program?.plugins} />)
        },
        {
            id: 'io',
            icon: <Icons.Technology />,
            label: "I/O",
            menu: (<IOMenu
                program={program?._id}
                items={program?.io}
                plugins={program?.plugins} />),
            content: (
                <Box>

                </Box>
            )
        }
    ]

    const cleanChanges = (program: IEditorProgram) => {
        return {
            ...program,
            io: _.map(program.io, _.partialRight(_.pick, ["name", "type"]))
        }
    }

    const publishChanges = () => {
        if (state.program) {
            props.onPublish?.(cleanChanges(state.program))
        }
    }

    const renderView = () => {
        switch(props.view){
            case 'program':
                return menu[0].content
                break;
            case 'controls':
                return menu[1].content
                break;
            case 'connections':
                return menu[2].content
                break;
        }
    }

    const getMenu = () => {
        let menu_item : any = null;
        switch(props.view){
            case 'program':
                menu_item = menu[0]
                break;
            case 'controls':
                menu_item = menu[1]
                break;
            case 'connections':
                menu_item = menu[2]
                break;
        }
        if(!menu_item) return;
        return [menu_item];
    }

    const renderMenu = () => {
        let menu = getMenu() || [];
        return menu?.map((menu_item, ix) => (
            <Box
                style={{ background: selectedMenu == ix ? '#076b70' : 'initial' }}
                align="center"
                justify="center"
                pad={menu_item.id == selectedMenu ? { right: '3px' } : ''}>
                <Button
                    onClick={() => {
                        setSelectedMenu(selectedMenu == ix ? -1 : ix)
                    }}
                    icon={React.cloneElement(menu_item.icon, { color: "#f3b41b" })} />
            </Box>
        ))
    }

    const renderSelectedMenu = () => {
        let menu = getMenu() || []
        return menu[selectedMenu]?.menu;
     
    }

    const addPath = (program: string, path: InfiniteCanvasPath & any) => {
        path.points = path.points || []
        props.onAddProgramPath?.(program, path)
    }

    const updatePath = (id: string, path: InfiniteCanvasPath & any) => {
        console.log("Update Path - 291", path)
        props.onUpdateProgramPath?.(id, path)
    }

    const removePath = () => {

    }

    const addNode = (program: string, node: InfiniteCanvasNode & { extras: any}) => {
        let newNode = {
            id: nanoid(),
            type: node.type,
            extras: node.extras,
            x: node.x,
            y: node.y
        }

        props.onAddProgramNode?.(program, newNode)
    }

    const updateNode = (id: string, node: InfiniteCanvasNode & {extras: any}) => {

       // console.log("U", node.x)
        let program = props.program?.program?.find((a) => a._id == id)
        let program_ix = props.program?.program?.map((x) => x._id).indexOf(id)
        let node_ix = (program?.nodes || []).map((a) => a.id).indexOf(node.id)

        if(program && program.nodes && node_ix > -1){
             program.nodes[node_ix] = {
//                 ...program.nodes[node_ix],
                 ...node
             }
        
            props.onUpdateProgramNode?.(id, program.nodes[node_ix])

        }

    }

    const removeNode = () => {
    }

    const selectProgram = (id: string) => {
        let parts = id.split('.')
        let _id = parts[parts.length - 1]
        if (_id == 'root') return;

       setSelectedProgram(_id)
    }

    return (
        <Grommet
            style={{display: 'flex'}}
            plain
            full>
        <EditorContext.Provider value={{
            program: program,
            dispatch,
            state,
            publishChanges,

            addPath,
            updatePath,
            removePath,
            addNode,
            updateNode,
            removeNode,

            selectProgram
        }}>
            <Box
                direction="row"
                flex>

                <Box

                    height="100%"
                    elevation="medium"
                    border={{ color: "#076b70", size: 'small' }}
                    style={{zIndex: 2, background: 'linear-gradient(#054c54, #003f49)', transition: 'width 200ms ease-in' }}
                    direction="row"
                    width={selectedMenu > -1 ? "270px" : 'xxsmall'}>

                    <Box
                        elevation="medium"
                        overflow="hidden"
                        direction="column"
                        width="xxsmall">
                        {renderMenu() || []} 
                    </Box>
                    <Box
                        overflow="hidden"
                        flex>
                        {renderSelectedMenu()}
                    </Box>
                </Box>
                <Box
                    style={{ position: 'relative' }}
                    direction="row"
                    flex>

                    {renderView()}
                </Box>

            </Box>
        </EditorContext.Provider>
        </Grommet>
    )
}