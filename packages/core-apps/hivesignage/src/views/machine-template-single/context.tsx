import React from 'react';

export const MachineTemplateSingleContext = React.createContext<{
	templateId?: string;

	screens?: any[];
	computers?: any[];
	peripherals?: any[];
	plugins?: any[];

	refresh?: () => void;
}>({
	screens: [],
	computers: [],
	peripherals: [],
	plugins: []
})

export const MachineTemplateSingleProvider = MachineTemplateSingleContext.Provider;