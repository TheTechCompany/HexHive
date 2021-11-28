import { BaseModal } from '@hexhive/ui';
import { Box, Select } from 'grommet';
import React from 'react';

export const AssignDisplayModal = (props) => {


	const [display, setDisplay] = React.useState<string>('');


	const onSubmit = () => {
		props.onSubmit(display);
	}
	
	return (
		<BaseModal 
			onClose={props.onClose}
			onSubmit={onSubmit}
			title="Assign Display"
			open={props.open}>
			<Box>
				<Select
					placeholder="Select a display"
					labelKey="label"
					valueKey={{key: 'id', reduce: true}}
					value={display}
					onChange={({value}) => setDisplay(value)}
					options={props.displays || []} />
			
			</Box>
		</BaseModal>
	)
}