import { BaseModal } from '@hexhive/ui';
import { Box, Select, Text, TextInput } from 'grommet';
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
		name?: string;
		type?: string;
		configuration?: {key: string, type: string, value: any}[];
	}>({});

	const [ label, setLabel ] = useState<string>('');
	const [ type, setType ] = useState<string>('');

	console.log(props.configuration)
	const onSubmit = () => {
		props.onSubmit?.(device)
	}

	useEffect(() => {
		setDevice({
			...props.selected,
			type: props.selected?.type?.id,
			configuration: props.selected?.type?.configuration
		})
	}, [props.selected])

	const onChangeConf = (key: string, value: any) => {
		let conf = device.configuration.slice();
		let ix =conf.map((x) => x.key).indexOf(key);

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
				
				{device.configuration && device.configuration?.map((conf) => (
					<Box
						gap="xsmall"
						align="center"
						direction="row">
						<Text>{conf.key}</Text>
						{renderInput(conf.key, conf.type)}
					</Box>
				))}
			</Box>
		</BaseModal>
	)
}