import React, { useState, useContext }  from 'react';

import { TextInput, Text, Box, Button, Collapsible } from 'grommet';
import { NodeEditorContext } from '../context';
import { IStackItemsPorts } from '@hexhive/types'
import { SettingsOption } from 'grommet-icons';

/*
export interface Port {
    type?: string;
    x?: number;
    y?: number;
    scaleX?: number;
    scaleY?: number;
    rotation?: number;
    name?: string;
}*/

const PortItem = (props: {port: IStackItemsPorts, onChange: (port: IStackItemsPorts) => void}) => {

    const onChange = (key: string, val: any) => {
        let p : any = Object.assign({}, props.port)
        p[key] = val;
        props.onChange?.(p)
    }
    return (
        <div>
            <TextInput 
                placeholder="Name"
                value={props.port.name} 
                onChange={(e) => onChange('name', e.target.value)}/>
            <TextInput 
                placeholder="X"
                type="number"
                value={props.port.x}
                onChange={(e) => onChange('x', parseFloat(e.target.value))} />
            <TextInput 
                placeholder="Y"
                type="number"
                value={props.port.y} 
                onChange={(e) => onChange('y', parseFloat(e.target.value))}/>
            <TextInput 
                placeholder="Rotation"
                type="number"
                value={props.port.rotation}
                onChange={(e) => onChange('rotation', parseFloat(e.target.value))} />
        </div>
    )
}

const PortsPane = (props: any) => {
    const { ports, setPorts } = useContext(NodeEditorContext)

    const addPort = () =>   {
        if(ports){
            let p = ports?.concat([{
                name: 'new port', 
                x: 0,
                y: 0, 
                rotation: 0, 
                type: 'retracting'
            } as any])
            if(p){
                
                setPorts?.(p as any[])
            }
        }
    }

    const updatePort = (ix: number, update: IStackItemsPorts) => {
        let p = ports?.slice()
        if(p){
        p[ix] = update;
        setPorts?.(p as any[])
        }
    }
    return (
        <div style={{
            padding: 4, 
            backgroundColor: 'turquoise', 
            flex: 1,
            display: 'flex', flexDirection: 'column'}}>
            <Text style={{textAlign: 'center'}}>Ports</Text>
            {ports?.map((port : IStackItemsPorts | null, ix: number) => port && (
                <Collapsible style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Box style={{
                        display: 'flex',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Text>{port.name}</Text>
                    
                    </Box>
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <PortItem
                            onChange={(port) => updatePort(ix, port) }
                            port={port} />
                    </Box>
                </Collapsible>
            ))}
            <Button onClick={addPort} primary label="Add Port" />

        </div>
    )
}

const MenuItem = {
    icon: <SettingsOption />,
    label: "Ports",
    pane: <PortsPane />
}

export default MenuItem;