import React from 'react';
import { Box, Typography } from '@mui/material'

export const FormLabel = (props) => {
		return (  
			<Box>
				<Typography>{props.label}</Typography>
				{props.children}				
			</Box>
		)
	
}