import { Box,Text, Layer, Select, TextInput, Button } from 'grommet';
import React, { useState } from 'react';

export interface FolderModalProps {
    files: {name: string}[]
    open: boolean;
    onClose: () => void;
    onSubmit: (folder: {name: string}) => void;
}

export const ConvertModal : React.FC<FolderModalProps> = (props) => {

    const [name, setName ] = useState<string>('')

    const onSubmit = () => {
        props.onSubmit({name})
        props.onClose()
        setName('')
    }
    return props.open ? (
        <Layer onEsc={props.onClose} onClickOutside={props.onClose}>
            <Box round='xsmall' width="medium">
                <Box pad="xsmall" background="accent-2" direction="row">
                    <Text>Convert files</Text>
                </Box>
                <Box pad="xsmall">
                    {props.files.map((x) => (<Text>{x.name}</Text>))}
                    <Select
                        placeholder="Output format"
                        options={[".GLB", ".STL"]} />
           
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