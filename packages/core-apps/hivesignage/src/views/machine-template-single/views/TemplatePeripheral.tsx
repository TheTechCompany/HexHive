import React, {useContext, useState} from 'react';
import { Box, Text, Button, List } from 'grommet';
import { Add } from 'grommet-icons';
import { useMutation, useQuery } from '@hexhive-api/signage';
import { MachineTemplateSingleContext } from '../context';
import { PeripheralTemplateModal } from '../modals/PeripheralTemplate';

export const TemplatePeripheralList = () => {
	const query = useQuery()

	const [ modalOpen, openModal ] = useState(false);

	const [ selected, setSelected ] = useState<any>()

	const { refresh, templateId, peripherals, computers } = useContext(MachineTemplateSingleContext)

	const [ deleteTemplatePeripheral, deleteInfo ] = useMutation((mutation, args: {id: string}) => {
		if(!args.id) return;

		const item = mutation.updateMachineTemplates({
			where: {id: templateId},
			update: {
				peripherals: [{
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
	const [ createTemplatePeripheral, createInfo ] = useMutation((mutation, args: {name: string, private: boolean, type: string, computer: string}) => {
		let computerUpdate = {};
		if(args.computer){
			computerUpdate = {
				computer: {connect: {where: {node: {id: args.computer}}}}
			}
		}
		const item = mutation.updateMachineTemplates({
			where: {id: templateId},
			update: {
				peripherals: [{
					create: [{
						node: {
							name: args.name,
							private: args.private,
							type: args.type,
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
			<PeripheralTemplateModal 
				open={modalOpen}
				selected={selected}
				onSubmit={(peripheral) => {
					createTemplatePeripheral({
						args: {
							name: peripheral.name,
							private: peripheral.private,
							type: peripheral.type,
							computer: peripheral.computer
						}
					}).then(() => {
						refresh()
						openModal(false)
					})
				}}
				onDelete={() => {
					deleteTemplatePeripheral({
						args: {
							id: selected.id
						}
					}).then(() => {
						openModal(false)
						setSelected(undefined)
						refresh()
					})
				}}
				computers={computers}
				onClose={() => openModal(false)} />
			<Box pad={{left: 'small'}} align="center" justify="between" direction="row">
				<Text>Peripherals</Text>
				<Button onClick={() => openModal(true)} hoverIndicator  icon={<Add size="small" />} />
			</Box>
			<Box>
				<List 
					primaryKey="name"
					data={peripherals || []} />
			</Box>
		</Box>
	)
}