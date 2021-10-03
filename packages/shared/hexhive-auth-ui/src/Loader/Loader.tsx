import React from 'react';
import { Box, Text, Spinner } from 'grommet'

export const Loader = () => {
	return (
		<Box 
			direction="column"
			flex 
			align="center" 
			justify="center">
			<Spinner size="medium" />
			<Text>Loading please wait ...</Text>
		</Box>
	)
}