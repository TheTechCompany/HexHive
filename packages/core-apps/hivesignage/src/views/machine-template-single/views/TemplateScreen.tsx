import React, {useContext, useState} from 'react';
import { Box, Text, Button, List } from 'grommet';
import { Add } from 'grommet-icons';
import { useMutation, useQuery } from '@hexhive-api/signage';
import { MachineTemplateSingleContext } from '../context';
import { ScreenTemplateModal } from '../modals/ScreenTemplate';

export const TemplateScreenList = () => {
	const query = useQuery()

	const [ selected, setSelected ] = useState<any>()

	const [ modalOpen, openModal ] = useState(false)
	const { refresh, templateId, screens, computers } = useContext(MachineTemplateSingleContext)
	
	const [ deleteTemplateScreen, deleteInfo ] = useMutation((mutation, args: {id: string}) => {
		const item = mutation.updateMachineTemplates({
			where: {id: templateId},
			update: {
				displays: [{
					delete: [{
						where: {node: {id: args.id}},
					}]
				}]
			}	
		})
		return {
			item: {
				...item.machineTemplates?.[0]
			}
		}
	})
	const [ createTemplateScreen, createInfo ] = useMutation((mutation, args: {name: string, private: boolean, width: number, height: number, computer: string}) => {
		let computerUpdate = {};
		if(args.computer){
			computerUpdate = {
				computer: {connect: {where: {node: {id: args.computer}}}}
			}
		}
		const item = mutation.updateMachineTemplates({
			where: {id: templateId},
			update: {
				displays: [{
					create: [{
						node: {
							name: args.name,
							private: args.private,
							width: args.width,
							height: args.height,
							...computerUpdate
						}
					}]
				}]
			}
		})
		return {
			item: {
				...item.machineTemplates?.[0]
			}
		}
	})
	
	return (
		<Box flex>
			<ScreenTemplateModal 
				computers={computers}
				onClose={() => openModal(false)}
				onSubmit={(screen) => {
					createTemplateScreen({
						args: {
							...screen
						}
					}).then(() => {
						openModal(false)
						refresh()
					})
				}}
				onDelete={() => {
					deleteTemplateScreen({
						args: {
							id: selected.id
						}
					}).then(() => {
						openModal(false)
						setSelected(undefined)
						refresh()
					})
				}}
				open={modalOpen} />
			<Box pad={{left: 'small'}} align="center" justify="between" direction="row">
				<Text>Screens</Text>
				<Button onClick={() => openModal(true)} hoverIndicator  icon={<Add size="small" />} />
			</Box>
			<Box>
				<List 
					primaryKey="name"
					data={screens || []} />
			</Box>
		</Box>
	)
}