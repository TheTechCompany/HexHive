import { Box, Text, Button, List, Select } from 'grommet';
import React, {useState, useContext} from 'react';
import { Add, Plan, List as ListIcon } from 'grommet-icons';
import { ScheduleCampaignModal } from '../modals/ScheduleCampaign';
import { mutation, useMutation, useQuery } from '@hexhive-api/signage';
import { ScheduleSingleContext } from '../context';
import { Timeline } from '@hexhive/ui';

export const ScheduleCampaigns = () => {
	const [ activeView, changeActiveView ] = useState<string>(null);
	
	const [ modalOpen, openModal ] = useState(false)
	const [ viewMode, changeMode ] = useState(false)

	const query = useQuery()

	const { scheduleId, tiers, screens, campaigns, refresh } = useContext(ScheduleSingleContext)
	const allCampaigns = query.campaigns({})

	const [ scheduleCampaign, scheduleInfo ] = useMutation((mutation, args: {tier: string, campaign: string, dates: string[], screen: string}) => {
		let dateUpdate = {};
		if(args.dates.length == 2){
			dateUpdate = {
				startDate: new Date(args.dates[0]).toISOString(),
				endDate: new Date(args.dates[1]).toISOString()
			}
		}
		const item = mutation.updateSchedules({
			where: {id: scheduleId},
			update: {
				campaigns: [{
					connect: [{
						where: {node: {id: args.campaign}},
						edge: {tier: args.tier, ...dateUpdate, screen: args.screen}
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

	const getCampaigns = () => {
		return campaigns?.filter((a) => a.screen == activeView)
	}
	return (
		<Box flex>
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
							dates: schedule.dates,
							screen: activeView || screens?.[0]?.id
						}
					}).then(() => {
						refresh()
						openModal(false)
					})
				}} />
			<Box pad={{left: 'xsmall'}} align="center" justify="between" direction="row">
				<Box gap="xsmall" direction='row' align='center'>
					<Text weight="bold">Campaigns</Text>
					<Box direction='row' align='center'  round="xsmall">
						<Select 
							plain
							size='small'
							labelKey={"label"}
							onChange={({value}) => changeActiveView(value)}
							valueKey={{key: 'id', reduce: true}}
							value={activeView || screens?.[0]?.id}
							options={(screens || []).map((x) => ({id: x.id, label: x.name}))} />
					</Box>
		
				</Box>
				<Box direction='row' align='center'>
					<Button onClick={() => changeMode(!viewMode)} hoverIndicator icon={viewMode ? <ListIcon size="small" /> : <Plan size="small" />} />
					<Button onClick={() => openModal(true)} hoverIndicator icon={<Add size="small" />} />
				</Box>
			</Box>
			<Box flex>

				{!viewMode ? (
					<List 
					primaryKey="name"
					data={getCampaigns()} >
						{(datum) => (
							<Box direction="row" justify="between" align="center">
								<Text>{datum.name}</Text>
								<Text size='small'>{datum.tier?.name}</Text>
							</Box>
						)}
					</List>
				) : (
					<Box flex pad="xsmall">
						<Timeline
							data={getCampaigns().map((campaign) => ({
								id: campaign.id,
								name: campaign.name,
								color: tiers.find((a) => a.id == campaign.tier)?.color,
								showLabel: campaign.name,
								start: campaign.dates?.[0],
								end: campaign.dates?.[1],
							}))}
							/>
					</Box>
				)}
			</Box>
		</Box>
	)
}