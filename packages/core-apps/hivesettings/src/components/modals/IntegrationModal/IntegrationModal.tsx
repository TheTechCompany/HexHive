import React, { useState, useEffect } from 'react';

import {BaseModal} from '@hexhive/ui'
import { Box, List, CheckBox, Text, Select } from 'grommet'
import { FormInput } from '../../FormInput/FormInput';
import { FormLabel } from '../../FormInput/wrapper';
import { HiveIntegration, HiveIntegrationInstance } from '@hexhive/client';

export const IntegrationModal = (props) => {

	const [ integration, setIntegration ] = useState<HiveIntegrationInstance>()

	const [ selectedApps, setSelectedApps ] = useState<any[]>([])

	useEffect(() => {
		if(props.selected){
			setIntegration(props.selected)
			// setSelectedApps(props.selected?.appliances?.map((x) => x.id))
		}
	}, [props.selected])

	const toggleSelected = (item: any) => {
		let roles = selectedApps.slice();
		let ix = roles.indexOf(item.id)
		if(ix > -1){
			roles.splice(ix, 1);
		}else{
			roles.push(item.id)
		}
		setSelectedApps(roles)
	}

	return (
		<BaseModal
			width="medium"
			title={`${props.selected ? "Update" : "Create"} Integration`}
			open={props.open}
			onSubmit={() => {
				props.onSubmit?.({
					...integration,
					// add_apps: selectedApps.filter((selected) => role.appliances?.map((x) => x.id).indexOf(selected) < 0),
					// remove_apps: role.appliances?.filter((role) => selectedApps.indexOf(role.id) < 0).map((x) => x.id)
			
				})
			}}
			onClose={props.onClose}>
			<Box gap="xsmall">
				<FormInput
					value={integration?.name}
					onChange={(e) => setIntegration({...integration, name: e.target.value})}
					label="Name" />

				<FormLabel label="Worker">
					<Select 
						placeholder="Worker"
						labelKey="name"
						options={props.workers} />
				</FormLabel>

			</Box>
		</BaseModal>
	)


}