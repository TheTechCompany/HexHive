import { Box } from 'grommet';
import React from 'react';

export const ScheduleContainer : React.FC<any> = (props) => {
    return (
        <Box
            flex
            round="xsmall"
            background="neutral-1"
            direction="column">
        
            <Box>
                {props.header}
            </Box>
            <Box flex>
                {props.children}
            </Box>
        </Box>
    );
}