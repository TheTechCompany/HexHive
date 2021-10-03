
import { Box } from 'grommet';
import React from 'react';

export interface AsymmetricSplitScreenProps {
    direction?: "row" | "column"
    splitRatio?: number;
    top?: any;
    left?: any;
    bottom?: any;
    right?: any;
}

export const AsymmetricSplitScreen : React.FC<AsymmetricSplitScreenProps> = (props) => {
    return (
        <Box flex direction={props.direction || 'row'}>
            <Box 
                direction={(props.direction || 'row') == 'row' ? 'column' : 'row'}
                style={{flex: props.splitRatio || 0.7}}>
                {props.direction == 'row' ? props.left : props.top}
            </Box>
            <Box 
                direction={(props.direction || 'row') == 'row' ? 'column' : 'row'}
                style={{flex: (1 - (props.splitRatio || 0.7))}}>
                {props.direction == 'row' ? props.right : props.bottom}
            </Box>
        </Box>
    );
}