import { useContext } from 'react';
import React from 'react';
import {unit} from 'mathjs'
export const HMICanvasContext = React.createContext<{
	values?: {
		conf: {
            device: {id: string},
            deviceKey: {key: string}, 
            min: any,
			max: any
        }[], 
		devicePlaceholder?: {
			name: string
			type?: {
				state?: {
					key: string,
					units?: string;
					inputUnits?: string;
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


export const HMICanvasProvider = (props: any) => (<HMICanvasContext.Provider value={{
	...props.value,
	getDeviceOptions: (device) => {
		const { values } = useContext(HMICanvasContext);
		let deviceValues = values.find((a) => a.devicePlaceholder?.name == device);
		// return deviceValues?.values;
		let vals = Object.assign({}, deviceValues?.values || {});
		for(var k in vals){
			let state = deviceValues.devicePlaceholder?.type?.state?.find((a) => a.key == k);

			// if(state.inputUnits == "Pa") vals[k] = 65;
			// if(state.inputUnits && state.units && state.inputUnits != state.units){
			
			// 	let newUnit = unit(vals[k], state.inputUnits).to(state.units);
			// 	console.log({state}, vals[k], newUnit)

			// 	vals[k] =  `${newUnit.toNumber().toFixed(2)} ${newUnit.formatUnits()}`//`${vals[k]} ${state.inputUnits} to ${state.units}`)
		 if(state.units){
				vals[k] = `${vals[k]} ${state.units}`
			}
		}
		// 	let mods = deviceValues.devicePlaceholder?.type.state.find((a) => a.key == k).modifiers || []
		// 	console.log(mods)
		// 	if(mods.length > 0){
		// 		vals[k] = modify(vals[k], mods)
		// 	}
		// }
		return vals;
	},
	getDeviceConf: (device) => {
		const { values } = useContext(HMICanvasContext);

		return values.find((a) => a.devicePlaceholder?.name == device)?.conf?.reduce((prev, curr) => ({
			...prev,
			[curr?.deviceKey?.key]: {
				min: curr?.min,
				max: curr?.max
			}
		}), {})
		console.log(values)
		return {} //values.find((a) => a.devicePlaceholder?.name == device)?.conf?.reduce((prev, curr) => ({...prev, [curr.key]: {min: curr.min, max: curr.max}}), {}) || {};
	}
}}>{props.children}</HMICanvasContext.Provider>);