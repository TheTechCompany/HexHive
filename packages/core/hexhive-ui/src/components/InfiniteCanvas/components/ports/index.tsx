import React, { RefObject, useContext, useEffect, useRef, useState } from 'react';
import { InfiniteCanvasContext } from '../../context/context';


import styled from '@emotion/styled'
import { NodeIdContext } from '../../context/nodeid';
import { isEqual } from 'lodash';
import { BasePort, usePort } from './base';

export interface PortWidgetProps {
    id?: string;
    type?: string;
    round?: boolean;
    className?: string;
}

const Port = styled.div`
    width: 10px;
    height: 10px;
    background: green;

    &:hover{
        background-color: darkgreen;
    }
`



export const PortWidget : React.FC<PortWidgetProps> = (props) => {

    const { extraProps, dragPort } = usePort({id: props.id})
   

    const onMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();

        console.log("DRAG", props.id)
        //let bounds = ref.current?.getBoundingClientRect();
        dragPort?.(e)
    }

    return (
        <div 
            className="port-base"
            onMouseDown={onMouseDown}>
            <Port
                {...extraProps}
                className={`port ${props.className} ${props.type || 'in'}`}>
            </Port>
        </div>
    )
}