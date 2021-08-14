import { Box, List, Text} from 'grommet';
import React from 'react';

export const Sidebar : React.FC<any> = (props) => {
    return (
        <Box 
            height="100%"
            width="small"
            elevation="small"           
            background="neutral-1">
            <Box 
                pad="xsmall"
                elevation="small">
                <Text 
                    weight="bold">Documents</Text>

            </Box>
            <Box pad="xsmall">
                <List 
                    data={["Integration Plan"]} />
            </Box>
        </Box>
    );
}