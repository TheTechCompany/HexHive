import { Box, Text, List, Button } from 'grommet';
import React, { useState, useContext} from 'react';
import { Add } from 'grommet-icons';
import { mutate, useMutation, useQuery } from '@hexhive-api/signage';
import { ScheduleSingleContext } from '../context';
import { ScheduleLocationModal } from '../modals/ScheduleLocation';

export const ScheduleLocations = () => {

	const [ modalOpen, openModal ] = useState(false);

	const query = useQuery()

	const { scheduleId, locations } = useContext(ScheduleSingleContext)

	const allLocations = query.locations({})

	const [ connectLocation, connectInfo ] = useMutation((mutation, args: {locationId: string}) => {
		if(!args.locationId) return;

		const item = mutation.updateSchedules({
			where: {id: scheduleId},
			update: {
				locations: [{
					connect: [{where: {node: {id: args.locationId}}}]
				}]
			}
		})
		return {
			item: {
				...item.schedules?.[0]
			}
		}
	})

	return (
		<Box>
			<ScheduleLocationModal 
				locations={allLocations}
				onSubmit={(location) => {

					connectLocation({args: {locationId: location}}).then(() => {
						openModal(false)
					})
				}}
				onClose={() => openModal(false)}
				open={modalOpen} />
			<Box pad={{left: 'xsmall'}} align="center" justify="between" direction="row">
				<Text>Locations</Text>
				<Button onClick={() => openModal(true)} hoverIndicator icon={<Add size="small" />} />
			</Box>

			<List 
				primaryKey="name"
				data={locations} />
		</Box>
	)
}