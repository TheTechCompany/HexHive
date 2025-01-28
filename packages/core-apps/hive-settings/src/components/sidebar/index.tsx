import React from 'react';
import { SidebarItem } from './item';
import { Box, List } from '@mui/material';

export interface SidebarProps {
    items: {label: string, icon?: any, path: string}[]
}

export const Sidebar : React.FC<SidebarProps> = (props) => {


    return (
        <Box sx={{minWidth: '200px', color: 'white', bgcolor: 'primary.main'}}>
            <List>
                {props.items?.map((item) => <SidebarItem {...item} />)}
            </List>
        </Box>
    )
}