import { BaseModal, FormControl } from '@hexhive/ui';
import React, { useState } from 'react';

export const ScheduleLocationModal = (props) => {
	const [ location, setLocation ] = useState<string>('')

	const onSubmit = () => {
		props.onSubmit(location)
	}
	return (
		<BaseModal 
			title="Assign Location"
			open={props.open}
			onClose={props.onClose}
			onSubmit={onSubmit}>
			<FormControl 
				options={props.locations}
				value={location}
				onChange={(e) => setLocation(e)}
				labelKey="name"
				valueKey="id"
				placeholder="Location" />
		</BaseModal>
	)
}