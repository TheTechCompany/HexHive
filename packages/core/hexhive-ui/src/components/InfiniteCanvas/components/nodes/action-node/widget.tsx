import React, { RefObject } from 'react';

import styled from 'styled-components'
import { PortWidget } from '../../ports';

export interface ActionNodeProps {
    className?: string;
    title?: string;

}

export const BaseActionNode : React.FC<ActionNodeProps> = (props) => {


        return (
            <div className={props.className}>
                <PortWidget type="in" id="inlet" />
                {props.title || "Action"}
                <PortWidget  type="out" id="outlet" />
            </div>
        )
  
}

export const ActionNodeWidget = styled(BaseActionNode)`
    display: flex;
    background-color: #dfdfdf;
    height: 50px;
    width: 150px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;

    .port {
        height: 10px;
        width: 10px;
        background: green;
        position: absolute;
    }

    .port:hover{
        background: darkgreen;
    }

    .port.in{
        top: 0;
    }

    .port.out{
        bottom: 0;
    }
`