import React from 'react';
import { Box, Button, Text } from 'grommet';

export const DemoCampaign = (props) => {
	return (
		<Box 
			align="center"
			flex 
			justify="center"
			background="accent-1">
			<Text>Empty Campaign</Text>

			<Button label="Upload files..." />
		</Box>
	)
}