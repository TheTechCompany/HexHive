import { useContext } from 'react';
import React from 'react';

export const HMICanvasContext = React.createContext<{
	values?: {
		conf: {
            device: {id: string},
            conf: {key: string}, 
            value: any
        }[], 
		devicePlaceholder?: {
			name: string
			type?: {
				state?: {
					key: string,
					modifiers: string[]
				}[]
			}
		}
		values: any
	}[],
	getDeviceOptions?: (device: string) => any
	getDeviceConf?: (device: string) => any;
}>({

})

const modify = (value: any, modifiers: string[]) => {
	let returnValue = value;
	
	modifiers.forEach((modifier) => {
		switch(modifier){
			case 'Percent':
				returnValue = ((value - 4000) / (16000)) * 100
			break;
			default:
				break;
		}
	})

	console.log(value, returnValue)
	return returnValue;
}

export const HMICanvasProvider = (props: any) => (<HMICanvasContext.Provider value={{
	...props.value,
	getDeviceOptions: (device) => {
		const { values } = useContext(HMICanvasContext);
		let deviceValues = values.find((a) => a.devicePlaceholder?.name == device);
			console.log(deviceValues)
		return deviceValues?.values;
		// let vals = Object.assign({}, deviceValues?.values || {});
		// for(var k in vals){
		// 	let mods = deviceValues.devicePlaceholder?.type.state.find((a) => a.key == k).modifiers || []
		// 	console.log(mods)
		// 	if(mods.length > 0){
		// 		vals[k] = modify(vals[k], mods)
		// 	}
		// }
		// return vals;
	},
	getDeviceConf: (device) => {
		const { values } = useContext(HMICanvasContext);
		return values.find((a) => a.devicePlaceholder?.name == device)?.conf.reduce((prev, curr) => ({...prev, [curr.conf.key]: curr.value}), {}) || {};
	}
}}>{props.children}</HMICanvasContext.Provider>);