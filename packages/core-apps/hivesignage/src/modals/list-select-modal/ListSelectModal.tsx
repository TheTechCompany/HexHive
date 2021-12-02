import { BaseModal } from '@hexhive/ui';
import { Box,  Text, CheckBox, List } from 'grommet';
import React from 'react';

export const ListSelectModal = (props) => {
	return (
		<BaseModal 
			title={props.title}
			onClose={props.onClose}
			width="medium"
			open={props.open}>
			<Box height={{max: '60vh'}} overflow={'scroll'}>
				<List 
					data={props.list}>
					{(datum) => (
						<Box direction="row">
							<CheckBox />
							<Text>{datum.label}</Text>
						</Box>
					)}
				</List>
			</Box>
		</BaseModal>
	)
}