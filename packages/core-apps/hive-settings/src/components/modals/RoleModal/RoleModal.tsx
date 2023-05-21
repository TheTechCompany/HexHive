import React, { useState, useEffect } from 'react';
import { Box, List, Checkbox, Divider, Button, Typography, ListItemButton } from '@mui/material';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions
} from '@mui/material'
import { BaseModal } from '@hexhive/ui'
import { FormInput } from '../../FormInput/FormInput';

export const RoleModal = (props) => {

	const [role, setRole] = useState<{ id?: string, name?: string, appliances?: any[] }>({})

	const [selectedApps, setSelectedApps] = useState<any[]>([])

	useEffect(() => {
		if (props.selected) {
			setRole(props.selected)
			setSelectedApps((props.selected?.appliances || []).map((x) => x.id))
		}
	}, [props.selected])

	const toggleSelected = (item: any) => {
		let roles = selectedApps.slice();
		let ix = roles.indexOf(item.id)
		if (ix > -1) {
			roles.splice(ix, 1);
		} else {
			roles.push(item.id)
		}
		setSelectedApps(roles)
	}

	return (
		<Dialog
			fullWidth
			onClose={props.onClose}
			open={props.open}>
			<DialogTitle>{`${props.selected ? "Update" : "Create"} Role`}</DialogTitle>

			<DialogContent>

				<Box sx={{ marginTop: '12px' }}>
					<FormInput
						value={role?.name}
						onChange={(e) => setRole({ ...role, name: e.target.value })}
						label="Name" />

					<Divider sx={{marginTop: '12px', marginBottom: '12px'}} />
					<Box>
						<Typography fontSize={'12px'}>Allowed applications</Typography>
						<List >
							{props.apps.map((datum) => (
								<ListItemButton onClick={() => toggleSelected(datum)} sx={{ display: 'flex' }}>
									<Checkbox checked={selectedApps?.indexOf(datum.id) > -1} />
									<Typography>{datum.name}</Typography>
								</ListItemButton>
							))}
						</List>
					</Box>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.onClose}>Cancel</Button>
				<Button onClick={() => {
					props.onSubmit?.({
						...role,
						add_apps: selectedApps?.filter((selected) => role.appliances?.map((x) => x.id).indexOf(selected) < 0),
						remove_apps: role.appliances?.filter((role) => selectedApps.indexOf(role.id) < 0).map((x) => x.id)

					})
				}} variant="contained" color="primary">{props.selected ? "Save" : "Create"}</Button>
			</DialogActions>
		</Dialog>
	)


}