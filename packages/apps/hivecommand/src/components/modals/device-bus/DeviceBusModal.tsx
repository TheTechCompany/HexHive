import { BaseModal } from '@hexhive/ui';
import { Box, TextInput, Select } from 'grommet';
import React from 'react';


export const DeviceBusModal = (props) => {
	return (
		<BaseModal
			title="Add Device Bus"
			open={props.open}
			onClose={props.onClose}
			>
			<Box width="medium" gap="xsmall">
				<TextInput placeholder="Name" />
				<Select placeholder="Type" options={["IO-Link Master", "RevPi DIO"]} />
			</Box>
		</BaseModal>
	)
}