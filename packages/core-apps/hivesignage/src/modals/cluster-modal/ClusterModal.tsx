import { BaseModal } from '@hexhive/ui';
import { useState } from 'react';
import { TextInput } from 'grommet';
import React from 'react';

export const ClusterModal = (props) => {
	const [ cluster, setCluster ] = useState<any>({})

	const onSubmit = () => {
		props.onSubmit(cluster)
	}
	return (
		<BaseModal
			open={props.open}
			onClose={props.onClose}
			onSubmit={onSubmit}
			title="Create Cluster"
			>
			<TextInput 
				value={cluster.name}
				onChange={(e) => setCluster({name: e.target.value})}
				placeholder="Cluster Name" />
		</BaseModal>
	)
}