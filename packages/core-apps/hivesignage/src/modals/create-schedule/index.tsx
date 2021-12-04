import { BaseModal } from '@hexhive/ui';
import { Box, TextInput } from 'grommet';
import React, { useState } from 'react';

export const CreateScheduleModal = (props) => {

	const [ schedule, setSchedule ] = useState<any>({})

	const onSubmit = () => {
		props.onSubmit(schedule)
	}
	
	return (
		<BaseModal
			open={props.open}
			onClose={props.onClose}
			onSubmit={onSubmit}
			title="Create Schedule" >

			<Box>
				<TextInput 
					value={schedule.name}
					onChange={(e) => setSchedule({ ...schedule, name: e.target.value })}
					placeholder="Schedule name" />

			</Box>
		</BaseModal>
	)
}