import { Box, Text, Button, List } from 'grommet';
import React, {useState, useContext} from 'react';
import { Add } from 'grommet-icons';
import { ScheduleCampaignModal } from '../modals/ScheduleCampaign';
import { mutation, useMutation, useQuery } from '@hexhive-api/signage';
import { ScheduleSingleContext } from '../context';

export const ScheduleCampaigns = () => {
	const [ modalOpen, openModal ] = useState(false)

	const query = useQuery()

	const { scheduleId, tiers, campaigns } = useContext(ScheduleSingleContext)
	const allCampaigns = query.campaigns({})

	const [ scheduleCampaign, scheduleInfo ] = useMutation((mutation, args: {tier: string, campaign: string}) => {
		const item = mutation.updateSchedules({
			where: {id: scheduleId},
			update: {
				campaigns: [{
					connect: [{
						where: {node: {id: args.campaign}},
						edge: {tier: args.tier}
					}]
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
			<ScheduleCampaignModal 
				campaigns={allCampaigns}
				tiers={tiers}
				open={modalOpen}
				onClose={() => openModal(false)}
				onSubmit={(schedule) => {
					scheduleCampaign({
						args: {
							tier: schedule.tier,
							campaign: schedule.campaign,
						}
					}).then(() => {
						openModal(false)
					})
				}} />
			<Box pad={{left: 'xsmall'}} align="center" justify="between" direction="row">
				<Text>Campaigns</Text>
				<Button onClick={() => openModal(true)} hoverIndicator icon={<Add size="small" />} />
			</Box>

			<List 
				primaryKey="name"
				data={campaigns} >
				{(datum) => (
					<Box direction="row" justify="between" align="center">
						<Text>{datum.name}</Text>
						<Text size='small'>{datum.tier?.name}</Text>
					</Box>
				)}
			</List>
		</Box>
	)
}