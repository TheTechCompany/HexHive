import React from 'react';

export const ScheduleSingleContext = React.createContext<{
	scheduleId?: string;
	screens?: any[];
	locations?: any[];
	campaigns?: any[]
	tiers?: any[]
	refresh?: () => void;
}>({

})

export const ScheduleSingleProvider = ScheduleSingleContext.Provider