import React, { useContext } from 'react';
import { InfiniteCanvasContext } from '../context/context';
import { getRelativeCanvasPos } from '../utils/canvas';

export interface InformationLayerProps {
	className?: string;
}

export const InformationLayer : React.FC<InformationLayerProps> = ({className}) => {

	const {
        selected,
        factories = {},
        moveNode,
        selectNode,
        zoom, 
        assets = {}, 
        offset, 
        nodes = [],
        nodeRefs,
        setNodeRefs,
        openContextMenu,
        onRightClick,
		information,
		getRelativeCanvasPos
    } = useContext(InfiniteCanvasContext)

	return (
		<div 
		className={className} 
		style={{
			zIndex: 99,
			pointerEvents: 'none',
			position: 'absolute',
			width: '100%',
			height: '100%',
			transformOrigin: '0 0',
			transform: `matrix(${zoom}, 0, 0, ${zoom}, ${offset.x}, ${offset.y})`
		}}>
			{Array.isArray(information) ? information?.map((x: any) => x.component(getRelativeCanvasPos?.({x: x.x, y: x.y}))) : information}
		</div>
	)
}