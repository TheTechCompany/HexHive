import React from 'react';
import styled from 'styled-components'
import { Block } from '../../InfiniteCanvas';

export interface TrayItemProps {
    model: Block;
    className?: string;
}

const BaseTrayItem : React.FC<TrayItemProps> = (props) => {
    return (
        <div
            draggable
            className={`tray-item ${props.className}`}
            onDragStart={(event) => {
                event.dataTransfer.setData('infinite-canvas', JSON.stringify({type: props.model.blockType, extras: props.model.extras}))
            }}>
            {props.children}
        </div>
    )
}

export const TrayItem = styled(BaseTrayItem)`
    padding: 8px;
    border-color: white;
    border-radius: 3px;
    border: 1px solid white;
`