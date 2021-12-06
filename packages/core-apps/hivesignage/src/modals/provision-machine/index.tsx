import { BaseModal } from '@hexhive/ui';
import { Box, TextInput, Text } from 'grommet';
import React from 'react';


export const ProvisionMachineModal = (props) => {
	return (
		<BaseModal 
			title="Provision Machine"
			onClose={props.onClose}
			onSubmit={props.onSubmit}
			open={props.open}>
			<Box align="center" direction="row" gap="small">
				<TextInput placeholder="Network ID" />
			</Box>
		</BaseModal>
	)
}