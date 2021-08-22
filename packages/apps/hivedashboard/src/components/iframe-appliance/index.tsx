import { Box } from 'grommet';
import React from 'react';
import { BaseHeader } from '../header';

export const IFrameAppliance = () => {
    return (
        <Box 
            direction="column"
            flex>
            <BaseHeader />
            <iframe style={{flex: 1}} src="https://matrix.hexhive.io/element/#/home" >

            </iframe>
        </Box>

    );
}   