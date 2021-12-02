import React from 'react';
import { Box } from 'grommet';
import { useQuery } from '@hexhive-api/signage';

export const ComputerSingle = (props) => {
	const query = useQuery()

	const computer = query.computers({where: {id: props.match.params.id}})?.[0]

	return (
		<Box>

		</Box>
	)
}