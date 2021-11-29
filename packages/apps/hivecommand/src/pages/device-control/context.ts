import React from 'react';

export const DeviceControlContext = React.createContext<{
	controlId?: string;
	program?: any;
	hmi?: any;
	values?: any[],
	hmiNodes?: any[]
	groups?: any,
	changeDeviceMode?:any
	changeDeviceValue?:any
	performAction?: any;

}>({

})

export const DeviceControlProvider = DeviceControlContext.Provider