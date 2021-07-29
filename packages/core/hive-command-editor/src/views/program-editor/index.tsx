import React, { useEffect, useMemo, useState } from 'react';
import { IconNodeFactory, StartNodeFactory } from '@thetechcompany/live-ui'
import { FlowShard, IO, Stack } from '@hexhive/types/dist/interfaces';
import { ActionNodeFactory } from './nodes/action-node';
import { FlowEditor } from '../../components/flow-editor';
import { NodeDropdown } from '../../components/node-dropdown';
import { StateMachineModal } from '../../modals/state-machine';
import * as Icons from 'grommet-icons';
import { stringify } from 'uuid';
import { useContext } from 'react';
import { EditorContext } from '../../context';
import _ from 'lodash'
import { ADD_NODE, ADD_PATH, UPDATE_NODE, UPDATE_PATH } from '../../store/actions';

export interface ProgramEditorProps {
    history?: any;
    match?: any;

    program?: FlowShard

    items?: FlowShard[];

    onChange?: (id?: string, program?: any) => void
}
export const PLUG_TYPES = [
                        {id: "valve", label: "Valve", operations: ["Open", "Close"]},
                        {id: "vsd", label: "VSD", operations: ["Start", "Stop"]},
                        {id: "pressure-sensor", label :"Pressure Sensor", operations: ["Read"]},
                        {id: "level-sensor", label: "Level Sensor", operations: ["Read"]},
                        {id: "flow-meter", label: "Flowmeter", operations: ["Read"]},
                        {id: "conductivity-sensor", label: "Conductivity Sensor", operations: ["Read"]}
                    ]


export const ProgramEditor : React.FC<ProgramEditorProps> = (props) => {

    const { 
        program, 
        dispatch,
        addNode,
        updateNode,
        removeNode,
        addPath,
        updatePath
        } = useContext(EditorContext)

    const [ selectedItem, setSelectedItem ] = useState<{type: string, id: string}>()
    const [ modalOpen, openModal ] = useState<boolean>(false)

 

    const node_items = (props.items || []).map((x) => ({
        blockType: 'icon-node',
        label: x.name,
        icon: <Icons.Inherit />,
        extras: {
            label: x.name,
            icon: 'Inherit'
        }
    }))

    const getActionableIO = (io_list: IO[], plugins: Stack[]) => {
        console.log(plugins)
        return io_list.map((io_dev) => {
            console.log(io_dev)
            return {
                _id: io_dev._id,
                name: io_dev.name,
                actions: [] //plugins.find((a) => a.name == io_dev.type)
            }
        })
    }

    return (
        <FlowEditor
            contextMenu={[
                {
                    label: "Edit",
                    icon: <Icons.Edit />,
                    onClick: (type: string, id: string) => {
                        setSelectedItem({type, id})
                        openModal(true)

                        console.log(type, id)
                    }
                }
            ]} 
            program={props.program as any}
            factories={[new ActionNodeFactory(getActionableIO(program?.io || [], program?.plugins || [])), new IconNodeFactory(), new StartNodeFactory()]}
            onNodeAdd={(node) => {
                console.log(props.program)
                if(props.program) addNode?.(props.program?._id.toString(), node)
              //  dispatch?.({type: ADD_NODE, data: {id: props.program?._id, node: node }})
            }}
            onNodeUpdate={(node) => {
                console.log(node.x)
                if(props.program) updateNode?.(props.program?._id, node)
              //  dispatch?.({type: UPDATE_NODE, data: {id: props.program?._id, node_id: node.id, node: node}})
            }}
            onPathAdd={(path) => {
                if(props.program) addPath?.(props.program?._id, path)
              //  dispatch?.({type: ADD_PATH, data: {id: props.program?._id, path: path}})
            }}

            onPathUpdate={(path) => {
                if(props.program) updatePath?.(props.program?._id, path)
               // dispatch?.({type: UPDATE_PATH, data: {id: props.program?._id, path_id: path.id, path: path}})
            }}

           >
            <StateMachineModal
                cols={selectedItem?.type == 'node' ? [
                    {
                        label: "Device",
                        key: "device",
                        labelKey: "label",
                        valueKey: "id",
                        options: [{id: "1", label: "AV401", actions: ["open", "close"]}, {id: '2', label: "BLO701", actions: ['start', 'stop']}]//state?.program?.io?.map((x) => x.name)
                        
                    },
                    {
                        label: "Action",
                        key: "action",
                        options: (state: any) => state.device.actions
                    }
                ] : [{
                    label: "Input",
                    key: "input",
                    options: [], 
                },
                {
                    label: "Comparator",
                    key: 'comparator',
                    options: ['>', '<', '=', '>=', '<=']    
                },
                {
                    label: "Value",
                    key: 'value',
                    options: 'text'
                }
                ]}
                title={selectedItem?.type == 'node' ? 'Update Node' : 'Update Path'}
                onClose={() => openModal(false)}
                 open={modalOpen} />
            <NodeDropdown
                items={[
                    {
                        label: "Action",
                        blockType: 'icon-node',
                        icon: <Icons.StatusDisabled />,
                        extras: {
                            label: "Action",
                            icon: 'StatusDisabled'
                        }
                    },
                    {
                        blockType: 'icon-node',
                        label: "Subprocess",
                        icon: <Icons.Inherit />,
                        extras: {
                            icon: 'Inherit'
                        }
                    },
                    {
                        blockType: 'gte',
                        label: "GTE", 
                        icon: <Icons.Next />,
                        extras: {
                            icon: 'Next',
                        }
                    }, 
                    {
                        blockType: 'if-else',
                        label: "IF/ELSE", 
                        icon: <Icons.Tree />,
                        extras: {
                            icon: 'Tree'
                        }
                    }
                ].concat(node_items as any)}
                 />
        </FlowEditor>
       
    )
}
