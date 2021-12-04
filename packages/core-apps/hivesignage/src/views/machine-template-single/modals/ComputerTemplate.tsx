import { BaseModal, FormInput, FormControl } from '@hexhive/ui';
import { TextInput, Box, CheckBox } from 'grommet';
import React, {useState, useEffect} from 'react';

export const ComputerTemplateModal = (props) => {
	const [template, setTemplate] = useState<any>({})

	const onSubmit = () => {
		props.onSubmit(template)
	}

	useEffect(() => {
		setTemplate({...props.selected})
	}, [props.selected])
	
	return (
		<BaseModal
			width="medium"
			title="Create Computer Template"
			onClose={props.onClose}
			open={props.open}
			onDelete={props?.selected?.id && props.onDelete}
			onSubmit={onSubmit}
			>
			<Box gap="xsmall">
				<TextInput 
					value={template.name}
					onChange={(e) => setTemplate({...template, name: e.target.value})}
					placeholder="Name" />
	
				<FormControl
					options={props.screens || []}
					placeholder="Screen" />
			</Box>
			
		</BaseModal>
	)
}