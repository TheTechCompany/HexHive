import React, { useMemo } from 'react';

import styled from 'styled-components'
import { InfiniteCanvasPosition } from '../../types/canvas';
import { createLine } from '../../utils';

export interface FlowPathSegmentProps {
    d?: string;
    className?: string;
    points?: InfiniteCanvasPosition[],
    onMouseDown?: (e: React.MouseEvent) => void;
    onContextMenu?: (e: React.MouseEvent) => void;

}

export const BaseFlowPathSegment : React.FC<FlowPathSegmentProps> = (props) => {
    const d = useMemo(() => {
        if(props.d) return props.d;
        if(props.points) return createLine(props.points)
    }, [props.d, props.points])
    return (
        <g 
            onContextMenu={props.onContextMenu}
            className={props.className}
             onMouseDown={props.onMouseDown}>

            <path d={d} className={"flow-path"}/>
            <path d={d} className={"flow-path__pipe-border"} />
            <path d={d} className={"flow-path__pipe"} />

            <path d={d} className={"flow-path__highlight"}/>
          
        </g>
    )
}
export const FlowPathSegment = styled(BaseFlowPathSegment)`

    cursor: pointer;

    .flow-path{
        stroke: blue;
        stroke-opacity: 0;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
        stroke-width: 2px;
    }

    .flow-path__pipe, .flow-path__pipe-border{
        fill: none;
        stroke-linejoin: round;
        stroke-width: 4px;
        stroke-opacity: 0.6;
        stroke-border: 1px solid black;
        stroke: #dfdfdf;
    }

    .flow-path__pipe-border{
        stroke-width: 6px;
        stroke: black;
    }

    .flow-path__highlight {
        fill: none;
        stroke-linejoin: round;
        stroke-width: 8px;
        stroke-opacity: 0;
        stroke: cyan;
    }

    @keyframes marching {
        to{
            stroke-dashoffset: 0;
        }
    }

    
    &.active .flow-path__highlight {
        stroke-opacity: 0;
    }

    &.active .flow-path{
        stroke: #F99C1C;
        stroke-opacity: 1;
        stroke-dasharray: 4px;
        stroke-dashoffset: 8px;
        animation: marching 1s linear infinite;
    }
`
