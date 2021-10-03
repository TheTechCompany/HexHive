import { Box } from 'grommet';
import React from 'react';

export interface SingleColumnProps {
   align?: string;
}

export const SingleColumn : React.FC<SingleColumnProps> = (props) => {
    return (
        <Box
            align={props.align || "center"}
            flex
            direction={'column'}>
            <Box 
                flex
                width={'80%'}>
                {props.children}
            </Box>
        </Box>
    );
}