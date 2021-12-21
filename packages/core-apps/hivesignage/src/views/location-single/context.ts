import React from 'react';

export const ClusterSingleContext = React.createContext<{
	id?: string;
	analytics?: any[]
}>({

})

export const ClusterSingleProvider = ClusterSingleContext.Provider