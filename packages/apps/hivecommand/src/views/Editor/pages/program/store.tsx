import { InfiniteCanvasNode } from 'core/hexhive-ui/src/components';
import { Reducer } from 'core/hive-command-editor/node_modules/@types/react';
import React from 'react';

export const useEditor = (reduction: (state, action) => any, initialState: any) => {
	return React.useReducer<
		Reducer<
			{nodes?: InfiniteCanvasNode[]}, 
			{type?: string, data?: any}
		>
	>((state, action) => {

		return reduction(state, action)
		return state;
	}, initialState)

}