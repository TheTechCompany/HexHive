import React from 'react';
import { JsonTree } from 'react-awesome-query-builder';
import { DeviceInterlock } from '.';


export interface DeviceInterlock {
	inputDevice?: string,
	inputDeviceKey?: string,
	comparator?: string,
	assertion?: {
		setpoint?: string,
		value?: string
	},
	state?: JsonTree,
	valueType?: string,
	action?: string
}
export const DeviceInterlockContext = React.createContext<{
	device?: any,
	devices?: any[],
	interlock?: DeviceInterlock,
	setInterlock?: (interlock: DeviceInterlock) => void
}>({

})

export const DeviceInterlockProvider = DeviceInterlockContext.Provider