import { BaseModal } from '@hexhive/ui';
import { Select , Text, Box, TextArea, TextInput} from 'grommet';
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
				flex
				gap="xsmall">
		
				<Select
					placeholder="Application"
					labelKey="name"
					key="id"
					value={appliance}
					onChange={({value}) => {
						console.log(value)
						 setAppliance(value)
					}}
					options={props.appliances} />

				<Select 
					placeholder="Type" 
					labelKey="name"
					value={type}
					onChange={({value}) => {
						setType(value)
					}}
					options={appliance?.types || []}/>
				
				<Select
					placeholder="Connection" 
					labelKey="name"
					value={connection}
					onChange={({value}) => {
						setConnection(value)
					}}
					options={props.connections} />
				<Select
					placeholder="Table" 
					labelKey="name"
					options={connection?.collections || []} />
				
				<Box flex>
					{type?.fields?.map((field) => (
						<Box
							align="center"
							direction="row">
							<Text size="small">{field.name}</Text>
						</Box>
					))}
				</Box>

			</Box>
		</BaseModal>
	)
}