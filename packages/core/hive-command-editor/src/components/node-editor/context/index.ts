import { IStackItemsPorts } from '@hexhive/types';
import React from 'react';

export interface NodeEditorState {

    dimensions?: {width: number, height: number};
    setDimensions?: (dimensions: {width: number, height: number}) => void;

    ports?: Array<IStackItemsPorts | null>
    setPorts?: (ports: IStackItemsPorts[]) => void;
}
export const NodeEditorContext = React.createContext<NodeEditorState>({})