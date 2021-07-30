import React from 'react';
import { Box, Text, List, Button } from 'grommet'
import * as Icons from 'grommet-icons'
import { TextInput } from 'grommet';
import { IOSpecModal } from '../../modals/iospec/IOSpecModal';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { EditorContext } from '../../context';
import { ADD_PLUGIN_INPUT, ADD_PLUGIN_OUTPUT, UPDATE_PLUGIN_ITEM, UPDATE_PLUGIN_KEY } from '../../store/actions';
import { IStackItems } from '@hexhive/types';

export interface IOSpecEditorProps{
    plugin: IStackItems;
}

export const IOSpecEditor : React.FC<IOSpecEditorProps> = (props) => {

    const { state, dispatch } = useContext(EditorContext)

    const [ modalOpen, openModal ] = useState<boolean>(false)
    const [ ioType, setIOType ] = useState<"input" | "output">()

    const [ plugin, setPlugin ] = useState<IStackItems>()

    const [ name, setName ] = useState<string>('')
    const [ key, setKey ] = useState<string>('')

    const [ inputs, setInputs ] = useState<any[]>([])
    const [ outputs, setOutputs ] = useState<any[]>([])

    useEffect(() => {
        setPlugin(props.plugin)
    }, [props.plugin])

 

    return (
        <Box 
            flex 
            direction="row">
            <IOSpecModal
                onSubmit={(io: any) => {
                    switch(ioType){
                        case 'input':
                            // dispatch?.({type: ADD_PLUGIN_INPUT, data: {
                            //     id: props.plugin?._id,
                            //     item_id: props.plugin_item?._id, 
                            //     input: io
                            // }})

                          //  setInputs([...inputs, io])
                            break;
                        case 'output':
                            console.log("Output", io)
                            // dispatch?.({type: ADD_PLUGIN_OUTPUT, data: {
                            //     id: props.plugin?._id,
                            //     item_id: props.plugin_item?._id, 
                            //     output: io
                            // }})
                            break;
                            //setOutputs([...outputs, io])
                    }
                }}
                open={modalOpen} 
                onClose={() =>{
                    setIOType(undefined)
                     openModal(false)
                }} />
            <Box
                pad="small"
                direction="column"
                flex>
            
                <Box gap="small" direction="column" width="70%">
                <TextInput 
                    value={props.plugin.name}
                    onChange={(e) => {
                        dispatch?.({type: UPDATE_PLUGIN_ITEM, data: {
                            update: {
                                name: e.target.value
                            }
                        }})
                    }}
                    placeholder="Name" />
                <TextInput 
                    value={props.plugin.key}
                    onChange={(e) => {
                        dispatch?.({type: UPDATE_PLUGIN_ITEM, data: {
                            update: {
                                key: e.target.value
                            }
                        }})
                    }}
                    placeholder="IO-Key" />
                </Box>
        

            </Box>
            <Box
                pad="small"
                gap="small"
                direction="column"
                flex>
                <Box 
                    elevation="small"
                    flex>
                    <Box 
                        align="center"
                        justify="between"
                        pad="xsmall" 
                        direction="row" 
                        elevation="small">
                        <Text>Inputs</Text>
                        <Button onClick={() => {
                            setIOType("input")
                            openModal(true)
                        }} icon={<Icons.Add size="small" />} />
                    </Box>
                    <List
                        data={props.plugin.inputs} 
                        primaryKey="name"
                        secondaryKey="type"/>
                   
                </Box>
                <Box
                    elevation="small"
                    flex>
                   <Box 
                    align="center"
                    justify="between"
                    pad="xsmall" 
                    direction="row" 
                    elevation="small">
                        <Text>Outputs</Text>
                        <Button onClick={() => {
                            setIOType("output")
                            openModal(true)
                        }} icon={<Icons.Add size="small" />} />
                    </Box>
                    <List
                        data={props.plugin.outputs}
                        primaryKey={"name"}
                        secondaryKey={"type"} />
             
                </Box>
            </Box>
        </Box>
    )
}