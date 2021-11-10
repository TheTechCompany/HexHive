import { BaseModal } from '../base';
import React, {useEffect, useState} from 'react';
import { FormControl, FormInput } from '@hexhive/ui'
import { Box  } from 'grommet';

export const DeviceInterlock = (props) => {

	const [ interlock, setInterlock ] = useState<{
		inputDevice?: string,
		inputDeviceKey?: string,
		comparator?: string,
		assertion?: string
		action?: string
	}>({})

	const onSubmit = () => {
		props.onSubmit?.(interlock)
		setInterlock({})
	}

	useEffect(() => {
		if(props.selected) {
			setInterlock({
				...props.selected,
				inputDevice: props.selected?.inputDevice?.id,
				inputDeviceKey: props.selected?.inputDeviceKey?.id,
				comparator: props.selected?.comparator,
				assertion: props.selected?.assertion,
				action: props.selected?.action?.id
			})
		}
	}, [props.selected])
	
	return (
		<BaseModal
			title="Add Device Interlock"
			open={props.open}
			onClose={props.onClose}
			onSubmit={onSubmit}	
		>
			<Box>
				<FormControl 
					value={interlock.inputDevice}
					onChange={(value) => setInterlock({...interlock, inputDevice: value})}
					options={props.devices || []}
					placeholder="Input Device" />
				<FormControl 
					value={interlock.inputDeviceKey}
					labelKey="key"
					onChange={(value) => setInterlock({...interlock, inputDeviceKey: value})}
					options={props.devices?.find((a) => a.id == interlock?.inputDevice)?.type?.state || []}
					placeholder="Input Device State Key" />
				<FormInput 
					value={interlock.comparator}
					onChange={(value) => setInterlock({...interlock, comparator: value})}
					placeholder="Comparison Operator" />
				<FormInput 
					value={interlock.assertion}
					onChange={(value) => setInterlock({...interlock, assertion: value})}
					placeholder="Input Device State Value" />
				<FormControl 
					labelKey="key"
					valueKey={"id"}
					value={interlock.action}
					onChange={(value) => setInterlock({...interlock, action: value})}
					options={props.actions || []}
					placeholder="Action" />
			</Box>
		</BaseModal>
	)
}