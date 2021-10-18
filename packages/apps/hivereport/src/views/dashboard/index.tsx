import React from 'react';
import { Box } from 'grommet'
import { useQuery } from '@hexhive/client'

export const Dashboard = () => {

	const query = useQuery({
		suspense: false,
		staleWhileRevalidate: true
	})

	const workInProgress = query.flowWorkInProgress({
		startDate: new Date("2021-01-01").toISOString(),
	}) 

	return (
		<Box>
			{workInProgress.quoted} - {workInProgress.invoiced}
		</Box>
	)
}