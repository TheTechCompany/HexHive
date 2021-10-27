import React from 'react';

export const useEditorContext = () => {
	const context = React.createContext({})
	return context;
}

export const useEditor = (context: React.Context<any>) => {
	
}