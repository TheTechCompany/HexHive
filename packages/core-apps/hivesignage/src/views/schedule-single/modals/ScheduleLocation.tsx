import { BaseModal, FormControl } from '@hexhive/ui';
import React from 'react';

export const ScheduleLocationModal = (props) => {
	return (
		<BaseModal 
			title="Assign Location"
			open={props.open}>
			<FormControl 
				options={props.locations}
				placeholder="Location" />
		</BaseModal>
	)
}