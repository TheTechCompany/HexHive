import { Box, Text, Button, List } from 'grommet';
import React, {useState, useContext} from 'react';
import { Add, Analytics, MoreVertical } from 'grommet-icons';
import { ScheduleMeter } from '../../../components/schedule-meter';
import { CreateTierModal } from '../../../modals/create-tier/CreateTierModal';
import { useMutation } from '@hexhive-api/signage';
import { ScheduleSingleContext } from '../context';
import { VisualizeTierModal } from '../../../modals/visualize-tier/VisualizeTierModal';

export const ScheduleTiers = (props) => {
	const [ modalOpen, openModal ] = useState(false);
	const [ visualModalOpen, openVisualModal ] = useState(false)
	const { scheduleId, tiers, refresh } = useContext(ScheduleSingleContext)

	const [ selected, setSelected ] = useState<any>()

	const [ createTier, createInfo ] = useMutation((mutation, args: {id: string, name: string, percent: number, slots: number}) => {
		
		let mute = {}

		if(args.id){
			mute = {
				where: {node: {id: args.id}},
				update: {
					node: {
						name: args.name,
						percent: args.percent,
						slots: args.slots
					}
				}
			}
		}else{
			mute = {
				create: [{
					node: {
						name: args.name,
						percent: args.percent,
						slots: args.slots
					}
				}]
			}
		}

		const item = mutation.updateSchedules({
			where: {id: scheduleId},
			update: {
				tiers: [mute]
			}
		})

		return {
			item: {
				...item.schedules?.[0]
			}
		}
	})

	console.log(tiers)
	return (
		<Box>
			<Box pad={{left: 'xsmall'}} align="center" justify="between" direction="row">
				<Text weight="bold">Tiers</Text>
				<Box direction="row" align="center" justify="end">
					<Button onClick={() => openVisualModal(true)} hoverIndicator icon={<Analytics size="small" />} />
					<Button onClick={() => openModal(true)} hoverIndicator icon={<Add size="small" />} />
				</Box>
			</Box>
			<VisualizeTierModal
				open={visualModalOpen}
				tiers={tiers}
				onClose={() => openVisualModal(false)}
				/>
			<CreateTierModal
				open={modalOpen}
				selected={selected}
				onSubmit={(tier) => {
					
					createTier({args: {
						id: tier.id,
						name: tier.name,
						percent: tier.percent,
						slots: tier.slots
					}}).then(() => {
						openModal(false)
						refresh()
					})
					setSelected(undefined)

				}}
				onClose={() => {
					setSelected(undefined)
				 openModal(false)
				}}
				/>
			<ScheduleMeter 
				items={tiers?.filter((a) => a.percent).map((x, ix) => ({...x, label: x.name, percent: parseFloat(x.percent), color: ['red', 'green', 'blue', 'purple'][ix]}))}
				/>
			<List
				primaryKey="name"
				data={tiers}>
				{(datum) => (
					<Box direction="row" align="center" justify="between">
						<Text>{datum.name}</Text>
						<Button 
							onClick={() => {
								setSelected(datum)
								openModal(true)
							}}
							hoverIndicator
							plain
							style={{padding: 6, borderRadius: 3}}
							icon={<MoreVertical size="small" />} />
					</Box>
				)}
			</List>
		</Box>
	)
}