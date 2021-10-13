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
        <Box
            onMouseDown={(e) => e.stopPropagation()}
            className={props.className}             
            style={{position: 'absolute', right: 8, top: 8}}
            round="medium"
            border={{size: 'small', color: 'light-1'}}
            background="brand" 
            elevation="small">

           <Box
            pad={{right: 'medium'}}
            width="small"
            direction="row"
            align="center">
            <Button
                onClick={() => setExpanded(!expanded)}
                    margin={{right: 'xsmall'}}
                    icon={<Icons.Down size="small" />} />
                <Heading margin="none" level='4'>
                {props.title || "Nodes"}

                </Heading>
            </Box>     
   
            <Collapsible 
                open={expanded}>
                <Box
                    onWheel={(e) => e.stopPropagation()}
                    overflow={{vertical: 'auto'}}
                    pad="xsmall"
                    direction="column"
                    width="small"
                    height="medium">
                    
                    <BlockTray 
                        renderItem={(block) => (
                        <Box   
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

                </Box>
            </Collapsible>
        </Box>
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