import React, { useContext } from 'react';
import { Box, Button, Text, List } from 'grommet';
import * as Icons from 'grommet-icons'
import styled from 'styled-components'
import { InfiniteCanvasContext } from '../../context/context';

export interface ContextMenuProps {
    x?: number;
    y?: number;

    menu?: {
        icon?: any;
        label?: any;
        onClick?: (type: "node" | "path", id: string) => void;
    }[];

    open?: boolean;

    className?: string;
}

export const BaseContextMenu: React.FC<ContextMenuProps> = (props) => {
    const context = useContext(InfiniteCanvasContext)
    return !props.open ? null : (
        <Box
            onMouseDown={(e) => e.stopPropagation()}
            className={props.className}
            background="light-2"
            round="xsmall"
            width="xsmall"
            elevation="small"
            pad="xxsmall"
            style={{
                zIndex: 20,
                position: 'absolute',
                top: props.y,
                left: props.x
            }}>
            <Box className="context-menu__list">
                {props.menu?.map((datum) => (
                    <Box
                        onClick={() => {
                            if(context.selected?.type && context.selected.id){
                                datum.onClick?.(context.selected?.type, context.selected?.id)
                            }
                        }}
                        round={"xxsmall"}
                        align="center"
                        className="context-menu__item"
                        direction="row">
                        {datum.icon}
                        <Text margin="none">{datum.label}</Text>
                </Box>
                ))}
            </Box>

        </Box>
    )
}

export const ContextMenu = styled(BaseContextMenu)`

.context-menu__list .context-menu__item{
    padding: 3px;
    cursor: pointer;
    text-align: start;
}

.context-menu__list .context-menu__item span{
    line-height: 16px;
}

.context-menu__list .context-menu__item svg{
    width: 16px;
    height: 16px;
    margin-right: 8px;
}

.context-menu__list .context-menu__item:hover{
    background: #dfdfdf;
}
`