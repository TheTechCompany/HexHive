import React, { useState, useEffect } from 'react';

import {BaseModal} from '@hexhive/ui'
import { Box, List, CheckBox, Text } from 'grommet'
import { User } from '@hexhive/client'
import { FormInput } from '../../FormInput/FormInput';

export const RoleModal = (props) => {

	const [ role, setRole ] = useState<{id?: string, name?: string, appliances?: any[]}>({})

	const [ selectedApps, setSelectedApps ] = useState<any[]>([])

	useEffect(() => {
		if(props.selected){
			setRole(props.selected)
			setSelectedApps(props.selected?.appliances?.map((x) => x.id))
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
			title={`${props.selected ? "Update" : "Create"} Role`}
			open={props.open}
			onSubmit={() => {
				props.onSubmit?.({
					...role,
					add_apps: selectedApps.filter((selected) => role.appliances?.map((x) => x.id).indexOf(selected) < 0),
					remove_apps: role.appliances?.filter((role) => selectedApps.indexOf(role.id) < 0).map((x) => x.id)
			
				})
			}}
			onClose={props.onClose}>
			
			<FormInput
				value={role?.name}
				onChange={(e) => setRole({...role, name: e.target.value})}
				label="Name" />
		
			<Box>
				<List 
					onClickItem={({item}) => toggleSelected(item)}
					primaryKey={"name"}
					data={props.apps} >
					{(datum) => (
						<Box gap="xsmall" direction="row" align="center">
							<CheckBox checked={selectedApps.indexOf(datum.id) > -1} />
							<Text size="small">{datum.name}</Text>
						</Box>
					)}
				</List>
			</Box>
		</BaseModal>
	)


}