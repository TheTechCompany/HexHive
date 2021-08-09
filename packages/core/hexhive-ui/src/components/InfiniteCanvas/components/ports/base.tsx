import React, { useContext, useEffect, useRef, useState } from 'react';
import { InfiniteCanvasContext } from '../../context/context';
import { NodeIdContext } from '../../context/nodeid';
import { isEqual } from 'lodash'
import styled from 'styled-components';

export interface BasePortProps {
    nodeId?: string;
    handleId?: string;
    className?: string;
    onMouseDown?: (e: React.MouseEvent) => void;
}

export const usePort = (props : {id?: string}) => {

    const {
        dragPort,
        reportPosition
    } = useContext(InfiniteCanvasContext)

    const ref = useRef<HTMLDivElement>(null)
    const [ lastPos, setLastPos ] = useState<any>();
    const { nodeId, dimensions, position } = useContext(NodeIdContext)

    useEffect(() => {
        if(position && !isEqual(position, lastPos) && props.id && ref.current){
            let bounds = ref?.current?.getBoundingClientRect()
            reportPosition?.({nodeId: nodeId, handleId: props.id, position: {
                x: bounds?.x, 
                y: bounds?.y,
                width: bounds?.width,
                height: bounds?.height
            }
            })
            setLastPos(position)
        }
    }, [props.id, position, dimensions])

    return {
        dragPort: (e: React.MouseEvent) => {
            dragPort?.(e, props.id, nodeId)
        },
        extraProps: {
            ref,
            "data-nodeid": nodeId,
            "data-handleid": props.id,
        }
    }
}

export const BasePort : React.FC<BasePortProps> = (props) => {
    const { 
        ports,
        dragPort,
        setPorts,
        reportPosition
    } = useContext(InfiniteCanvasContext)

    const [ lastPosition, setLastPosition ] = useState<any>();

    const { nodeId, position } = useContext(NodeIdContext)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(position && !isEqual(position, lastPosition) && props.handleId && ref.current){
            let bounds = ref.current.getBoundingClientRect() || {x: 0, y: 0, width: 0, height: 0}
            
            reportPosition?.({nodeId: nodeId, handleId: props.handleId, position: {
                x: bounds?.x, 
                y: bounds?.y,
                width: bounds?.width,
                height: bounds?.height
            }
            })
            setLastPosition(position)
        }
    }, [position, props.handleId])

    return (
        <div 
            onMouseDown={props.onMouseDown}
            data-handleid={props.handleId}
            data-nodeid={props.nodeId}
            ref={ref}
            className={props.className}>
            {props.children}
        </div>
    )
}

export const Port = styled(BasePort)`
    position: absolute;
`