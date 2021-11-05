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
		configuration?: {id?: string, key: string, type: string, value: any}[];
		requiresMutex?: boolean;
	}>({});

	const [ label, setLabel ] = useState<string>('');
	const [ type, setType ] = useState<string>('');

	console.log(props.configuration)
	const onSubmit = () => {
		props.onSubmit?.(device)
	}

	useEffect(() => {
		let configuration = props.selected?.type?.configuration || [];
		// console.log(props.selected)
		if(props.selected?.configuration){
			configuration = props.selected?.type?.configuration?.map((item) => {

				let value = props.selected?.configuration?.find((a) => a?.conf?.id == item.id)
				
				console.log(item, value)

				return {
					id: value?.id,
					key: item.key,
					confKey: item.id,
					type: item.type,
					value: value?.value
				}
			})
		}

		console.log(configuration)

		setDevice({
			...props.selected,
			type: props.selected?.type?.id,
			configuration: configuration
		})
	}, [props.selected])

	const onChangeConf = (key: string, value: any) => {
		let conf = device.configuration.slice();
		let ix = conf.map((x) => x.key).indexOf(key);

		if(ix > -1){
			conf[ix] = {
				...conf[ix], 
				value: value
			}
		}
		setDevice({...device, configuration: conf})
	}

	const renderInput = (key: string, type: string) => {
		let value = device?.configuration?.find((a) => a.key == key)?.value || ''
		switch(type){
			case 'Int':
				return (<TextInput 	
						value={value}
						onChange={(e) => onChangeConf(key, e.target.value)}
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
				{device.configuration && device.configuration?.map((conf) => (
					<Box
						gap="xsmall"
						align="center"
						direction="row">
						<Box flex><Text>{conf.key}</Text></Box>
						<Box flex>{renderInput(conf.key, conf.type)}</Box>
					</Box>
				))}
			</Box>
		</BaseModal>
	)
}