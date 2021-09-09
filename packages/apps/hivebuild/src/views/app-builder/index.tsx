import { Box } from 'grommet';
import React from 'react';
import { Composer } from '../../components/composer';

export interface AppBuilderProps {
    
}
export const AppBuilder : React.FC<AppBuilderProps> = (props) => {
    return (
        <Box flex>
            <Composer />
        </Box>
    )
}