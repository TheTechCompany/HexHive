import { createContext } from 'react';
import { FlowShard, IO, Stack } from '@hive-flow/types';
import { EditorAction, EditorState } from '../store';
import { InfiniteCanvasNode, InfiniteCanvasPath } from '@thetechcompany/live-ui';

export interface IEditorContext {
    program?: {
        program?: FlowShard[],
        hmi?: FlowShard[],
        io?: IO[]
        plugins?: Stack[] 
    },

    state?: EditorState;
    dispatch?: (action: EditorAction) => void;

    publishChanges?: () => void;

    onPluginChanged?: (id: string, plugin: Stack) => void;
    onHMIChanged?: (id: string, flow: FlowShard) => void;
    onProgramChanged?: (id: string, flow: FlowShard) => void;

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