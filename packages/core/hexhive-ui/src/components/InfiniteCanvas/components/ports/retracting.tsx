import React, { useContext } from 'react';
import styled from 'styled-components';
import { usePort } from './base';
import { InfiniteCanvasContext } from '../../context/context';
import { NodeIdContext } from '../../context/nodeid';
import { Port } from './base';

export interface RetractingPortProps {
    id?: string;
    direction?: string;
    x?: number;
    y?: number;

    width?: number;
    height?: number;

    scaleX?: number;
    scaleY?: number;

    rotation?: number;
    className?: string;
}

export const BaseRetractingPort : React.FC<RetractingPortProps> = (props) => {
    const { isPortDragging } = useContext(InfiniteCanvasContext)

    const { extraProps, dragPort } = usePort({id: props.id})

    return (
        <div  
            className={`${props.className} ${isPortDragging ? 'open' : 'closed'}`}>
                <div 
                    {...extraProps}
                    className="connector" 
                    onMouseDown={(e) => dragPort?.(e)} />
                <div className="retractor" />
        </div>
    )
}

export const RetractingPort = styled(BaseRetractingPort)`
    position: absolute;
    left: -10px;
    width: ${p => p.height ? `${p.height * 20}px` : '20px'};
    top: ${p => p.y || 50}%;
    left: ${p => p.x || 0}%;
    transform: rotate(${p => p.rotation || 0}deg) ${p => p.scaleY ? `scaleY(${1 / p.scaleY})` : ''} ${p => p.scaleX ? `scaleX(${Math.abs(1 / p.scaleX)})`: ''} ;
    transition: left 250ms ease-out, width 250ms ease-out;


    .connector{
        position: absolute;
        left: -10px;
        top: 0px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: purple;
    }

    .retractor{
        position: absolute;
        width: 100%;
        bottom: -6px;
        height: 2px;
        background-color: gold;
    }
`