import React from 'react'
import { Box, ListItem, Typography, ListItemButton } from '@mui/material'
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'

export interface SidebarItemProps {
    path: string;

    icon?: any;
    label: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = (props) => {

    const { pathname } = useResolvedPath(props.path)
    const isActive = useMatch(pathname) != null;

    const navigate = useNavigate();

    return (
        <ListItemButton sx={{'&.Mui-selected': {backgroundColor: "#dfdfdf10"} }} selected={isActive} onClick={() => navigate(props.path)}>
            {props.icon}
            <Typography sx={{marginLeft: '12px'}}>
                {props.label}
            </Typography>
        </ListItemButton>

    )
}