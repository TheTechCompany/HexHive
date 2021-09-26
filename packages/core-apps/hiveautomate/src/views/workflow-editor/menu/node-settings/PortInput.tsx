import React from 'react';
import { Box, Text, Select, TextInput } from 'grommet'

export interface PortInputProps {
	value: string;
	onChange: any;

	suggestions: any[];
	onSuggestionSelect: any;
}

export const PortInput = (props) => {
	return (
		<Box 
			round="xsmall"
			border={{size: 'small', color: 'accent-1'}}
			align="center"
			direction="row">
			<Box 
				round="xsmall"
				direction="row"
				pad="xsmall" 
				background="lightgray">
				<Text size="small">
					trigger.
				</Text>
			</Box>
			<Box focusIndicator={false} direction="row">
			<TextInput 
				suggestions={props.suggestions}
				onSuggestionSelect={props.onSuggestionSelect}
				focusIndicator={false}
				style={{padding: 4}}
				size="small"
				value={props.value}
				onChange={props.onChange}
				plain />
			</Box>

		
		</Box>

	)
}