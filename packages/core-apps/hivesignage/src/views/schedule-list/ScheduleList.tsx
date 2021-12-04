import React from 'react';
import { Box, List, Text, Button } from 'grommet';
import { useMutation, useQuery } from '@hexhive-api/signage';
import { Add } from 'grommet-icons';
import { CreateScheduleModal } from '../../modals/create-schedule';
import { RouteComponentProps } from 'react-router';

export interface ScheduleListProps extends RouteComponentProps {

}

export const ScheduleList : React.FC<ScheduleListProps> = (props) => {
	const [ modalOpen, setModalOpen ] = React.useState(false);

	const query = useQuery()

	const schedules = query.schedules()

	const [ createSchedule, createInfo ] = useMutation((mutation, args: {name: string}) => {
		const item = mutation.createSchedules({
			input: [{
				name: args.name,
			}]
		})

		return {
			item: {
				...item.schedules?.[0]
			}
		}
	}, {
		awaitRefetchQueries: true,
		refetchQueries: [query.schedules()]
	})

	return (
		<Box 
			round="xsmall"
			elevation="small"
			overflow="hidden"
			background="light-1" 
			flex>
			<CreateScheduleModal 
				onSubmit={(schedule) => {
					createSchedule({args: {name: schedule.name}}).then(() => {
						setModalOpen(false)
					})
				}}
				onClose={() => setModalOpen(false)}
				open={modalOpen} />
			<Box 
				pad="xsmall"
				align="center"
				justify="between"
				background="accent-2"
				direction="row">
				<Text>Schedules</Text>
				<Button	
					style={{padding: 6, borderRadius: 3}}
					onClick={() => setModalOpen(true)}
					plain
					icon={<Add size="small" />}
					hoverIndicator />
			</Box>
			<List
				onClickItem={({item}) => props.history.push(`${props.match.url}/${item.id}`)}
				primaryKey="name"
				data={schedules} />
		</Box>
	)
}