import { createContext } from 'react';
import { IFlowShard, IO, IStack } from '@hexhive/types';
import { EditorAction, EditorState } from '../store';
import { InfiniteCanvasNode, InfiniteCanvasPath } from '@hexhive/ui';

export interface IEditorContext {
    program?: {
        program?: IFlowShard[],
        hmi?: IFlowShard[],
        io?: IO[]
        plugins?: IStack[] 
    },

    state?: EditorState;
    dispatch?: (action: EditorAction) => void;

    publishChanges?: () => void;

    onPluginChanged?: (id: string, plugin: IStack) => void;
    onHMIChanged?: (id: string, flow: IFlowShard) => void;
    onProgramChanged?: (id: string, flow: IFlowShard) => void;

    addPath?: (program: string, path: InfiniteCanvasPath) => void
    updatePath?: (id: string, path: InfiniteCanvasPath) => void,
    removePath?: (id: string) => void,
    addNode?: (program: string, node: InfiniteCanvasNode & any) => void,
    updateNode?: (id: string, node: InfiniteCanvasNode & any) => void,
    removeNode?: (id: string) => void

    selectProgram?: (id: string) =>  void;
}

export const EditorContext = createContext<IEditorContext>({

})