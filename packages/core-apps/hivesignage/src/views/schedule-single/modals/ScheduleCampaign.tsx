import { BaseModal, FormControl } from '@hexhive/ui';
import React from 'react';

export const ScheduleCampaignModal = (props) => {
	return (
		<BaseModal 
			title="Assign Campaign"
			open={props.open}>
			<FormControl 
				options={props.campaigns}
				placeholder="Campaign" />
			<FormControl 
				options={props.tiers} 
				placeholder="Tier" />
		</BaseModal>
	)
}