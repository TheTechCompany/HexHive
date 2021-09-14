import React from "react"
import styled from "styled-components"
import { RetractingPort } from "@hexhive/ui"
import { PortWidget } from "@hexhive/ui"
import { Box, Text } from "grommet"

export interface MultiportNodeProps {
    className?: string;
    node?: any;
    asset?: {
        dimensions: {
            width: number;
            height: number;
        }
        component: any;
        ports: any;
    };
}

//TODO click on port to set static value / change port to crossed expression

export const BaseMultiportNode : React.FC<MultiportNodeProps> = (props) => {
 
    console.log("NODE", props)

        return (
            <Box 
                overflow="hidden"
                direction="column"
                background="neutral-1"
                round="small"
                className={props.className}>
                    <Box
                    
                        pad="xsmall"
                        direction="column" 
                        background="accent-1">
                        <Text size="small">{props.node?.runner?.name}</Text>
                        {/* <Text size="xsmall">{props.node?.runner.name || "Action"}</Text> */}
                    </Box>
                    <Box
                        flex 
                        direction="row">
               <Box 
                    pad={{vertical: '20%'}}
                    direction="column" 
                    justify="between">
                    {props.node?.runner?.ports?.filter((a) => a.direction == 'input').map((port) => (
                        <PortWidget direction={"right"} label={port.name} id={port.id} />
                    ))}
                </Box>
                <Box 
                    pad="xsmall"
                    align="center"
                    flex
                    style={props.asset?.dimensions}>
                </Box>
                <Box 
                    pad={{vertical: '20%'}}
                    direction="column" 
                    justify="between">
                    {props.node?.runner?.ports?.filter((a) => a.direction == 'output').map((port) => (
                        <PortWidget direction={"left"} label={port.name} id={port.id} />
                    ))}
                </Box>
                </Box>
            </Box>
        )
  
}

export const MultiportNodeWidget = styled(BaseMultiportNode)`
    display: flex;
    height: 200px;
    width: 150px;

    svg{
        height: 100%;
        flex: 1;
    }
`