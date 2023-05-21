import { Box, Typography, TextField } from '@mui/material';
import React from 'react';

export const FormInput = (props) => {
	return (  
			<TextField
				sx={props.sx}
				fullWidth
				size='small'
				label={props.label} 
				value={props.value}
				onChange={props.onChange} />
	)
}