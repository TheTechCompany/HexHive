import { Box, Text, Select, TextInput } from 'grommet';
import React from 'react';

export interface FormControlProps {
	placeholder?: string;
	options?: any[];
	
	value?: any;
	onChange?: (value: any) => void;
}
export const FormControl : React.FC<FormControlProps> = (props) => {
	return (
		<Box 
			direction="column" 
			align="start">
			<Text size="small">{props.placeholder}</Text>
			<Select 
				valueKey={{key: 'id', reduce: true}}
				labelKey="name"
				options={props.options || []}
				value={props.value}
				onChange={({value}) => props.onChange?.(value)}/>
		</Box>
	)
}