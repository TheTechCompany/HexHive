import React from 'react';
import { Box } from 'grommet'
import { Bus } from './Bus';
import { Add } from 'grommet-icons';

export interface BusMapProps {
	buses?: {
		id?: string, 
		name: string, 
		ports: (number | {inputs: number, outputs: number})
		mappedDevices: {device: {id: string}, key: {key: string}, value: {key: string}}[],
		connectedDevices?: {id: string, name: string, port: string}[]
	}[];

	onPortSelect?: (bus: string, port: string) => void;

	devices?: {id?: string, name: string, type: string}[]

	add?: boolean
	onMapChanged?: (bus: string, port: string, device?: string[]) => void;
	// selected?: {id?: string, name: string};
	// onClick?: (bus: {id?: string, name: string, ports: (number | {inputs: number, outputs: number}) }) => void;
}

export const BusMap : React.FC<BusMapProps> = (props) => {


	return (
		<Box
			pad={'xsmall'}
			height={{min: "min-content"}}
			width="100%"
			gap="xsmall"
			overflow="scroll"
			direction="row">
	
			{props.buses.map((bus) => (
				<Bus
					connectedDevices={bus.connectedDevices}
					mappedDevices={bus.mappedDevices}
					onPortSelect={(port) => {
						props.onPortSelect(bus.id, port)
					}}
					onPortsChanged={(port, device) => {
						props.onMapChanged(
							bus.id,
							port,
							device
						)
					}}
					devices={props.devices}
					name={bus.name}
					ports={bus.ports} >
				</Bus>
			))}
			
		</Box>
	)
}