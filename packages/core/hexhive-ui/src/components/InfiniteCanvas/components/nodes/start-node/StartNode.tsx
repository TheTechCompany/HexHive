import { Box } from "grommet"
import React from "react"
import styled from "styled-components"
import { BaseIconNode } from "../icon-node"
import { PortWidget } from "../../ports"

export interface StartNodeProps {
    className?: string;
}   

export const BaseStartNode : React.FC<StartNodeProps> = (props) => {
    return (
        <BaseIconNode className={props.className} extras={{icon: 'Play'}}>
            {(icon) => (
                <>
                {icon}
                <PortWidget type="out" id="out" />
                </>
            )}
        </BaseIconNode>
    )
}

export const StartNode = styled(BaseStartNode)`
    .port{
        position: absolute;
        bottom: -7px;
        left: 0;
        right: 0;
        width: 15px;
        height: 15px;
        margin: 0 auto;
        border-radius: 10px;
    }
`
