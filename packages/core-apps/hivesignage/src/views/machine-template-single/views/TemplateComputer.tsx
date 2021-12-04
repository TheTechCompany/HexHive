import React, {useContext, useState} from 'react';
import { Box, Text, Button, List } from 'grommet';
import { Add, MoreVertical } from 'grommet-icons';
import { useMutation, useQuery } from '@hexhive-api/signage';
import { MachineTemplateSingleContext } from '../context';
import { ComputerTemplateModal } from '../modals/ComputerTemplate';

export const TemplateComputerList = () => {
	const query = useQuery()

	const [ modalOpen, openModal ] = useState(false);
	const [ selected, setSelected ] = useState<any>()

	const { refresh, templateId, computers, screens } = useContext(MachineTemplateSingleContext)

	const [ deleteTemplateComputer, deleteInfo ] = useMutation((mutation, args: {id: string}) => {
		const item = mutation.updateMachineTemplates({
			where: {id: templateId},
			update: {
				computers: [{
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
	const [ createTemplateComputer, createInfo ] = useMutation((mutation, args: {name: string}) => {
		const item = mutation.updateMachineTemplates({
			where: {id: templateId},
			update: {
				computers: [{
					create: [{
						node: {
							name: args.name,
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
			<ComputerTemplateModal
				selected={selected} 
				screens={screens} 
				open={modalOpen} 
				onDelete={() => {
					deleteTemplateComputer({args: {
						id: selected?.id
					}}).then(() => {
						refresh()
						setSelected(undefined)
						openModal(false)
					})
				}}
				onSubmit={(computer) => {
					createTemplateComputer({args: {
						name: computer.name
					}}).then(() => {
						refresh()
						openModal(false)
					})
				}}
				onClose={() => openModal(false)} />
			<Box pad={{left: 'small'}} align="center" justify="between" direction="row">
				<Text>Computers</Text>
				<Button onClick={() => openModal(true)} hoverIndicator  icon={<Add size="small" />} />
			</Box>
			<Box>
				<List 
					primaryKey="name"
					data={computers || []}>
					{(datum) => (
						<Box
							align="center"
							justify="between"
							direction="row">
							<Text>{datum.name}</Text>
							<Button
								plain
								style={{padding: 6, borderRadius: 3}}
								hoverIndicator
								onClick={() => {
								setSelected(datum)
								openModal(true)
							}} icon={<MoreVertical size="small" />} />
						</Box>
					)}
				</List>
			</Box>
		</Box>
	)
}