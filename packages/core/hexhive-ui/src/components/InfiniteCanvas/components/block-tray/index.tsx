import React from 'react';
import { TrayItem } from './tray-item';
import styled from 'styled-components';
import { Block } from '../../InfiniteCanvas';


export interface BlockTrayProps {
    blocks: Block[]
    className?: string;
    renderItem?: (block: Block, ix: number) => JSX.Element;
}

export const BaseBlockTray : React.FC<BlockTrayProps> = (props) => {
    return (
        <div className={props.className}>
            {props.blocks.map((block, ix) => (
                <TrayItem model={block}>
                    {props.renderItem ? props.renderItem(block, ix) : block.label}
                </TrayItem>
            ))}
        </div>
    )
}

export const BlockTray = styled(BaseBlockTray)`
    .tray-item{
        margin-top: 4px;
        user-select: none;
    }
`