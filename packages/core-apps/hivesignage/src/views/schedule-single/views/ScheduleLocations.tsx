import { Box, Text, Button } from 'grommet';
import React, { useState, useContext} from 'react';
import { Add } from 'grommet-icons';
import { useQuery } from '@hexhive-api/signage';
import { ScheduleSingleContext } from '../context';
import { ScheduleLocationModal } from '../modals/ScheduleLocation';

export const ScheduleLocations = () => {

	const [ modalOpen, openModal ] = useState(false);

	const query = useQuery()

	const { scheduleId, } = useContext(ScheduleSingleContext)
	const locations = query.locations({})

	return (
		<Box>
			<ScheduleLocationModal 
				locations={locations}
				onClose={() => openModal(false)}
				open={modalOpen} />
			<Box pad={{left: 'xsmall'}} align="center" justify="between" direction="row">
				<Text>Locations</Text>
				<Button onClick={() => openModal(true)} hoverIndicator icon={<Add size="small" />} />
			</Box>

		</Box>
	)
}