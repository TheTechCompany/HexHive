import { StackItemsPorts } from '@hexhive/types/dist/interfaces';
import React from 'react';

export interface NodeEditorState {

    dimensions?: {width: number, height: number};
    setDimensions?: (dimensions: {width: number, height: number}) => void;

    ports?: Array<StackItemsPorts | null>
    setPorts?: (ports: StackItemsPorts[]) => void;
}
export const NodeEditorContext = React.createContext<NodeEditorState>({})