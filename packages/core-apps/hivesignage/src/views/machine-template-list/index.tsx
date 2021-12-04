import { Box, Text, Button, List } from 'grommet';
import React, {useState} from 'react';
import { Add } from 'grommet-icons';
import { useMutation, useQuery } from '@hexhive-api/signage'
import { CreateMachineTemplateModal } from '../../modals/create-machine-template';
import { mutation } from '@hexhive/client';

export const MachineTemplateList = (props) => {
	const [ modalOpen, openModal ] = useState(false)
	const query = useQuery();

	const templates = query.machineTemplates()

	const [ createTemplate, createInfo ] = useMutation((mutation, args: {name: string}) => {
		const item = mutation.createMachineTemplates({
			input: [{
				name: args.name
			}]
		})
		return {
			item: {
				...item?.machineTemplates?.[0]
			}
		}
	}, {
		awaitRefetchQueries: true,
		refetchQueries: [query.machineTemplates()]
	})

	return (
		<Box flex background="neutral-1" round="xsmall" overflow="hidden">
			<Box pad="xsmall" justify="between" align="center" background="accent-2" direction="row">
				<Text>Machine Templates</Text>

				<Button onClick={() => openModal(true)} plain style={{padding: 6, borderRadius: 3}} hoverIndicator icon={<Add size="small" />} />
			</Box>
			<CreateMachineTemplateModal
				open={modalOpen}
				onSubmit={(machine) => {
					createTemplate({args: {name: machine.name}}).then(() => {
						openModal(false)

					})
				}}
				onClose={() => openModal(false)}
				/>
			<List 
				onClickItem={({item}) => props.history.push(`${props.match.url}/${item.id}`)}
				primaryKey="name"
				data={templates} />
		</Box>
	)
}