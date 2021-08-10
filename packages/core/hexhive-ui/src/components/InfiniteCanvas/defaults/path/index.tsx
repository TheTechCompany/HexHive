import styled from 'styled-components'
import { throttle } from 'lodash';
import React from 'react';
import { InfiniteCanvasPath, InfiniteCanvasPosition } from '../../types/canvas';
import { createLine, getHostForElement } from '../../utils';
import { PathPoint } from './point';
import { FlowPathSegment } from './segment';

export interface FlowPathProps {
    className?: string;
    selected?: boolean;
    points: InfiniteCanvasPosition[]
    editable?: boolean;
    path?: InfiniteCanvasPath;
    onLinked?: (nodeId: string, handleId: string) => void;
    onPointsChanged?: (ix: number, position: InfiniteCanvasPosition) => void;
    onContextMenu?: (e: React.MouseEvent) => void;
    onMouseDown?: (ix: number, e: React.MouseEvent, position: InfiniteCanvasPosition) => void;
}

export const BaseFlowPath : React.FC<FlowPathProps> = (props) => {
    
    
    const generateLine = (points: InfiniteCanvasPosition[], path_render: (points: InfiniteCanvasPosition[], ix: number) => JSX.Element) => {
        let init : InfiniteCanvasPosition[][] = [];
        let pairs = points.reduce((result, value, index, array) => {
            if(index < array.length - 1){
                result.push(array.slice(index, index+ 2))
            }
            return result;
        }, init)

        return pairs.map((pair, ix) => path_render(pair, ix))

    }

    const segmentClick = (ix: number, e: React.MouseEvent) => {
        props.onMouseDown?.(ix, e, {
            x: e.clientX,
            y: e.clientY
        })
    }


    const generateHandles = (points: InfiniteCanvasPosition[], render: (point: InfiniteCanvasPosition, ix: number) => JSX.Element) => {
        let p = points.slice(0, props.path?.targetHandle ? points.length - 1 : points.length)
        let handles = p.map((point, ix) =>  ix != 0 && render(point, ix))
        return  handles;
    }

    const dragPathPoint = (e: React.MouseEvent, ix: number) => {
        let pos : InfiniteCanvasPosition = {
            x: e.clientX,
            y: e.clientY
        }

        e.preventDefault()
        e.stopPropagation()

        props.onPointsChanged?.(ix, pos)

        let doc = getHostForElement(e.target as HTMLElement)

        const updatePointPosition = throttle((point: InfiniteCanvasPosition) => {
            props.onPointsChanged?.(ix, point)
        }, 100)

        const mouseMove = (e: MouseEvent) => {
            updatePointPosition({x: e.clientX, y: e.clientY})
        }

        const mouseUp = (e: MouseEvent) => {

            let target = (e.target as HTMLElement)
            if(target.hasAttribute('data-nodeid')){
                let nodeId = target.getAttribute('data-nodeid') || ''
                let handleId = target.getAttribute('data-handleid') || ''

                props.onLinked?.(nodeId, handleId)

            }

            doc.removeEventListener('mousemove', mouseMove as EventListenerOrEventListenerObject)
            doc.removeEventListener('mouseup', mouseUp as EventListenerOrEventListenerObject)
        }

        doc.addEventListener('mousemove', mouseMove as EventListenerOrEventListenerObject)
        doc.addEventListener('mouseup', mouseUp as EventListenerOrEventListenerObject)
    }

    return props.editable ? (
        <g className={`${props.className} ${props.selected ? 'selected': ''}`}>
        
        {generateLine(props.points, (points, ix) => (
            <FlowPathSegment 
                onContextMenu={props.onContextMenu}
                onMouseDown={(e) => segmentClick(ix, e)} points={points} />
        ))}
        {generateHandles(props.points, (location, ix) => (
            <PathPoint 
                onContextMenu={props.onContextMenu}
                onMouseDown={(e) => dragPathPoint(e, ix)}
                style={{cursor: 'pointer'}}
                cx={location.x} 
                cy={location.y} />
        ))}
        </g>) : (
            <g className={`${props.className} ${props.selected ? 'selected': ''}`}>
            <FlowPathSegment 
                onContextMenu={props.onContextMenu}
                onMouseDown={(e) => segmentClick(0, e)} points={props.points} />
                </g>
    )    
}

export const FlowPath = styled(BaseFlowPath)`
    &:hover .flow-path__highlight{
        stroke-opacity: 0.4;
    }

    &.selected .flow-path__highlight{
        stroke-opacity: 0.5;
    }
`