// import { useMutation, useQuery } from '@hexhive-api/signage';
// import { Box, Button, DataTable } from 'grommet';
// import React, {useContext, useState} from 'react';
// import { AssignCampaignModal } from '../../modals/assign-campaign/AssignCampaignModal';
// import { ClusterSingleContext } from './context';
// import { useQuery as useApolloQuery, gql } from '@apollo/client'
// export const ClusterSchedule = (props) => {
// 	const { id } = useContext(ClusterSingleContext)

// 	const [ modalOpen, openModal ] = useState<boolean>(false);
// 	const query = useQuery()

// 	const campaigns = query.campaigns({})

// 	const tiers = query.scheduleTiers({})

// 	const { data } = useApolloQuery(gql`
// 		query Q ($id: ID){
// 			clusterSchedules(where: {cluster: {id: $id}}) {
// 				campaign{ 
// 					name
// 				}
// 				tier {
// 					name
// 				}
// 			}
// 		}
// 	`)

// 	const schedule = data?.clusterSchedules || []

// 	const [ createClusterSchedule, createInfo ] = useMutation((mutation, args: {
// 		campaign: string,
// 		tier: string
// 	}) => {
// 		const item = mutation.updateLocations({
// 			where: {id: id},
// 			update: {
// 				schedule: [{
// 					create: [{
// 						node: {
// 							campaign: {connect: {where: {node: {id: args.campaign}}}},
// 							tier: {connect: {where: {node: {id: args.tier}}}}
// 						}
// 					}]
// 				}]
// 			}
// 		})
// 		return {
// 			item: {
// 				...item.clusters?.[0]
// 			}
// 		}
// 	}, {
// 		refetchQueries: [query.clusterSchedules({where: {cluster: {id: id}}})]
// 	})
// 	return (
// 		<Box flex>
// 			<Box direction="row" align="center" justify="end">
// 				<Button onClick={() => openModal(true)} label="Assign Campaign" plain hoverIndicator style={{padding: 6, borderRadius: 3}} />
// 			</Box>
// 			<AssignCampaignModal
// 				open={modalOpen}
// 				tiers={tiers}
// 				onSubmit={(schedule) => {
// 					createClusterSchedule({args: {
// 						campaign: schedule.campaign,
// 						tier: schedule.tier
// 					}}).then(() => {
// 						openModal(false);
// 					})
// 				}}
// 				onClose={() => openModal(false)}
// 				campaigns={campaigns || []}
// 				/>
// 			<DataTable
// 				columns={[
// 					{property: 'name', header: 'Campaign Name'},
// 					{property: 'tier', header: 'Tier'},
// 				]}
// 				data={schedule.map(({campaign, tier}) => ({name: campaign?.name, tier: tier?.name}))}
// 				groupBy="tier" />
// 		</Box>
// 	)
// }