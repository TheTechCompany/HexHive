import React from 'react';
import { Box, Text, TextInput, Button } from 'grommet'

export interface BumpInputProps {
	placeholder?: string;
	type?: string;

	value?: any;
	onChange?: (value: any) => void;

	leftIcon?: any;
	onLeftClick?: () => void;
	rightIcon?: any;
	onRightClick?: () => void;
}

export const BumpInput : React.FC<BumpInputProps> = (props) => {
	return (
		<Box focusIndicator={false}>
			<Text size="small">{props.placeholder}</Text>
			<Box direction="row" align="center">
				<Button 
					hoverIndicator
					plain
					style={{padding: 6, borderRadius: 3}}
					size="small"
					onClick={() => { 
						props.onLeftClick?.();
					}}
					icon={props.leftIcon} />
				<TextInput
					focusIndicator={false} 
					type={props.type}
					value={props.value}
					onChange={(event) => { props.onChange?.(event.target.value) }}
					plain 
					placeholder={props.placeholder} />
				<Button 
					hoverIndicator
					plain
					style={{padding: 6, borderRadius: 3}}
					onClick={() => {
						props.onRightClick?.();
					}}
					icon={props.rightIcon} />
			</Box>
		</Box>
	)
}