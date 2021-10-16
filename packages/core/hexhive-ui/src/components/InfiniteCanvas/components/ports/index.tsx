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
    direction?: "left" | "right" | "center";
}

const Port = styled.div`
    width: 10px;
    height: 10px;
    background: green;

    &:hover{
        background-color: darkgreen;
    }
`



export const UnstyledPortWidget : React.FC<PortWidgetProps> = (props) => {

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
            style={{display: 'flex', alignItems: 'center', justifyContent: props.direction == "right" ? 'flex-start': (props.direction == 'center') ? 'center': 'flex-end' }}
            className={`port-base`}>
            {props.label && (props.direction == "left" || !props.direction ) && <Text size="small">{props.label}</Text>}
            <Port
                onMouseDown={onMouseDown}
                {...extraProps}
                className={`port ${props.className} ${props.type || 'in'}`}>
            </Port>
            {props.label && (props.direction == "right") && <Text size="small">{props.label}</Text>}

        </Box>
    )
}

export const PortWidget = styled(UnstyledPortWidget)`
    &:hover{
        background: rgba(255, 255, 255, 0.2);
    }
`