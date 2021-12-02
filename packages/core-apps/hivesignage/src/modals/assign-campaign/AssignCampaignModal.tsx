import { BaseModal } from '@hexhive/ui';
import { Box, Select } from 'grommet';
import React from 'react';

export const AssignCampaignModal = (props) => {


	const [schedule, setSchedule] = React.useState<{
		campaign?: string,
		tier?: string
	}>({});


	const onSubmit = () => {
		props.onSubmit(schedule);
	}
	
	return (
		<BaseModal 
			onClose={props.onClose}
			onSubmit={onSubmit}
			title="Assign Campaign"
			open={props.open}>
			<Box>
				<Select
					placeholder="Select a campaign"
					labelKey="name"
					valueKey={{key: 'id', reduce: true}}
					value={schedule.campaign}
					onChange={({value}) => setSchedule({...schedule, campaign: value})}
					options={props.campaigns || []} />
				<Select 
					placeholder="Select a tier" 
					labelKey="name"
					valueKey={{key: 'id', reduce: true}}
					value={schedule.tier}
					onChange={({value}) => setSchedule({...schedule, tier: value})}
					options={props.tiers || []} />
			</Box>
		</BaseModal>
	)
}