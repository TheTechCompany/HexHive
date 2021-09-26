import { Box, Text, TextInput } from 'grommet';
import React from 'react';
import { PortInput } from './PortInput';

export interface NodeSettingsProps {
	nodes?: {
		id?: string;
		options: string;
		runner?: {
			ports: {
				id: string;
				type: string;
				name: string;
			}[]
		}
	}[]
	paths?: {targetHandle?: string; sourceHandle?: string}[]

	options?: string[]
	onOptionChanged: (nodeId: string, key: string, value: any) => void
}

export const NodeSettings : React.FC<NodeSettingsProps> = (props) => {
	console.log("Node props", props)
	return (
		<Box pad="xsmall">
		<Text weight="bold">Node Settings</Text>

		{props.nodes.map((node) => (
			<Box gap="xsmall">
				{node?.runner?.ports?.map((port) => {
					let paths = props.paths.filter((a) => a.targetHandle == port.id || a.sourceHandle == port.id)
					return (
						<Box direction="column" align="start" justify="center">
							<Text size="small">{port.name}</Text>
							<PortInput 
								suggestions={props.options}
								onSuggestionSelect={({suggestion}) => {
									props.onOptionChanged(node.id, port.name, suggestion)
								}}
								value={JSON.parse(node.options || '{}')[port.name]}
								onChange={(e) => props.onOptionChanged(node.id, port.name, e.target.value)}
								/>
							{/* <TextInput 
								onSuggestionSelect={({suggestion}) => {
									props.onOptionChanged(node.id, port.name, suggestion)
								}}
								placeholder={port.type} 
								suggestions={props.options}
								disabled={paths.length > 0} /> */}
						</Box>
					)
				})}
			</Box>
		))}
	</Box>

	)
}