import React from 'react';

export interface PathPointProps {
    cx?: number;
    cy?: number;
    style?: any;
    onMouseDown?: (e: React.MouseEvent) => void;
    onContextMenu?: (e: React.MouseEvent) => void;
}

export const PathPoint = (props: PathPointProps) => {
    return (
        <g 
            onContextMenu={props.onContextMenu}
            style={props.style}
            onMouseDown={props.onMouseDown}>

            <circle
                cx={props.cx}
                cy={props.cy}
                r={5}
                fill="purple">

            </circle>
            <circle 
                cx={props.cx}
                cy={props.cy}
                r={2}
                fill="black">

            </circle>
        </g>
    )
}