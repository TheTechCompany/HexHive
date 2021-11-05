import React, { useContext, useEffect, useRef, useState } from 'react';
import { InfiniteCanvasContext } from '../../context/context';
import { NodeIdContext } from '../../context/nodeid';
import { isEqual, transform } from 'lodash'
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
    const { nodeId, dimensions, position, rotation} = useContext(NodeIdContext)

    useEffect(() => {
        if(position && !isEqual({rotation, ...position}, lastPos) && props.id && ref.current){
            let bounds = ref?.current?.getBoundingClientRect()
            console.log("HIT", rotation)
            reportPosition?.({nodeId: nodeId, handleId: props.id, position: {
                x: bounds?.x, 
                y: bounds?.y,
                width: bounds?.width,
                height: bounds?.height
            }
            })
            setLastPos({rotation, ...position})
        }
    }, [props.id, position, dimensions, rotation])

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

    const { nodeId, position, rotation } = useContext(NodeIdContext)
    const ref = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     if(position && !isEqual({rotation, ...position}, lastPosition) && props.handleId && ref.current){
    //         let bounds = ref.current.getBoundingClientRect() || {x: 0, y: 0, width: 0, height: 0}
            
    //         console.log("HIT", rotation, bounds)
    //         reportPosition?.({nodeId: nodeId, handleId: props.handleId, position: {
    //             x: bounds?.x, 
    //             y: bounds?.y,
    //             width: bounds?.width,
    //             height: bounds?.height
    //         }
    //         })
            
    //         setLastPosition({rotation, ...position})
    //     }
    // }, [position, props.handleId, rotation])

    // useEffect(() => {
    //     if(props.handleId && ref.current){
    //         let bounds = ref.current.getBoundingClientRect() || {x: 0, y: 0, width: 0, height: 0}
            
    //         console.log("HIT", rotation, bounds)
    //             reportPosition?.({nodeId: nodeId, handleId: props.handleId, position: {
    //                 x: bounds?.x, 
    //                 y: bounds?.y,
    //                 width: bounds?.width,
    //                 height: bounds?.height
    //             }
    //         })
    //     }
    // }, [rotation])

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