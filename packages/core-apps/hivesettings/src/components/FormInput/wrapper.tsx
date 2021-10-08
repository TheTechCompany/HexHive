import React from 'react';
import { Box, Text } from 'grommet'

export const FormLabel = (props) => {
		return (  
			<Box direction="column">
				<Text size="small">{props.label}</Text>
				{props.children}				
			</Box>
		)
	
}