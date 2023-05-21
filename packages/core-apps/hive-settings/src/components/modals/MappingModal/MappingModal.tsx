import { BaseModal } from '@hexhive/ui';
import { Select, Typography, MenuItem, Box } from '@mui/material';
import React, { useState } from 'react';

export const MappingModal = (props) => {
	const [ connection, setConnection ] = useState<any>()
	const [ appliance, setAppliance ] = useState<any>()
	const [ type, setType ] = useState<any>()

	return (
		<BaseModal
			width="medium"
			title={"Create Mapping"}
			open={props.open}
			onClose={props.onClose}>
			<Box	
				>
		
				<Select
					label="Application"
					value={appliance}
					onChange={(e, newValue) => {
						 setAppliance(newValue)
					}}>
					{props.appliances.map((appliance) => (
						<MenuItem value={appliance.id}>{appliance.name}</MenuItem>
					))}
				</Select>

				<Select 
					label="Type" 
					value={type}
					onChange={(e, newValue) => {
						setType(newValue)
					}}>

					{appliance.types?.map((type) => (
						<MenuItem value={type.id}>{type.name}</MenuItem>
					))}
				</Select>
				
				<Select
					label="Connection" 
					value={connection}
					onChange={(e, newValue) => {
						setConnection(newValue)
					}}
					>
					{props.connections?.map((connection) => (
						<MenuItem value={connection.id}>{connection.name}</MenuItem>
					))}
				</Select>

				<Select
					label="Table">
					
					{(connection?.collections || []).map((item) => (
						<MenuItem value={item.id}>{item.name}</MenuItem>
					))}
				</Select>
				
				<Box>
					{type?.fields?.map((field) => (
						<Box
							>
							<Typography>{field.name}</Typography>
						</Box>
					))}
				</Box>

			</Box>
		</BaseModal>
	)
}