import { useMutation, useQuery } from '@hexhive-api/signage';
import { Box, Button, List, Text } from 'grommet'
import { CloudUpload } from 'grommet-icons'
import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom'
import { ProvisionMachineModal } from '../../modals/provision-machine';
import { DisplaySingleProvider } from './context';
import { DisplayCluster } from './DisplayCluster';
import { DisplayComputers } from './DisplayComputers';
import { DisplayScreen } from './DisplayScreen';

export const MachineSingle = (props) => {
	const query = useQuery()

	const [ modalOpen, openModal ] = useState(false);

	const machines = query.machines({where: {id: props.match.params.id}})

	const machine = machines?.[0];

	const [ provisionMachine, provisionInfo ] = useMutation((mutation, args: {networkName: string}) => {
		const item = mutation.updateMachines({
			where: {id: props.match.params.id},
			update: {
				provisioned: true,
				networkName: args.networkName,
			}
		})
		return {
			item: {
				...item.machines?.[0]
			}
		}
	}, {
		awaitRefetchQueries: true,
		refetchQueries: [query.machines({where: {id: props.match.params.id}})],
	})

	return (
		<DisplaySingleProvider value={{
			id: props.match.params.id
		}}>
		<ProvisionMachineModal
			onSubmit={(provision) => {
				provisionMachine({
					args: {
						networkName: provision.code,
					}
				}).then(() => {
					openModal(false)
				})
			}}
			onClose={() => openModal(false)}
			open={modalOpen} />
		<Box 
			round="xsmall"
			flex 
			overflow="hidden"
			background="neutral-1" 
			elevation="small">
			
			<Box 
				align="center"
				justify="between"
				pad="xsmall" 
				background="accent-2" 
				direction="row">
				<Text>{machine.name}</Text>

				<Box>
				{!machine.provisioned && <Button 
					hoverIndicator
					onClick={() => openModal(true)}
					plain
					style={{padding: 6, borderRadius: 3}}
					icon={<CloudUpload size='small' />} />}
				</Box>
			</Box>

			<Box flex direction="row">
				<Box elevation="small" border={{side: 'right', size: 'small'}}>
					<List 
						border={false}
						onClickItem={({item}) => props.history.push(`${props.match.url}/${item.toLowerCase()}`)}
						data={["Computers", "Screen", "Cluster"]} />
				</Box>
				<Box flex>
					<Switch>
						<Route path={`${props.match.url}/computers`} component={DisplayComputers} />
						<Route path={`${props.match.url}/screen`} component={DisplayScreen} />
						<Route path={`${props.match.url}/cluster`} component={DisplayCluster} />
					</Switch>
				</Box>
			</Box>
		</Box>
		</DisplaySingleProvider>
	)
}