import React from 'react';

import { Box, Text, Button, Layer, TextInput, Select } from 'grommet'
import { useState } from 'react';

export interface PortModalProps {
    open: boolean;
    onClose?: () => void;
    onSubmit?: (app: {name: string, type: string}) => void;
}
export const PortModal: React.FC<PortModalProps> = (props) => {
    const [ name, setName ] = useState<string>('')
    const [ type, setType ] = useState<string>('')

    return props.open ? (
        <Layer
            onEsc={props.onClose}
            onClickOutside={props.onClose}
        >
            <Box
                width="medium">
                <Box background="accent-2" pad="xsmall" direction="row">
                    <Text>Create Port</Text>
                </Box>
                <Box
                    gap="xsmall"
                    pad="xsmall"
                    >
                    <TextInput 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Port Name" />

                    <Select 
                        value={type}
                        onChange={({value}) => setType(value)}
                        placeholder="Port Type"
                        options={["File", "Text"]} />
                    <Box 
                        margin={{top: 'small'}}
                        justify="end"
                        direction="row">
                        <Button label="Cancel" onClick={props.onClose} />
                        <Button onClick={() => props.onSubmit({name: name, type: type})} primary label="Create" />
                    </Box>
                </Box>
            
            </Box>
        </Layer>
    ) : null
}