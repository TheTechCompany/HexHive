import React, { useState, useEffect } from 'react';

import {BaseModal} from '@hexhive/ui'

import { User } from '@hexhive/client'
import { FormInput } from '../../FormInput/FormInput';

export const RoleModal = (props) => {

	const [ role, setRole ] = useState<{id?: string, name?: string}>({})

	useEffect(() => {
		if(props.selected){
			setRole(props.selected)
		}
	}, [props.selected])

	return (
		<BaseModal
			width="medium"
			title={`${props.selected ? "Update" : "Create"} Role`}
			open={props.open}
			onSubmit={() => {
				props.onSubmit?.({
					...role
				})
			}}
			onClose={props.onClose}>
			
			<FormInput
				value={role?.name}
				onChange={(e) => setRole({...role, name: e.target.value})}
				label="Name" />
		
		
		</BaseModal>
	)


}