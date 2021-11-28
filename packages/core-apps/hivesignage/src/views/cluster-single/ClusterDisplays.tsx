import { useQuery } from '@hexhive-api/signage';
import { Box , List, Button } from 'grommet';
import { Add } from 'grommet-icons';
import React, {useContext, useState} from 'react';
import { ListSelectModal } from '../../modals/list-select-modal/ListSelectModal';
import { ClusterSingleContext } from './context';

export const ClusterDisplays = (props) => {

	const [ modalOpen, openModal ] = useState<boolean>(false);

	const { id } = useContext(ClusterSingleContext)
	const query = useQuery();

	console.log(id)

	const displays = query.displays({});
	const clusterDisplays = query.displays({where: {cluster: {id}}})

	return (
		<Box flex>
			<ListSelectModal
				open={modalOpen}
				onClose={() => openModal(false)} 
				title={"Select Displays"}
				list={displays} />
			<Box pad="xsmall" background="accent-1" direction="row" align="center" justify="end">
				<Button 
					plain
					onClick={() => openModal(true)}
					style={{padding: 6, borderRadius: 3}}
					hoverIndicator
					icon={<Add size="small" />}
					/>
			</Box>
			<Box overflow="scroll" flex>
			<List 
				primaryKey="label"
				data={clusterDisplays} />
			</Box>
		</Box>
	)
}