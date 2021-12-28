import { Box, Text, TextInput } from 'grommet';
import React from 'react';

export interface FormInputProps {
	placeholder?: string;
	type?: string;
	
	value?: any;
	onChange?: (value: any) => void;
}
export const FormInput : React.FC<FormInputProps> = (props) => {
	return (
		<Box 
			direction="column" 
			align="start">
			<Text size="small">{props.placeholder}</Text>
			<TextInput 
				type={props.type}
				value={props.value}
				onChange={(e) => props.onChange?.(e.target.value)}/>
		</Box>
	)
}