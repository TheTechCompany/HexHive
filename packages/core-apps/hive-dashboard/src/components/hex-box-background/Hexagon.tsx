import React from 'react';
import { forwardRef } from 'react';
import { HexagonBorder } from './HexagonBorder';
import { HexagonBox } from './HexagonBox';

export interface HexagonProps { 
    selected?: boolean;
    onClick?: () => void;
    size: number;
    top: number;
    left: number;
    color?: string;
}

export const Hexagon : React.FC<HexagonProps> = forwardRef((props, ref) => {
    return props.selected ? (
        <HexagonBorder
            ref={ref}
            {...props}>
        
            {props.children}
        </HexagonBorder>
    ) : (
        <HexagonBox 
            ref={ref}
            {...props} >
            {props.children}
        </HexagonBox>
    )
})