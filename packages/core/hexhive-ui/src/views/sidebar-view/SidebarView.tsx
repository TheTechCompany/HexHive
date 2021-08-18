import { Box } from 'grommet';
import React from 'react';

export interface SidebarViewProps {

}

export const SidebarView : React.FC<SidebarViewProps> = (props) => {
    return (
        <Box 
            direction="row"
            flex>
            <Box
                height="100%"
                width="small">

            </Box>
            <Box flex>

            </Box>
        </Box>
    );
}