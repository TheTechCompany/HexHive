import { Box, Select, Text, TextInput } from 'grommet';
import React from 'react';
import { BusPorts } from './BusPorts';

export interface BusProps {
	onClick?: () => void;

	name: string;
	devices?: {id?: string, name: string, type: string}[]

	ports: (number | {inputs: number, outputs: number});
	
	connectedDevices?: {id: string, name: string, port: string}[]
	
	mappedDevices: any[];

	onPortSelect?: (port: string) => void;
	onPortsChanged?: (port: string, device: any) => void;
	selected?: boolean ;
}

export const Bus : React.FC<BusProps> = (props) => {
	return (
		<Box
			focusIndicator={false}
			onClick={props.onClick}
			style={{cursor: 'pointer'}} 
			overflow="hidden"
			round="xsmall"
			background="accent-1"
			width={{min: "200px"}}
			height={{min: '300px'}}
			border={props.selected ? {size: 'small'} : undefined}
			elevation={props.selected ? 'high' : "medium"}>
				<Box 
					background="accent-2"
					justify="center" 
					align="center" 
					pad="xsmall" 
					direction="row">
					<Text size="small">{props.name}</Text>
				</Box>
				<Box>
					<BusPorts
						onSelect={(portKey, ix) => {
							props.onPortSelect(portKey)
						}}
						connectedDevices={props.connectedDevices}
						map={props.mappedDevices}
						onPortsChanged={props.onPortsChanged}
						devices={props.devices || []}
						ports={props.ports} />
				</Box>
		</Box>
	)
}