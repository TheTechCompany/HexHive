import { BaseModal } from '@hexhive/ui';
import { useState } from 'react';
import { TextInput } from 'grommet';
import React from 'react';

export const CreateMachineTemplateModal = (props) => {
	const [ template, setTemplate ] = useState<any>({})

	const onSubmit = () => {
		props.onSubmit(template)
	}
	return (
		<BaseModal
			open={props.open}
			onClose={props.onClose}
			onSubmit={onSubmit}
			title="Create Template"
			>
			<TextInput 
				value={template.name}
				onChange={(e) => setTemplate({...template, name: e.target.value})}
				placeholder="Name" />
			
		</BaseModal>
	)
}