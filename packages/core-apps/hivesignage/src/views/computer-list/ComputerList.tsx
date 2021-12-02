import React from 'react';
import { Box, List, Text, Button } from 'grommet';
import { useQuery } from '@hexhive-api/signage';
import { Add } from 'grommet-icons';

export interface ComputerListProps {

}

export const ComputerList : React.FC<ComputerListProps> = (props) => {
	const query = useQuery()

	const computers = query.computers()

	return (
		<Box 
			round="xsmall"
			elevation="small"
			overflow="hidden"
			background="light-1" 
			flex>
			<Box 
				pad="xsmall"
				align="center"
				justify="between"
				background="accent-2"
				direction="row">
				<Text>Computers</Text>
				<Button	
					plain
					icon={<Add size="small" />}
					hoverIndicator />
			</Box>
			<List data={computers} />
		</Box>
	)
}