import { useMutation, useQuery } from '@hexhive-api/signage';
import { mutation } from '@hexhive/client';
import { Box , List, Button } from 'grommet';
import { Add } from 'grommet-icons';
import React, {useContext, useState} from 'react';
import { AssignDisplayModal } from '../../modals/assign-display/AssignDisplayModal';
import { ListSelectModal } from '../../modals/list-select-modal/ListSelectModal';
import { ClusterSingleContext } from './context';

export const ClusterDisplays = (props) => {

	const [ modalOpen, openModal ] = useState<boolean>(false);

	const { id } = useContext(ClusterSingleContext)
	const query = useQuery();

	console.log(id)

	// const displays = query.displays({});
	// const clusterDisplays = query.displays({where: {cluster: {id}}})

	// const [ assignDisplay, assignInfo ] = useMutation((mutation, args: {id: string}) => {
	// 	// const item = mutation.updateClusters({
	// 	// 	where: {id},
	// 	// 	update: {
	// 	// 		displays: [{
	// 	// 			connect: [{where: {node: {id: args.id}}}]
	// 	// 		}]
	// 	// 	}
	// 	// })

	// 	return {
	// 		item: {
	// 			...item.clusters?.[0]
	// 		}
	// 	};
	// })

	return (
		<Box flex>
			{/* <ListSelectModal
				open={modalOpen}
				onClose={() => openModal(false)} 
				title={"Select Displays"}
				list={displays}
				 /> */}
			{/* <AssignDisplayModal 
				onClose={() => openModal(false)}
				displays={displays}
				onSubmit={(display) => {
					if(display){
						assignDisplay({
							args: {
								id: display,
							}
						}).then(() => {
							openModal(false)
						})
					}
				}}
				open={modalOpen} />
			<Box pad="xsmall" background="accent-2" direction="row" align="center" justify="end">
				<Button 
					plain
					onClick={() => openModal(true)}
					style={{padding: 6, borderRadius: 3}}
					hoverIndicator
					label="Assign Display"
					icon={<Add size="small" />}
					/>
			</Box>
			<Box overflow="scroll" flex>
			<List 
				primaryKey="label"
				data={clusterDisplays} />
			</Box> */}
		</Box>
	)
}