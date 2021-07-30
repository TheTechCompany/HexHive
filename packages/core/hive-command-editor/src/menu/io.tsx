import { TreeView } from '@thetechcompany/live-ui';
import { Box } from 'grommet';
import React, { useState } from 'react';
import { IOModal } from '../modals/io';

import { IO, IStack } from '@hexhive/types';
import { useContext } from 'react';
import { EditorContext } from '../context';
import { ADD_IO } from '../store/actions';

const types = [{
    key: "blower",
    label: "Blower"
 }, {
     key: "valve",
     label: "Valve"
 }, {
    key: "pump",
    label: "Pump"
 }, {
    key: "levelSensor",
    label: "Level Sensor"
},{ 
    key: "pressureSensor",
    label: "Pressure Sensor"
}]

export interface IOMenuProps{
    items?: IO[];
    plugins?: IStack[];
    program?: string;
}

export const IOMenu : React.FC<IOMenuProps> = (props) => {
    console.log(props.items)
    
    const { state, dispatch } = useContext(EditorContext)

    const [ modalOpen, openModal ] = useState(false);
    
    const [ createNode, setCreateNode ] = useState<string>()

    const addProgramIO = (args: {program_id: string, name: string, type: string}) => {
        console.log(args)
        dispatch?.({type: ADD_IO, data: {
            name: args.name,
            type: args.type
        }})
    }

    const getPluginTypes = () => {
        let types : any[] = [];
        props.plugins?.forEach((plugin) => {
            types = types.concat(plugin.items)
        })
        return types;
    }

    return (
        <Box>
            <IOModal 
                onSubmit={(io:any) => {
                    console.log(props.program, io)
                    if(props.program){
                        addProgramIO({program_id: props.program, name: io.name, type: io.type._id})
                    }
                }}
                onClose={() => openModal(false)}
                types={getPluginTypes()}
                open={modalOpen} />
             <TreeView
                    onCreate={(selector) => {
                        setCreateNode(selector)
                        openModal(true)
                    }}
                    expanded={["root"]}
                    items={[{
                        id: 'root',
                        label: "I/O", 
                        items: props.items?.map((io) => ({
                            id: io._id || '',
                            label: io.name || ''
                        })) || []
                    }]}
            />
        </Box>
    )
}