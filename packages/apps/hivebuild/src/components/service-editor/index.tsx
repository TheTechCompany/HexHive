import { Box, Text } from 'grommet';
import React from 'react';

export interface ServiceEditorProps {
    app?: any;
}

export const ServiceEditor : React.FC<ServiceEditorProps> = (props) => {
    return (
        <Box
            pad="xsmall"
            direction="column"
            gap="xsmall"
            flex>
            <Box
                background="accent-1"
                round="small"
                pad="small"
                direction="row">
                Files
            </Box>  
            <Box
                background="accent-1"
                round="small"
                pad="small"
                direction="row">
                Network
            </Box> 
            <Box
                background="accent-1"
                round="small"
                pad="small"
                direction="row">
                Messaging
            </Box> 
            <Box
                background="accent-1"
                round="small"
                pad="small"
                direction="row">
                Auth
            </Box> 
        </Box>
    )
}