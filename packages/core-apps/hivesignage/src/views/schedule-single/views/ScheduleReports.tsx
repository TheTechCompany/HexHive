import { Box, Text, Button } from 'grommet';
import React from 'react';
import { Add } from 'grommet-icons';

export const ScheduleReports = () => {
	return (
		<Box>
			<Box pad={{left: 'xsmall'}} align="center" justify="between" direction="row">
				<Text weight="bold">Reports</Text>
				<Button hoverIndicator icon={<Add size="small" />} />
			</Box>
		</Box>
	)
}