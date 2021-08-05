import { Box, Button, Layer, List, Menu } from 'grommet';
import { More } from 'grommet-icons'
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';


export const KanbanColumnMenu : React.FC<any> = (props) => {
    const target = useRef<any>(null);
    const [ menuOpen, openMenu ] = useState<boolean>(false);

    return (
        <Menu
            dropAlign={{top: 'bottom', left: 'left'}} 
            dropBackground="neutral-1" 
             icon={<More />} 
             items={props.menu}/>
    ) ; 
}