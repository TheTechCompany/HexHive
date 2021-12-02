import React from 'react';

export const ClusterSingleContext = React.createContext<{
	id?: string;
}>({

})

export const ClusterSingleProvider = ClusterSingleContext.Provider