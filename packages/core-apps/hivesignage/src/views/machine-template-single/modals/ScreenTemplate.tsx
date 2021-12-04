import { BaseModal, FormInput, FormControl } from '@hexhive/ui';
import { TextInput, Box, CheckBox } from 'grommet';
import React, {useState, useEffect} from 'react';

export const ScreenTemplateModal = (props) => {
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
			title="Create Screen Template"
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
				
				<Box direction="row" align="center">
					<FormInput 
						type="number"
						value={template.width}
						onChange={(e) => setTemplate({...template, width: parseInt(e)})}
						placeholder="Width (px)" />
					<FormInput
						type="number"
						value={template.height}
						onChange={(e) => setTemplate({...template, height: parseInt(e)})}
						placeholder="Height (px)" />
				</Box>
				<Box direction="row" justify="end">
					<CheckBox 
						reverse
						label="Private"
						onChange={(e) => setTemplate({...template, private: e.target.checked})}
						checked={template.private} /> 
				</Box>
				<FormControl
					value={template.computer}
					onChange={(e) => setTemplate({...template, computer: e})}
					options={props.computers || []}
					placeholder="Computer" />
			</Box>
			
		</BaseModal>
	)
}