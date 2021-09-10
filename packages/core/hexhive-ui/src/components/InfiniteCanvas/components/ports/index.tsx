import React, { RefObject, useContext, useEffect, useRef, useState } from 'react';
import { InfiniteCanvasContext } from '../../context/context';

import { Box, Text } from 'grommet'
import styled from 'styled-components'
import { NodeIdContext } from '../../context/nodeid';
import { isEqual } from 'lodash';
import { BasePort, usePort } from './base';

export interface PortWidgetProps {
    id?: string;
    type?: string;
    round?: boolean;
    className?: string;
    label?: string;
    direction?: "left" | "right"
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
        <Box 
            gap="xsmall"
            direction="row"
            style={{display: 'flex', alignItems: 'center', justifyContent: props.direction == "right" ? 'flex-start': 'flex-end' }}
            className="port-base"
            onMouseDown={onMouseDown}>
            {props.label && (props.direction == "left" || !props.direction ) && <Text size="small">{props.label}</Text>}
            <Port
                {...extraProps}
                className={`port ${props.className} ${props.type || 'in'}`}>
            </Port>
            {props.label && (props.direction == "right") && <Text size="small">{props.label}</Text>}

        </Box>
    )
}