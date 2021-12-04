import { Box, Text, Button } from 'grommet';
import React, {useState} from 'react';
import { Add } from 'grommet-icons';
import { ScheduleCampaignModal } from '../modals/ScheduleCampaign';
import { useQuery } from '@hexhive-api/signage';

export const ScheduleCampaigns = () => {
	const [ modalOpen, openModal ] = useState(false)

	const query = useQuery()

	const campaigns = query.campaigns({})

	return (
		<Box>
			<ScheduleCampaignModal 
				campaigns={campaigns}
				tiers={[]}
				open={modalOpen} />
			<Box pad={{left: 'xsmall'}} align="center" justify="between" direction="row">
				<Text>Campaigns</Text>
				<Button onClick={() => openModal(true)} hoverIndicator icon={<Add size="small" />} />
			</Box>
		</Box>
	)
}