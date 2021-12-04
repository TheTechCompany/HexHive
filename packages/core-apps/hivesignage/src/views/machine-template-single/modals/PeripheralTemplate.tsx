import { BaseModal, FormInput, FormControl } from '@hexhive/ui';
import { TextInput, Box, CheckBox } from 'grommet';
import React, {useState, useEffect} from 'react';

export const PeripheralTemplateModal = (props) => {
	const [template, setTemplate] = useState<any>({})

	const onSubmit = () => {
		props.onSubmit(template)
	}

	useEffect(() => {
		setTemplate({
			...props.selected
		})
	}, [props.selected])

	return (
		<BaseModal
			width="medium"
			title="Create Peripheral Template"
			onClose={props.onClose}
			onSubmit={onSubmit}
			onDelete={template?.id && props.onDelete}
			open={props.open}
			>
			<Box gap="xsmall">
				<TextInput 
					value={template.name}
					onChange={(e) => setTemplate({...template, name: e.target.value})}
					placeholder="Name" />
	
				<FormControl
					labelKey="label"
					valueKey="value"
					value={template.type}
					onChange={(value) => setTemplate({...template, type: value})}
					options={[{label: 'Camera', value: 'camera'}, {label: 'Touch Screen', value: 'touch-screen'}, {label: 'Speaker', value: 'speaker'}]}
					placeholder="Type" />
				<Box direction="row" justify="end">
					<CheckBox 
						reverse
						label="Private"
						onChange={(e) => setTemplate({...template, private: e.target.checked})}
						checked={template.private} /> 
				</Box>
				<FormControl
					options={props.computers || []}
					placeholder="Computer" />
			</Box>
			
		</BaseModal>
	)
}