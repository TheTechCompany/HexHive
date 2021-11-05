import { Box, Text, Select, TextInput } from 'grommet';
import React from 'react';

export interface FormControlProps {
	placeholder?: string;
	options?: any[];
	valueKey?: string;
	labelKey?: string;
	value?: any;
	onChange?: (value: any) => void;
}
export const FormControl : React.FC<FormControlProps> = (props) => {
	return (
		<Box 
			flex
			direction="column" >
			<Text alignSelf="start" size="small">{props.placeholder}</Text>
			<Select 
				valueKey={{key: props.valueKey || 'id', reduce: true}}
				labelKey={props.labelKey || "name"}
				options={props.options || []}
				value={props.value}
				onChange={({value}) => props.onChange?.(value)}/>
		</Box>
	)
}