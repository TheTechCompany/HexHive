import { BaseModal } from '../base';
import { Box, Select, CheckBox, Text, TextInput } from 'grommet';
import React, {useState, useEffect} from 'react';

export interface ProgramDeviceModalProps {
	open: boolean;
	onClose?: () => void;
	onSubmit?: (item: any) => void;

	selected?: any;

	deviceTypes: any[];

	configuration?: any;
}

export const ProgramDeviceModal : React.FC<ProgramDeviceModalProps> = (props) => {

	const [ device, setDevice ] = useState<{
		id?: string;
		name?: string;
		type?: string;
		calibrated?: {id?: string, key: string, min?: string, max?: string}[],
		state?: {id?: string, key: string, type: string, min?: string, max?: string}[]
		requiresMutex?: boolean;
	}>({});

	const [ label, setLabel ] = useState<string>('');
	const [ type, setType ] = useState<string>('');

	console.log(props.configuration)
	const onSubmit = () => {
		props.onSubmit?.(device)
	}

	useEffect(() => {
		let calibrated = props.selected?.calibrated || [];
		// console.log(props.selected)
		if(props.selected?.calibrated){
			calibrated = props.selected?.calibrated?.map((item) => {

				return {
					...item,
					key: item.deviceKey?.key
				}
				// let value = props.selected?.configuration?.find((a) => a?.conf?.id == item.id)
				
				// console.log(item, value)

				// return {
				// 	id: value?.id,
				// 	key: item.key,
				// 	confKey: item.id,
				// 	type: item.type,
				// 	value: value?.value
				// }
			})
		}

		console.log(props.selected)

		setDevice({
			...props.selected,
			type: props.selected?.type?.id,
			state: props.selected?.type?.state,
			calibrated
		})
	}, [props.selected])

	const onChangeConf = (key: string, value: any, selector: string) => {
		let calibrations = device?.calibrated?.slice() || [];

		let ix = calibrations.map((x) => x.key).indexOf(key);
		if(ix > -1){
			calibrations[ix] = {
				...calibrations[ix],
				[selector]: value
			}
		}else{
			calibrations.push({
				key: key,
				[selector]: value
			})
		}

		setDevice({...device, calibrated: calibrations})
		// let conf = device.configuration.slice();
		// let ix = conf.map((x) => x.key).indexOf(key);

		// if(ix > -1){
		// 	conf[ix] = {
		// 		...conf[ix], 
		// 		value: value
		// 	}
		// }
		// setDevice({...device, configuration: conf})
	}

	const renderInput = (key: string, type: string, selector : string) => {
		let defaultValue = device?.state?.find((a) => a.key == key)?.[selector] || ''
		let value = device?.calibrated?.find((a) => a.key == key)?.[selector] || defaultValue

		switch(type){
			case 'UIntegerT':
			case 'IntegerT':
			case 'Int':
				return (<TextInput 	
						value={value}
						onChange={(e) => onChangeConf(key, e.target.value, selector)}
						style={{padding: 3}} 
						type="number" />)
			default:
				return;
		}
	}
	return (
		<BaseModal	
			title="Add Device"
			onSubmit={onSubmit}
			open={props.open}
			onClose={props.onClose}>
			<Box flex gap="xsmall">
				<TextInput	
					value={device?.name}
					onChange={(e) => setDevice({...device, name: e.target.value})}
					placeholder="P&ID Label" />
				
				<Select 
					value={device?.type}
					onChange={({value}) => setDevice({...device, type: value})}
					options={props.deviceTypes || []}
					labelKey="name"
					valueKey={{reduce: true, key: 'id'}}
					placeholder="Device Type" />
				
				<Box
					justify="end" 	
					direction="row">
					<CheckBox 
						checked={device?.requiresMutex}
						onChange={(e) => setDevice({...device, requiresMutex: e.target.checked})}
						reverse 
						label="Requires Mutex" />
				</Box>
				{device?.state && device?.state?.filter((a) => a.min && a.max).map((conf) => (
					<>
					<Box
						gap="xsmall"
						align="center"
						direction="row">
						<Box flex><Text>min{conf.key}</Text></Box>
						<Box flex>{renderInput(conf.key, conf.type, 'min')}</Box>
					</Box>
					<Box
						gap="xsmall"
						align="center"
						direction="row">
						<Box flex><Text>max{conf.key}</Text></Box>
						<Box flex>{renderInput(conf.key, conf.type, 'max')}</Box>
					</Box>
					</>
				))}
			</Box>
		</BaseModal>
	)
}