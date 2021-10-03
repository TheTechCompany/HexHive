import { Box } from 'grommet';
import React from 'react';

export interface SplitScreenProps {
    direction?: "row" | "column"
    top?: any;
    left?: any;
    bottom?: any;
    right?: any;
}

export const SplitScreen : React.FC<SplitScreenProps> = (props) => {
    return (
        <Box flex direction={props.direction || 'row'}>
            <Box 
                direction={(props.direction || 'row') == 'row' ? 'column' : 'row'}
                flex>
                {props.direction == 'row' ? props.left : props.top}
            </Box>
            <Box 
                direction={(props.direction || 'row') == 'row' ? 'column' : 'row'}
                flex>
                {props.direction == 'row' ? props.right : props.bottom}
            </Box>
        </Box>
    );
}