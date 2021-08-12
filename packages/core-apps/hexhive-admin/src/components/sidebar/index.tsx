import { Box, List, Text } from 'grommet';
import React from 'react';

export const Sidebar : React.FC<{items: {label: string, path: string}[], onClick: any}> = (props) => {
    return (
        <Box
            elevation="small"
            width="small">
            
            <List
                data={props.items}
                primaryKey="label"
                onClickItem={({item}: any) => props.onClick(item)} />

        </Box>
    );
}