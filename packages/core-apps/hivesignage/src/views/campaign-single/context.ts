import React from 'react';

export const CampaignSingleContext = React.createContext<{
	campaign?: any;
	files?: any[],
	views?: number;
	interactions?: number;
	interactionTimeline?: {time: Date, interactions: number}[]
	analytics?: {id: string, name: string, type: string, data: string}[],
	refresh?: () => void;
}>({

})

export const CampaignSingleProvider = CampaignSingleContext.Provider