import { BaseModal } from '../base';
import React, {useEffect, useState} from 'react';
import { FormControl, FormInput } from '@hexhive/ui'
import { Box, Text  } from 'grommet';

export const DeviceSetpointModal = (props) => {

	const [ setpoint, setSetpoint ] = useState<{
		name?: string,
		key?: string,
		type?: string,
		value?: string
	}>({})

	const onSubmit = () => {
		props.onSubmit?.(setpoint)
		setSetpoint({})
	}

	useEffect(() => {
		if(props.selected) {
			setSetpoint({
				...props.selected,
				key: props.selected?.key?.id
			})
		}
	}, [props.selected])
	
	return (
		<BaseModal
			title="Add Setpoint"
			open={props.open}
			onClose={props.onClose}
			onSubmit={onSubmit}	
		>
			<Box>
				<FormInput	
					value={setpoint.name}
					onChange={(value) => setSetpoint({...setpoint, name: value})}
					placeholder="Setpoint Name" />
				<FormControl 
					value={setpoint.key}
					labelKey="key"
					onChange={(value) => setSetpoint({...setpoint, key: value})}
					options={props.stateItems || []}
					placeholder="State Item" />
				<FormControl 
					value={setpoint.type}
					onChange={(value) => setSetpoint({...setpoint, type: value})}
					labelKey="name"
					options={[{id: 'ratio', name: 'Percentage'}, {id: 'value', name: 'Value'}]}
					placeholder="Type" />
				
				<Box align="center" direction="row">
					<FormInput 
						value={setpoint.value}
						onChange={(value) => setSetpoint({...setpoint, value: value})}
						placeholder="Setpoint Value" />
					{setpoint.type === 'ratio' && <Text>%</Text>}
				</Box>
	
			</Box>
		</BaseModal>
	)
}