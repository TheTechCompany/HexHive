import { InfiniteCanvasNode } from '@hexhive/ui';
import React from 'react';


export const HMIGroupContext = React.createContext<{
	selected?: string;
	nodes?: InfiniteCanvasNode[]
	ports?: {
		id?: string;
		key?: string;
		x: number;
		y: number;
		rotation: number;
	}[]
	addPort?: () => void;
	updatePort?: (id: string, update: {key?: string, width?: number, height?: number, x?: number, y?: number, rotation?: number}) => void;
	updateNode?: (id: string, update: any) => void;
}>({})

export const HMIGroupProvider = HMIGroupContext.Provider;