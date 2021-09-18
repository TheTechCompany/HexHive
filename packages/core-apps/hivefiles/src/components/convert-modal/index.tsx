import { useQuery } from '@hexhive/client';
import { Box,Text, Layer, Select, TextInput, Button, List } from 'grommet';
import React, { useState } from 'react';

export interface FolderModalProps {
    files: {name: string}[]
    open: boolean;
    onClose: () => void;
    onSubmit: (conversion: {workflow: string}) => void;
}

export const ConvertModal : React.FC<FolderModalProps> = (props) => {

    const [ workflow , setWorkflow ] = useState<string>('')

    const query = useQuery({suspense: false})
    const onSubmit = () => {
        props.onSubmit({workflow})
        props.onClose()
        setWorkflow('')
    }

    const workflows = query.hivePipelines().map((x) => ({...x}))

    return props.open ? (
        <Layer onEsc={props.onClose} onClickOutside={props.onClose}>
            <Box round='xsmall' width="medium">
                <Box pad="xsmall" background="accent-2" direction="row">
                    <Text>Run workflow</Text>
                </Box>
                <Box pad="xsmall">
                    <Text>
                        Files
                    </Text>
                    <List 
                        data={props.files} 
                        primaryKey={"name"} />
                    <Select
                        placeholder="Workflow"
                        labelKey={"name"}
                        valueKey={{key: "id", reduce: true}}
                        onChange={({value}) => setWorkflow(value)}
                        value={workflow}
                        options={workflows} />
           
                </Box>
                <Box
                    pad="xsmall" 
                    justify="end"
                    gap="xxsmall"
                    direction="row">
                    <Button onClick={props.onClose} label="Cancel" />
                    <Button onClick={onSubmit} primary label="Submit" />

                </Box>
            </Box>
        </Layer>
    ) : null;
}