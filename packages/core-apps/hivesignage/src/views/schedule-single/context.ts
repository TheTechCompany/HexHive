import React from 'react';

export const ScheduleSingleContext = React.createContext<{
	scheduleId?: string;
	locations?: any[];
	campaigns?: any[]
}>({

})

export const ScheduleSingleProvider = ScheduleSingleContext.Provider