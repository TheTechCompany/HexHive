import { Box, Collapsible, Text, Heading, Button } from 'grommet'
import React, {useState} from 'react' 
import * as Icons from 'grommet-icons';
import { Block, BlockTray } from '@hexhive/ui';
import styled from 'styled-components'

export interface NodeDropdownProps {
    title?: string;
    items: Block[];
    className?: string;
}

export const BaseNodeDropdown : React.FC<NodeDropdownProps> = (props) => {
    const [ expanded, setExpanded ] = useState(false)

    return (
      
                    
                    <BlockTray 
                        renderItem={(block) => (
                        <Box   
                            style={{position: 'relative'}}
                            background="accent-1"
                            pad="xsmall"
                            round="xsmall"
                            justify={block.extras?.dimensions ? "center" : 'start'}
                            align="center"
                            direction="row">
                            {block.icon}
                            <Box 
                                style={block.extras?.dimensions || {marginLeft: 8}}>{block.content || block?.label}</Box>
                        </Box>)}
                        blocks={props.items as any} />

    )
}

export const NodeDropdown = styled(BaseNodeDropdown)`
    .tray-item {
        background: #003f49;
        margin-bottom: 8px;
        cursor: pointer;
        box-shadow: 0px 4px 8px -4px black;
    }
`  