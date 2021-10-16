import { BaseModal } from '@hexhive/ui';
import { Box, Select, TextInput } from 'grommet';
import React, {useState} from 'react';

export interface ProgramDeviceModalProps {
	open: boolean;
	onClose?: () => void;
	onSubmit?: (item: any) => void;

	deviceTypes: any[];
}

export const ProgramDeviceModal : React.FC<ProgramDeviceModalProps> = (props) => {
	const [ label, setLabel ] = useState<string>('');
	const [ type, setType ] = useState<string>('');

	const onSubmit = () => {
		props.onSubmit?.({
			label: label,
			type: type
		})
	}
	return (
		<BaseModal	
			title="Add Device"
			onSubmit={onSubmit}
			open={props.open}
			onClose={props.onClose}>
			<Box flex gap="xsmall">
			<TextInput	
				value={label}
				onChange={(e) => setLabel(e.target.value)}
				placeholder="P&ID Label" />
			
			<Select 
				value={type}
				onChange={({value}) => setType(value)}
				options={props.deviceTypes}
				labelKey="name"
				valueKey={{reduce: false, key: 'id'}}
				placeholder="Device Type" />
			</Box>
		</BaseModal>
	)
}