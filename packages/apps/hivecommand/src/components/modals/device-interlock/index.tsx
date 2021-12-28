import { BaseModal } from '../base';
import React, {useEffect, useState} from 'react';
import { FormControl, FormInput } from '@hexhive/ui'
import { Box, Button  } from 'grommet';
import { StateSection } from './sections/State';
import { ConditionSection } from './sections/Conditions';
import { ActionSection } from './sections/Actions';
import { DeviceInterlockProvider } from './context';

export interface DeviceInterlockModalProps {
	open: boolean;
	selected?: any
	devices?: any[];
	actions?: any[];
	device?: any;
	onSubmit?: (interlock: any) => void;
	onClose?: () => void;
}

export const DeviceInterlock : React.FC<DeviceInterlockModalProps> = (props) => {

	const [ view, setView ] = useState<'state' | 'conditions' | 'actions'>('state')

	const [ interlock, setInterlock ] = useState<{
		inputDevice?: string,
		inputDeviceKey?: string,
		comparator?: string,
		assertion?: {
			setpoint?: string,
			value?: string
		},
		valueType?: string,
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
				valueType: props.selected?.assertion?.type || 'value',
				inputDevice: props.selected?.inputDevice?.id,
				inputDeviceKey: props.selected?.inputDeviceKey?.id,
				comparator: props.selected?.comparator,
				assertion: props.selected?.assertion?.type == 'setpoint' ? props.selected?.assertion?.setpoint?.id : props.selected?.assertion?.value,
				action: props.selected?.action?.id
			})
		}
	}, [props.selected])
	
	console.log(props.devices?.find((a) => a.id == interlock.inputDevice)?.setpoints)

	const tabItems = [
		{
			id: 'state',
			label: "State"
		},
		{
			id: 'conditions',
			label: "Conditions"
		},
		{
			id: 'actions',
			label: "Actions"
		}
	]

	const renderView = () => {
		switch(view){
			case 'actions':
				return (
					<ActionSection />
				)
			case 'conditions':
				return (
					<ConditionSection />
				)
			case 'state':
				return (
					<StateSection />
				)
		}
	}

	return (
		<DeviceInterlockProvider
			value={{
				interlock,
				setInterlock,
				devices: props.devices,
				device: props.device,
			}}>
			<BaseModal
				noClick={true}
				title="Add Device Interlock"
				open={props.open}
				onClose={props.onClose}
				onSubmit={onSubmit}	
				width="large"
				header={(
					<Box background="accent-1" direction="row" gap="small">
						{tabItems.map((tab) => (
							<Button 
								onClick={() => setView(tab.id as any)}
								active={view == tab.id} 
								style={{padding: 6, borderRadius: 3}} 
								hoverIndicator 
								plain
								label={tab.label} />
						))}
						
					</Box>
				)}
			>
				<Box>
					{renderView()}
				</Box>
			</BaseModal>
		</DeviceInterlockProvider>
	)
}