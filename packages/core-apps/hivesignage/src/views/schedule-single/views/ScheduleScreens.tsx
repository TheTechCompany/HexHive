import { useMutation } from '@hexhive-api/signage';
import { Box, Button, Text } from 'grommet';
import { Add } from 'grommet-icons';
import React, { useContext } from 'react';
import { useState } from 'react';
import { ScreenTemplateModal } from '../../machine-template-single/modals/ScreenTemplate';
import { ScheduleSingleContext } from '../context';

export const ScheduleScreens = () => {

	const [ modalOpen, openModal ] = useState(false);

	const { screens, scheduleId, refresh } = useContext(ScheduleSingleContext)

	const [ addScreen, addInfo ] = useMutation((mutation, args: {name: string, width: number, height: number}) => {
		const item = mutation.updateSchedules({
			where: {id: scheduleId},
			update: {
				screens: [{
					create: [{
						node: {
							name: args.name,
							width: args.width,
							height: args.height
						}
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
		<Box flex>

			<ScreenTemplateModal 
				open={modalOpen} 
				onClose={() => openModal(false)}
				onSubmit={(screen) => {
					addScreen({
						args: {
							...screen
						}
					}).then(() => {
						refresh()
						openModal(false)
					})
				}} />
			<Box
				align='center'
				direction='row'
				justify='between'
				pad="xsmall">
				<Text>Screens</Text>

				<Button 
					onClick={() => openModal(true)}
					hoverIndicator 
					plain 
					style={{padding: 6, borderRadius: 3}} icon={<Add size="small" />} />
			</Box>
			<Box pad="xsmall" gap="small" flex direction='row' wrap={true}>
				{screens?.map((screen) => (
					<Box align='center'>
						<Box 
							background={'accent-2'}
							round="xsmall"
							elevation='small' 
							width={`${screen.width / screen.height * 200}px`} 
							height={`200px`} />
						<Text>{screen.name}</Text>
						
					</Box>
				))}
				
			</Box>
		</Box>
	)
}