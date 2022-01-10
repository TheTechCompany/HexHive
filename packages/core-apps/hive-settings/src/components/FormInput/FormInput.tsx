import { Box, Text, TextInput } from 'grommet';
import React from 'react';

export const FormInput = (props) => {
	return (  
		<Box direction="column">
			<Text size="small">{props.label}</Text>
			<TextInput 
				value={props.value}
				onChange={props.onChange}
				placeholder={props.label} />
		</Box>
	)
}