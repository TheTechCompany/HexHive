import { Box, Button } from 'grommet';
import React from 'react';
import { Nodes } from 'grommet-icons';

export interface EditorMenuProps {
    menu: {icon: any, active: boolean, onClick: any}[]
    view?: any;
}

export const EditorMenu : React.FC<EditorMenuProps> = (props) => {
    return (
        <Box 
            style={{zIndex: 99}}
            elevation="large"
            background="accent-1"
            direction="column">
            
            {props.menu.map((menu_item) => (
                <Button 
                    onClick={menu_item.onClick}
                    active={menu_item.active}
                    hoverIndicator
                    icon={menu_item.icon} />
            ))}
        </Box>   
    )
}