import { Box } from 'grommet';
import React from 'react';

export const HomeView = () => {
	return (
		<Box 
			gap="xsmall"
			direction="row"
			flex>

			<Box 
				height="medium"
				round="xsmall"
				elevation="small"
				width="medium" 
				background="neutral-1">
			Report usage here

			</Box>

			<Box 
				height="medium"
				round="xsmall"
				elevation="small"
				width="small" 
				background="neutral-1">
			Report usage here

			</Box>
		</Box>
	)
}