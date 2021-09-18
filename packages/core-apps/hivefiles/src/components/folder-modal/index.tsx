import { Box,Text, Layer, TextInput, Button } from 'grommet';
import React, { useState } from 'react';

export interface FolderModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (folder: {name: string}) => void;
}

export const FolderModal : React.FC<FolderModalProps> = (props) => {

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
                    <Text>Create folder</Text>
                </Box>
                <Box pad="xsmall">
                    <TextInput 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Folder name" />

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