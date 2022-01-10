import React, { useState, useEffect } from 'react';
import { Box, Text, List, CheckBox, TextInput } from 'grommet'
import {BaseModal} from '@hexhive/ui'
import { FormInput } from '../../FormInput/FormInput';

export const UserModal = (props) => {

	const [ search, setSearch ] = useState<string>('')
	const [ user, setUser ] = useState<{id?: string, name?: string, username?: string, roles?: {id?: string}[]}>({})

	const [ selectedRoles, setSelectedRoles ] = useState<any[]>([])
	const [ removeRoles, setRemoveRoles ] = useState<any[]>([])

	useEffect(() => {
		if(props.selected){
			setUser(props.selected)
			setSelectedRoles(props.selected?.roles?.map((x) => x.id))
		}
	}, [props.selected])

const toggleSelected = (item: any) => {
	let roles = selectedRoles.slice();
	let ix = roles.indexOf(item.id)
	if(ix > -1){
		roles.splice(ix, 1);
	}else{
		roles.push(item.id)
	}
	setSelectedRoles(roles)
}

	return (
		<BaseModal
			width="medium"
			title={`${props.selected ? "Update" : "Create"} User`}
			open={props.open}
			onSubmit={() => {
				props.onSubmit?.({
					...user,
					add_roles: selectedRoles?.filter((selected) => user.roles?.map((x) => x.id).indexOf(selected) < 0),
					remove_roles: user.roles?.filter((role) => selectedRoles?.indexOf(role.id) < 0).map((x) => x.id)
				})
			}}
			onClose={props.onClose}>
			
			<FormInput
				value={user?.name}
				onChange={(e) => setUser({...user, name: e.target.value})}
				label="Name" />
			<FormInput
				value={user?.username}
				onChange={(e) => setUser({...user, username: e.target.value})}	
				label="Email"
				 />
				
			<Box>
				<Text size="small">Roles</Text>
				{/* <TextInput 	
					size="small"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search..." /> */}
				<List
					pad="none"
					primaryKey="name"
					onClickItem={({item}) => toggleSelected(item)}
					data={props.roles.filter((a) => !search || a.name.indexOf(search) > -1)}>
					{(datum) => (
						<Box gap="xsmall" margin={{vertical: 'xsmall'}} direction="row" align="center">
							<CheckBox onChange={() => toggleSelected(datum)} checked={selectedRoles.indexOf(datum.id) > -1} />
							<Text size="small">{datum.name}</Text>
						</Box>
					)}
				</List>
			</Box>
		</BaseModal>
	)


}