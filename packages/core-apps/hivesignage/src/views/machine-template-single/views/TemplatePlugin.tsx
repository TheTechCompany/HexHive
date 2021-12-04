import React, {useContext} from 'react';
import { Box, Text, Button, List } from 'grommet';
import { Add } from 'grommet-icons';
import { useQuery } from '@hexhive-api/signage';
import { MachineTemplateSingleContext } from '../context';

export const TemplatePluginList = () => {
	const query = useQuery()

	const { plugins } = useContext(MachineTemplateSingleContext)

	return (
		<Box flex>
			<Box pad={{left: 'small'}} align="center" justify="between" direction="row">
				<Text>Plugins</Text>
				<Button hoverIndicator  icon={<Add size="small" />} />
			</Box>
			<Box>
				<List 
					data={plugins || []} />
			</Box>
		</Box>
	)
}