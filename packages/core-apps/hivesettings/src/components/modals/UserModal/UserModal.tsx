import React, { useState, useEffect } from 'react';

import {BaseModal} from '@hexhive/ui'

import { User } from '@hexhive/client'
import { FormInput } from '../../FormInput/FormInput';

export const UserModal = (props) => {

	const [ user, setUser ] = useState<{id?: string, name?: string, email?: string}>({})

	useEffect(() => {
		if(props.selected){
			setUser(props.selected)
		}
	}, [props.selected])

	return (
		<BaseModal
			width="medium"
			title={`${props.selected ? "Update" : "Create"} User`}
			open={props.open}
			onSubmit={() => {
				props.onSubmit?.({
					...user
				})
			}}
			onClose={props.onClose}>
			
			<FormInput
				value={user?.name}
				onChange={(e) => setUser({...user, name: e.target.value})}
				label="Name" />
			<FormInput
				value={user?.email}
				onChange={(e) => setUser({...user, email: e.target.value})}	
				label="Email"
				 />
		</BaseModal>
	)


}