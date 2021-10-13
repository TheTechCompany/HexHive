import React from 'react';
import { Box } from 'grommet'
import { Bus } from './Bus';
import { Add } from 'grommet-icons';

export interface BusMapProps {
	buses?: {id?: string, name: string, ports: (number | {inputs: number, outputs: number})}[]
	devices?: {id?: string, name: string, type: string}[]

	add?: boolean
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
					devices={props.devices}
					name={bus.name}
					ports={bus.ports} >
				</Bus>
			))}
			
		</Box>
	)
}