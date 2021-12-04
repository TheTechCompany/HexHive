import { BaseModal, FormInput } from '@hexhive/ui';
import { Box, List, Text } from 'grommet';
import React from 'react';

export const VisualizeTierModal = (props) => {
	const total = props.tiers?.reduce((prev, curr) => prev + curr.percent, 0);

	return (
		<BaseModal
			title="Visualize Tier"
			width="medium"
			open={props.open}
			onClose={props.onClose}
			>
			<FormInput
				placeholder="Run Time"
				value={'1 hour'}
				/>
			<Text>{(60 * 60 / 15)} slots</Text>
			<List	
				data={props.tiers?.filter((a) => a.percent).map((x) => ({
					name: x.name,
					value: (total / x.percent) / x.slots
				}))}>
				{(datum) => (
					<Box>
						<Text size="small">{datum.name} {((60 * 60 / 15) / (100 / datum.value)).toFixed(2)} slots</Text>
					</Box>
				)}
			</List>
		</BaseModal>
	)
}