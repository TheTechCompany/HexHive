import { BaseModal, FormControl } from '@hexhive/ui';
import React, { useState } from 'react';

export const ScheduleCampaignModal = (props) => {
	const [ schedule, setSchedule ] = useState<any>();

	const onSubmit = () => {
		props.onSubmit(schedule);
	}

	return (
		<BaseModal 
			title="Assign Campaign"
			onClose={props.onClose}
			onSubmit={onSubmit}
			open={props.open}>
			<FormControl 
				onChange={(value) => setSchedule({...schedule, campaign: value})}
				value={schedule?.campaign}
				options={props.campaigns}
				placeholder="Campaign" />
			<FormControl 
				onChange={(value) => setSchedule({...schedule, tier: value})}
				value={schedule?.tier}
				options={props.tiers} 
				placeholder="Tier" />
		</BaseModal>
	)
}