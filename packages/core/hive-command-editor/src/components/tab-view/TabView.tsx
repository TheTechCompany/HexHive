import { Box } from 'grommet';
import { Tab } from './Tab'
import React, { useState } from 'react';
import { useEffect } from 'react';
import * as Icons from 'grommet-icons';
import { AddTab } from './AddTab';

export interface TabViewProps{
    tabs?: {
        label?: string;
        pane?: any;
        background?: string;
    }[]
    background?: string;
    active?: number;

    onTabChange?: (tab?: number) => void;

    onAdd?: () => void;
}

export const TabView : React.FC<TabViewProps> = (props) => {
    const [ selected, setSelected ] = useState<number>(0)
    
    useEffect(() => {
        setSelected(props.active || 0)
    }, [props.active])

    const onChange = (index: number) => {
        props.onTabChange?.(index)
        setSelected(index)
    }

    return (
        <Box 
            background="light-1"
            elevation="small"
            flex
            direction="column">
            <Box elevation="small" direction="row">
                {props.tabs?.map((tab, ix) => (
                    <Tab 
                        onSelect={() => onChange(ix)}
                        selected={selected == ix}
                        background={tab.background || props.background || 'brand'} 
                        label={tab.label} />
                ))}
                
                {props.onAdd &&( 
                <AddTab />)}
            </Box>
            <Box
                direction="column"
                flex>
                {(selected != undefined && selected > -1) && props.tabs?.[selected].pane}
            </Box>
        </Box>
    )
}