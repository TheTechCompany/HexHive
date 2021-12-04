import { useMutation, useQuery } from '@hexhive-api/signage';
import { Box, Button, DataTable } from 'grommet';
import React, {useContext, useState} from 'react';
import { AssignCampaignModal } from '../../modals/assign-campaign/AssignCampaignModal';
import { ClusterTierModal } from '../../modals/cluster-tier/ClusterTierModal';
import { ClusterSingleContext } from './context';

export const ClusterTiers = (props) => {
	const { id } = useContext(ClusterSingleContext)

	const [ modalOpen, openModal ] = useState<boolean>(false);
	const query = useQuery()

	const tiers = query.clusterTiers({where: {cluster: {id: id}}})

	const [ createTier, createInfo ] = useMutation((mutation, args: {name: string, percent: string}) => {
		const item = mutation.updateClusters({
			where: {id: id},
			update: {
				tiers: [{
					create: [{
						node: {
							name: args.name,
							percent: parseFloat(args.percent)
						}
					}]
				}]
			}
		})
		return {
			item: {
				...item.clusters?.[0]
			}
		}
	}, {
		refetchQueries: [query.clusterTiers({where: {cluster: {id: id}}})]
	})

	return (
		<Box flex>
			<Box direction="row" align="center" justify="end">
				<Button onClick={() => openModal(true)} label="Add Tier" plain hoverIndicator style={{padding: 6, borderRadius: 3}} />
			</Box>
			<ClusterTierModal 
				onClose={() => openModal(false)}
				onSubmit={(tier) => {
					createTier({args: {
						name: tier.name,
						percent: tier.percent
					}}).then(() => {
						openModal(false);
					})
				}}
				open={modalOpen} />
			<DataTable
				columns={[
					{property: 'name', header: 'Campaign Name'},
					{property: 'percent', header: 'Percent of Play'},
				]}
				data={tiers}/>
		</Box>
	)
}