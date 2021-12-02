import { BaseModal, FormInput } from '@hexhive/ui';
import { TextInput } from 'grommet';
import React, {useState} from 'react';

export const ClusterTierModal = (props) => {

	const [ tier, setTier ] = useState<{name?: string, percent?: string}>({})

	const onSubmit = () => {
		props.onSubmit(tier);

	}

	return (
		<BaseModal
			title="Add Tier"
			open={props.open}
			onSubmit={onSubmit}
			onClose={props.onClose}
			>
			<TextInput value={tier.name} onChange={(e) => setTier({...tier, name: e.target.value})}  placeholder="Tier Name" />
			<TextInput value={tier.percent} onChange={(e) => setTier({...tier, percent: e.target.value})} placeholder="Percent of Play" />
		</BaseModal>
	)
}