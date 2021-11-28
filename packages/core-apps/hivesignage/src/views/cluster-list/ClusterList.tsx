import React from 'react';
import { Box, Text, Button, List } from 'grommet';
import { useMutation, useQuery } from '@hexhive-api/signage';
import { Add } from 'grommet-icons';
import { ClusterModal } from '../../modals/cluster-modal/ClusterModal';
import { RouteComponentProps } from 'react-router';

export interface ClusterListProps extends RouteComponentProps<{id: string}> {

}

export const ClusterList : React.FC<ClusterListProps> = (props) => {
	
	const [ modalOpen, openModal ] = React.useState(false);
	const query = useQuery()
	const clusters = query.clusters()

	const [ createCluster, createInfo ] = useMutation((mutation, args: {name: string}) => {
		const item = mutation.createClusters({input: [{label: args.name}]})
		return {
			item: {
				...item.clusters?.[0]
			}
		}

	})

	return (
		<Box
			round="xsmall"
			overflow="hidden"
			flex
			elevation="small"
			background="light-1"
			>
			
			<ClusterModal
				onSubmit={(cluster) => {
					createCluster({args: {
						...cluster
					}}).then(() => {
						openModal(false)
					})
				}}
				open={modalOpen}
				/>
			<Box align="center" justify="between" direction="row" pad="xsmall" background="accent-2">
				<Text>Clusters</Text>
				<Button 
					hoverIndicator
					plain
					onClick={() => openModal(true)}
					style={{padding: 6, borderRadius: 3}}
					icon={<Add size="small" />}
					/>
			</Box>
			<List
				onClickItem={({item}) => props.history.push(`${props.match.url}/${item.id}`)}
				primaryKey={"label"}
				data={clusters} />
		</Box>
	)
}