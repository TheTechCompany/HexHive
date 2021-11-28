import React from 'react';

export const DisplaySingleContext = React.createContext<{
	id?: string;
}>({

})

export const DisplaySingleProvider = DisplaySingleContext.Provider