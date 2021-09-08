import { Box, Text } from 'grommet';
import React from 'react';
import { IFile } from '../../types/file';

export interface GridCardProps {
    data?: IFile;
    onClick?: () => void;
}
export const GridCard : React.FC<GridCardProps> = (props) => {
    return (
        <Box
            style={{cursor: 'pointer'}}
            onClick={props.onClick}
            round="xsmall"
            background="neutral-1"
            elevation="small">
            <Box flex align="center" justify="center">
                {props.data?.icon}  
            </Box>
            <Box align="center" justify="center">
                <Text>{props.data?.name}</Text>
            </Box>
        </Box>
    )   
}