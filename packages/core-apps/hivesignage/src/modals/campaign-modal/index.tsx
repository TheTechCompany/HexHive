import React from 'react';

import { Box, Text, Button, Layer, TextInput } from 'grommet'
import { useState } from 'react';

export interface CampaignModalProps {
    open: boolean;
    onClose?: () => void;
    onSubmit?: (app: {name: string}) => void;
}
export const CampaignModal: React.FC<CampaignModalProps> = (props) => {
    const [ name, setName ] = useState<string>('')

    return props.open ? (
        <Layer
            onEsc={props.onClose}
            onClickOutside={props.onClose}
        >
            <Box
                width="medium">
                <Box background="accent-2" pad="xsmall" direction="row">
                    <Text>Create Campaign</Text>
                </Box>
                <Box
                    pad="xsmall"
                    >
                    <TextInput 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Campaign Name" />

                    <Box 
                        margin={{top: 'small'}}
                        justify="end"
                        direction="row">
                        <Button label="Cancel" onClick={props.onClose} />
                        <Button onClick={() => props.onSubmit({name: name})} primary label="Create" />
                    </Box>
                </Box>
            
            </Box>
        </Layer>
    ) : null
}