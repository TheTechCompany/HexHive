import { Box, Collapsible, Text, Heading, Button } from 'grommet'
import React, {useState} from 'react' 
import * as Icons from 'grommet-icons';
import { Block, BlockTray } from '@thetechcompany/live-ui';
import styled from 'styled-components'

export interface NodeDropdownProps {
    title?: string;
    items: Block & {icon?: any, extras: {icon: any} & any}[];
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
                        renderItem={(block : any) => (
                        <Box    
                            justify={block.dimensions ? "center" : 'start'}
                            align="center"
                            direction="row">
                            {block.icon}
                            <Box 
                                style={block.dimensions || {marginLeft: 8}}>{block.content || block.label}</Box>
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
        border-color: #076b70;
        border-width: 2px;
        border-radius: 4px;
        box-shadow: 0px 4px 8px -4px black;
    }
`  