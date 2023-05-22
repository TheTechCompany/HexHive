import React, { useState, useEffect } from 'react';

import { BaseModal } from '@hexhive/ui'
import { Box, Dialog, DialogContent, DialogActions, DialogTitle, Select, Button, FormControl, InputLabel, MenuItem } from '@mui/material'
import { HiveIntegration, HiveIntegrationInstance } from '@hexhive/client';

export const AppModal = (props) => {

	const [selectedApp, setSelectedApp] = useState<any>(null)

	useEffect(() => {
		if (props.selected) {
			// setIntegration(props.selected)
			// setSelectedApps(props.selected?.appliances?.map((x) => x.id))
		}
	}, [props.selected])

	// const toggleSelected = (item: any) => {
	// 	let roles = selectedApps.slice();
	// 	let ix = roles.indexOf(item.id)
	// 	if (ix > -1) {
	// 		roles.splice(ix, 1);
	// 	} else {
	// 		roles.push(item.id)
	// 	}
	// 	setSelectedApps(roles)
	// }

	return (
		<Dialog
			fullWidth
			open={props.open}

			onClose={props.onClose}>
			<DialogTitle>{`${props.selected ? "Update" : "Add"} Application`}</DialogTitle>
			<DialogContent>
			<FormControl sx={{ marginTop: '12px' }} size="small" fullWidth>
				{/* <FormInput
					value={integration?.name}
					onChange={(e) => setIntegration({...integration, name: e.target.value})}
					label="Name" /> */}
				<InputLabel>Application</InputLabel>
				<Select
					value={props.apps.find((a) => a.id == selectedApp)}
					onChange={(e) => {
						setSelectedApp(e.target.value)
					}}
					label="Application">
					{props.apps?.map((app) => (
						<MenuItem value={app.id}>{app.name}</MenuItem>
					))}
				</Select>

			</FormControl>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.onClose}>Cancel</Button>
				<Button onClick={() => {
					props.onSubmit?.(selectedApp)
				}} variant="contained" color="primary">
					Save
				</Button>
			</DialogActions>
		</Dialog>
	)


}