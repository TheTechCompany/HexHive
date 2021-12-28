import { Box, Button, Layer, Text } from 'grommet';
import React from 'react';

export interface BaseModalProps {
    open: boolean;
    onClose?: () => void;
    onSubmit?: () => void;
    onDelete?: () => void;
    title?: string;
    width?: string;
    height?: any;
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
                round="xxsmall"
                overflow="hidden"
                width={props.width}
                flex
                direction="column"
           >
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
                    {props.onDelete && <Button color="red" onClick={props.onDelete} label="Delete" />}
                    <Button onClick={props.onClose} label="Cancel" />
                    <Button onClick={props.onSubmit} primary label="Save" />
                </Box>
            </Box>
        </Layer>
    ) : null
}