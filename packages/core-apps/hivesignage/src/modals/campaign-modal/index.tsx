import React from 'react';

import { Box, Text, Button, Layer, TextInput } from 'grommet'
import { useState, useEffect } from 'react';

export interface CampaignModalProps {
    open: boolean;
    selected?: any;
    onClose?: () => void;
    onDelete?: () => void;
    onSubmit?: (app: {name: string}) => void;
}
export const CampaignModal: React.FC<CampaignModalProps> = (props) => {
    // const [ name, setName ] = useState<string>('')
    const [ campaign, setCampaign ] = useState<any>({})

    useEffect(() => {
        setCampaign({...props.selected})
    }, [props.selected])

    return props.open ? (
        <Layer
            onEsc={props.onClose}
            onClickOutside={props.onClose}
        >
            <Box
                width="medium">
                <Box background="accent-2" pad="xsmall" direction="row">
                    <Text>{campaign.id ? "Update" : "Create"} Campaign</Text>
                </Box>
                <Box
                    pad="xsmall"
                    >
                    <TextInput 
                        value={campaign.name}
                        onChange={(e) => setCampaign({...campaign, name: e.target.value})}
                        placeholder="Campaign Name" />

                    <Box 
                        margin={{top: 'small'}}
                        justify="end"
                        direction="row">
                        {campaign.id && <Button onClick={props.onDelete} label="Delete" color="red" />}
                        <Button label="Cancel" onClick={props.onClose} />
                        <Button onClick={() => props.onSubmit(campaign)} primary label={campaign.id ? "Save" : "Create"} />
                    </Box>
                </Box>
            
            </Box>
        </Layer>
    ) : null
}