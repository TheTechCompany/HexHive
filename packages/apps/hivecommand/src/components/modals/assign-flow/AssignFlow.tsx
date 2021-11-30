import { BaseModal, FormControl } from '@hexhive/ui';
import { TextInput } from 'core/hexhive-ui/node_modules/grommet';
import React, {useState} from 'react';

export const AssignFlowModal = (props) => {

	const [ action, setAction ] = useState<{
		name?: string,
		flow?: string[]
	}>({})

	const onSubmit = () => {
		props.onSubmit(action)
	}
	return (
		<BaseModal 
			title="Assign Flow"
			open={props.open} 
			onSubmit={onSubmit}
			onClose={props.onClose}>
			<TextInput 
				value={action.name}
				onChange={(e) => setAction({...action, name: e.target.value})}
				placeholder="Action name" />
			<FormControl 
				multiple
				value={action.flow}
				onChange={(value) => setAction({...action, flow: value})}
				options={props.flows?.map((x) => x.children?.map((y) => ({...y, name: `${x.name} - ${y.name}`}))).reduce((prev, curr) => prev.concat(curr), []) || []}
				labelKey="name"
				placeholder="Select flow" />
		</BaseModal>
	)
}