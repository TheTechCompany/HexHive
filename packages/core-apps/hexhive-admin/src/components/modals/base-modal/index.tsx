import { Box, Text, Layer } from 'grommet';
import React from 'react';

export const BaseModal : React.FC<{open: boolean, title: string, onClose: any}> = (props) => {
    return props.open ? (
        <Layer
            onEsc={props.onClose}
            onClickOutside={props.onClose}>
            <Box 
                width="medium"
                gap="xsmall" 
                pad="xsmall" flex>
                <Box>
                    <Text weight="bold">{props.title}</Text>
                </Box> 
                {props.children}
            </Box>
        </Layer>
    ) : null;
}