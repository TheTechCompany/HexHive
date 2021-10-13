import { Box, Text, Select } from 'grommet';
import React from 'react';

export type BusPortRail  = number | {inputs: number, outputs: number};

export interface BusPortsProps {
	ports: BusPortRail
	devices?: {id?: string, name: string, type: string}[]
}

export const BusPorts: React.FC<BusPortsProps> = (props) => {

	const renderPorts = (render_fn: (ix: number, mirror?: boolean) => any) => {
		if(typeof(props.ports) == "object"){
			
			let left = (<Box>
				<Box direction="row" justify="center">
					<Text size="small">Inputs</Text>
				</Box>
				{Array.from(Array(props.ports.inputs)).map((x, ix) => render_fn(ix))}
				</Box>)
			let right = (<Box>
				<Box direction="row" justify="center">
					<Text size="small">Outputs</Text>
				</Box>
				{Array.from(Array(props.ports.outputs)).map((x, ix) => render_fn(ix, true))}
			</Box>)

			return (
				<Box flex direction="row">
					{left}
					{right}
				</Box>
			)
		}else if(typeof(props.ports) == "number"){
			return (<>{Array.from(Array(props.ports)).map((x, ix) => render_fn(ix))}</>)
		}
	}

	return renderPorts((ix, reverse) => (
		<Box
			gap="small"
			align="center"
			justify="between"
			direction={reverse ? "row-reverse" : "row"}>
			<Box pad={{ horizontal: 'xsmall' }} background="#dfdfdf" round={{ corner: reverse ? 'left' : 'right', size: 'small' }} flex>
				<Text size="small">Port {ix + 1}</Text>
			</Box>
			<Box >
				<Select
					plain
					size="small"
					labelKey="name"
					options={props.devices}
					placeholder="Map" />
			</Box>
		</Box>
	))
}