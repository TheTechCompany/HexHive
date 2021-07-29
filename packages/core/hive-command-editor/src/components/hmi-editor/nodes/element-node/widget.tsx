import React from "react"
import styled from "styled-components"
import { RetractingPort } from "@thetechcompany/live-ui"
import { StackItemsPorts } from "@hexhive/types/dist/interfaces"

export interface ElementNodeProps {
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

export const BaseElementNode : React.FC<ElementNodeProps> = (props) => {
 
    console.log("NODE", props)

        return (
            <div className={props.className}>
                {props.asset?.ports.map((port : StackItemsPorts) => (
                    <RetractingPort     
                        id={port.name || port._id} 
                        rotation={port?.rotation || 0}
                        x={port?.x || 0} 
                        y={port?.y || 0} />
                ))}
                <div style={props.asset?.dimensions}>
                    {props.asset?.component || "Action"}
                </div>
            </div>
        )
  
}

export const ElementNodeWidget = styled(BaseElementNode)`
    display: flex;
    height: 80px;
    width: 80px;
    align-items: center;
    justify-content: center;

    svg{
        height: 100%;
        flex: 1;
    }
`