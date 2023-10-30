import React, { useState, useEffect } from 'react';
import { Box, Typography, List, Checkbox, FormControlLabel, ListItemButton, Switch, Divider, Autocomplete, TextField } from '@mui/material'
import {BaseModal} from '@hexhive/ui'
import { FormInput } from '../../FormInput/FormInput';

export const UserModal = (props) => {

	const [ search, setSearch ] = useState<string>('')
	const [ user, setUser ] = useState<{
		id?: string, 
		name?: string, 
		type?: string,
		email?: string, 
		inactive?: boolean,
		roles?: {id?: string}[]
	}>({})

	const [ selectedRoles, setSelectedRoles ] = useState<any[]>([])
	const [ removeRoles, setRemoveRoles ] = useState<any[]>([])

	useEffect(() => {
			setUser({...props.selected})
			setSelectedRoles((props.selected?.roles || []).map((x) => x.id))
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
			title={(
				<Box sx={{display: 'flex', bgcolor: 'secondary.main', padding: '6px', justifyContent: 'space-between'}}>
					<Typography sx={{color: 'navigation.main'}}>{`${props.selected ? "Update" : "Invite"} User`}</Typography>
					<Box sx={{display: 'flex', alignItems: 'center'}}>
						<Typography sx={{color: 'navigation.main'}}>Disabled</Typography>
						<Switch checked={user.inactive} onChange={(e) => setUser({...user, inactive: e.target.checked})} size='small'/>
					</Box>
				</Box>
			)}
			open={props.open}
			onSubmit={() => {
				props.onSubmit?.({
					...user,
					roles: selectedRoles,

					// add_roles: selectedRoles?.filter((selected) => user.roles?.map((x) => x.id).indexOf(selected) < 0),
					// remove_roles: user.roles?.filter((role) => selectedRoles?.indexOf(role.id) < 0).map((x) => x.id)
				})
			}}
			onClose={props.onClose}>
			
			<TextField
				fullWidth
				size="small"
				disabled={user.id != null}
				sx={{marginTop: '12px'}}
				value={user?.name}
				onChange={(e) => setUser({...user, name: e.target.value})}
				label="Name" />

			<TextField
				fullWidth
				size="small"
				disabled={user.id != null}
				sx={{marginTop: '12px'}}
				value={user?.email}
				onChange={(e) => setUser({...user, email: e.target.value})}	
				label="Email"
				 />
			
			<Autocomplete
				sx={{marginTop: '12px'}}
				size='small'
				value={user?.type}
				onChange={(e, value) => setUser({...user, type: value})}
				renderInput={(params) => <TextField {...params} label="Type" />}
				options={['User', 'External']} />

			<Divider sx={{margin: '6px'}}></Divider>
			<Box>
				<Typography>Roles</Typography>
				{/* <TextInput 	
					size="small"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search..." /> */}
				<List dense>
					{props.roles.filter((a) => !search || a.name.indexOf(search) > -1).map((datum) => (
						<ListItemButton onClick={() => toggleSelected(datum)} >
							<Checkbox size="small" onChange={() => toggleSelected(datum)} checked={selectedRoles?.indexOf(datum.id) > -1} />
							<Typography>{datum.name}</Typography>
						</ListItemButton>
					))}
				</List>
			</Box>
		</BaseModal>
	)


}