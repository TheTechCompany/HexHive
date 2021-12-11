import { useQuery } from '@hexhive-api/signage';
import { Box, List } from 'grommet';
import React, {useContext} from 'react';
import { DisplaySingleContext } from './context';

export const DisplayComputers = (props) => {

	const { id } = useContext(DisplaySingleContext)

	const query = useQuery()

	// const computers = query.computers({where: {display: {id: props.match.params.id}}})

	return (
		<Box flex background="neutral-1">
			<List data={[]} />
		</Box>
	)
}