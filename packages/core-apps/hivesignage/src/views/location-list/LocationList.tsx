import React from 'react';
import { Box, Text, Button, List } from 'grommet';
import { useMutation, useQuery } from '@hexhive-api/signage';
import { Add } from 'grommet-icons';
import { CreateLocationModal } from '../../modals/create-location';
import { RouteComponentProps } from 'react-router';

export interface LocationListProps extends RouteComponentProps<{id: string}> {

}

export const LocationList : React.FC<LocationListProps> = (props) => {
	
	const [ modalOpen, openModal ] = React.useState(false);
	const query = useQuery()
	const locations = query.locations()
	const machines = query.machines()

	const [ createLocation, createInfo ] = useMutation((mutation, args: {name: string, machine: string}) => {
		let machineUpdate = {};
		if(args.machine){
			machineUpdate = {
				machines: {
					connect: {where: {node: {id: args.machine}}}
				}
			}
		}
		const item = mutation.createLocations({input: [{
			name: args.name,
			...machineUpdate
		}]})
		return {
			item: {
				...item.locations?.[0]
			}
		}

	}, {
		awaitRefetchQueries: true,
		refetchQueries: [query.locations()]
	})

	return (
		<Box
			round="xsmall"
			overflow="hidden"
			flex
			elevation="small"
			background="light-1"
			>
			
			<CreateLocationModal
				machines={machines}
				onClose={() => openModal(false)}
				onSubmit={(cluster) => {
					createLocation({args: {
						...cluster
					}}).then(() => {
						openModal(false)
					})
				}}
				open={modalOpen}
				/>
			<Box align="center" justify="between" direction="row" pad="xsmall" background="accent-2">
				<Text>Locations</Text>
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
				primaryKey={"name"}
				data={locations} />
		</Box>
	)
}