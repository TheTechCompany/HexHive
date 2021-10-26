import { InfiniteCanvasNode, InfiniteCanvasPath } from '@hexhive/ui';
import React from 'react';

export const ProgramEditorContext = React.createContext<{
	program?: any, 
	devices?: any[],
	conditions?: {id?: string, input: string, comparator: string, assertion: string}[]
	activeProgram?: string;
	selectedType?: string,
	selected?: InfiniteCanvasNode | InfiniteCanvasPath
	refresh?: () => void;
}>({});

export const ProgramEditorProvider : React.FC<{value: any}> = (props) => {
	return (
		<ProgramEditorContext.Provider value={props.value}>
			{props.children}
		</ProgramEditorContext.Provider>
	)
}

export const useProgramEditor = () => React.useContext(ProgramEditorContext)