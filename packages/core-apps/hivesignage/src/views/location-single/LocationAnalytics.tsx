import { useMutation, useQuery } from '@hexhive-api/signage';
import { mutation } from '@hexhive/client';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Box , List, Button } from 'grommet';
import { Add } from 'grommet-icons';
import React, {useContext, useState} from 'react';
import { AssignDisplayModal } from '../../modals/assign-display/AssignDisplayModal';
import { ListSelectModal } from '../../modals/list-select-modal/ListSelectModal';
import { ClusterSingleContext } from './context';
import moment from 'moment';
import { useMemo } from 'react';

import { stringToColor } from '@hexhive/utils';

export const LocationAnalytics = (props) => {

	const [ modalOpen, openModal ] = useState<boolean>(false);

	const { id, analytics } = useContext(ClusterSingleContext)
	const query = useQuery();

	analytics //[{timestamp, results: [{}]}]

	const [keys, points] = useMemo(() => {
		const keys = [...new Set(analytics.map(a => {
			return [...new Set(a.results.map((x) => x.name?.replace(/ /g, '-')))]
		}).reduce((prev, curr) => prev.concat(curr), []).filter((a) => a != undefined))];

		const points = analytics.map(({timestamp, results}) => {
			let resultKeys = [...new Set(results.map((x: any) => x.name?.replace(/ /g, '-')))]

			let returnObject : any = {};

			resultKeys.forEach((key: string) => {
				returnObject[key] = results.filter((x) => x.name?.replace(/ /g, '-') === key).length
			})

			return {
				timestamp: moment(new Date(timestamp).getTime()).format('DD/MM'),
				...returnObject
			}
		})
		return [keys, points]
	}, [analytics])

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
			<ResponsiveContainer>
					<AreaChart
						data={points}
						margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
						>
						<defs>
							{keys.map((key: string) => (
								<linearGradient id={key} x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor={stringToColor(key)} stopOpacity={0.8}/>
								<stop offset="95%" stopColor={stringToColor(key)} stopOpacity={0}/>
								</linearGradient>
							))}
							
						</defs>
						<XAxis minTickGap={25} dataKey="time" />
						<YAxis />
						<Tooltip />
						<CartesianGrid stroke="#f5f5f5" />
						{keys.map((key: string) => (
							<Area type="monotone" dataKey={key} stroke={stringToColor(key)} fillOpacity={1} fill={`url(#${key})`} />
						))}
						{/* <Line type="monotone" dataKey={"interactions"}  stroke="#ff7300" yAxisId={0} /> */}
					</AreaChart>
				</ResponsiveContainer>
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