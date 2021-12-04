import { BaseModal, FormInput } from '@hexhive/ui';
import { TextInput } from 'grommet';
import React, {useState, useEffect} from 'react';

export const CreateTierModal = (props) => {

	const [ tier, setTier ] = useState<{name?: string, percent?: number, slots?: number}>({})

	const onSubmit = () => {
		props.onSubmit(tier);

	}

	useEffect(() => {
		setTier({...props.selected})
	}, [props.selected])

	return (
		<BaseModal
			title="Add Tier"
			open={props.open}
			onSubmit={onSubmit}
			onClose={props.onClose}
			>
			<FormInput value={tier.name} onChange={(e) => setTier({...tier, name: e})}  placeholder="Name" />
			<FormInput value={tier.percent} type="number" onChange={(e) => setTier({...tier, percent: parseFloat(e)})} placeholder="Percent" />
			<FormInput value={tier.slots} type="number" onChange={(e) => setTier({...tier, slots: parseInt(e)})} placeholder="Slots" />
		</BaseModal>
	)
}