// import { InfiniteCanvas } from '@thetechcompany/live-ui';
import React from 'react';
import { useContext } from 'react';
import { getHostForElement } from '@hexhive/utils';

import { NodeEditorContext } from '../context';
export interface NodeBlankProps{
    node?: any;
}

export const NodeBlank : React.FC<NodeBlankProps> = (props) => {
    const { dimensions, setDimensions } = useContext(NodeEditorContext)

    const onMouseDown = (e: React.MouseEvent, handle: string) => {
        e.stopPropagation();

        let doc = getHostForElement(e.target as HTMLElement)

        let startPosition = {
            x: e.clientX,
            y: e.clientY
        }

        let startDimensions = {
            width: dimensions?.width || 0,
            height: dimensions?.height || 0
        }

        const mouseMove = (e: MouseEvent) => {
            let position = {
                x: e.clientX,
                y: e.clientY
            }

            let diffX = (startPosition.x - position.x) * (handle == 'right' ? -1 : 1)
            let diffY = (startPosition.y - position.y) * (handle == 'bottom' ? -1 : 1)

            if(handle == 'right' || handle == 'left'){
                setDimensions?.({width: (startDimensions?.width || 0) + diffX, height: startDimensions?.height || 0})
            }else{
                setDimensions?.({width: startDimensions?.width || 0, height: (startDimensions?.height || 0) + diffY})
            }
            console.log(diffX, diffY)
        }

        const mouseUp = (e: MouseEvent) => {
            doc.removeEventListener('mousemove', mouseMove as EventListenerOrEventListenerObject)
            doc.removeEventListener('mouseup', mouseUp as EventListenerOrEventListenerObject)
        }

        doc.addEventListener('mousemove', mouseMove as EventListenerOrEventListenerObject)
        doc.addEventListener('mouseup', mouseUp as EventListenerOrEventListenerObject)

    }

    return (
        <div 
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: dimensions?.width || 100,
                height: dimensions?.height || 100,
                border: '2px dashed green'
            }}>
                
            <div 
                onMouseDown={(e) => onMouseDown(e, 'top')}
                className="top-handle"
                style={{position: 'absolute', top: 0, width: '100%', height: '2px', cursor: 'row-resize'}}/>
            <div 
                onMouseDown={(e) => onMouseDown(e, 'bottom')}
                className="bottom-handle" 
                style={{position: 'absolute', bottom: 0, width: '100%', height: '2px', cursor: 'row-resize'}}/>
            <div 
                onMouseDown={(e) => onMouseDown(e, 'left')}
                className="left-handle" 
                style={{position: 'absolute', left: 0, width: '2px', height: '100%', cursor: 'col-resize'}}/>
            <div 
                onMouseDown={(e) => onMouseDown(e, 'right')}
                className="right-handle" 
                style={{position: 'absolute', right: 0, width: '2px', height: '100%', cursor: 'col-resize'}}/>

            {props.children}
        </div>
    )
}