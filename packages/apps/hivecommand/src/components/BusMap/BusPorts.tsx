import { Box, Text, Select } from 'grommet';
import React from 'react';

export type BusPortRail  = number | {inputs: number, outputs: number};

export interface BusPortsProps {
	ports: BusPortRail
	devices?: {id?: string, name: string, type: string}[]
	map: any[];
	onSelect?: (portKey: string, ix: number) => void;
	onPortsChanged?: (port: string, device: string[]) => void;
	connectedDevices?: {id: string, name: string, port: string}[]

}

export const BusPorts: React.FC<BusPortsProps> = (props) => {


	const renderPorts = (render_fn: (ix: number, key?: string, mirror?: boolean) => any) => {
		if(typeof(props.ports) == "object"){
			
			let left = (<Box>
				<Box direction="row" justify="center">
					<Text size="small">Inputs</Text>
				</Box>
				{Array.from(Array(props.ports.inputs)).map((x, ix) => render_fn(ix, 'I'))}
				</Box>)
			let right = (<Box>
				<Box direction="row" justify="center">
					<Text size="small">Outputs</Text>
				</Box>
				{Array.from(Array(props.ports.outputs)).map((x, ix) => render_fn(ix, 'O', true))}
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

	console.log("CONNECTED", props.connectedDevices)
	return renderPorts((ix, key, reverse) => {
		let portKey =  `${key ? key+'_' : ''}${ix + 1}`
		return (
		<Box
			focusIndicator={true}
			onClick={() => props.onSelect(portKey, ix)}
			gap="small"
			align="center"
			justify="between"
			direction={reverse ? "row-reverse" : "row"}>
			<Box align="center">
				<Box 
					pad={{ horizontal: 'xsmall' }} 
					background="#dfdfdf" 
					round={{ corner: reverse ? 'left' : 'right', size: 'small' }} 
					flex>
					<Text size="small">Port {ix + 1}</Text>
				</Box>
				<Text size="xsmall">{props.connectedDevices?.find((a) => `${a.port}` == `${portKey}`)?.name}</Text>

			</Box>
			<Box width="small" align="center">
				<Text size="small">{props.map.filter((a) => a.port == portKey)?.filter((a) => a.device).map((x) => x?.device?.name).join(', ')}</Text>
				{/* <Select
					clear={true}
					multiple
					plain
					value={props.map.filter((a) => a.port == portKey)?.filter((a) => a.device).map((x) => x?.device?.id)}
					onChange={({value}) => {
						console.log("Change", value)
						props.onPortsChanged(portKey, value)
						
						// console.log(value)
						// props.onPortsChanged(ix + 1, value)
					}}
					size="small"
					labelKey="name"
					valueKey={{reduce: true, key: 'id'}}
					options={props.devices}
					placeholder="Map" /> */}
			</Box>
		</Box>
		)
	}
	)
}