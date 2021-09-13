import { Box, Button, Layer, Text } from 'grommet';
import React from 'react';

export interface BaseModalProps {
    open: boolean;
    onClose?: () => void;
    title?: string;
    width?: string;
}

export const BaseModal : React.FC<BaseModalProps> = (props) => {
    
    const onClose = () => {
        props.onClose?.()
    }

    return props.open ? (
        <Layer
            onEsc={onClose}
            onClickOutside={onClose}>
            <Box
                direction="column"
                width={props.width || "medium"}>
                <Box 
                    pad="xsmall"
                    background="accent-2"
                    direction="row">
                    <Text>{props.title}</Text>
                </Box>
                <Box 
                    pad="xsmall"
                    flex>
                    {props.children}
                </Box>
                <Box 
                    pad="xsmall"
                    justify="end"
                    direction="row"
                    gap='xsmall'>
                    <Button onClick={props.onClose} label="Cancel" />
                    <Button primary label="Save" />
                </Box>
            </Box>
        </Layer>
    ) : null
}