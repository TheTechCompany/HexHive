import { InfiniteCanvas, RetractingPort } from '@hexhive/ui';
import { Box, Button } from 'grommet';
import { Node } from 'grommet-icons';
import { nanoid } from 'nanoid';
import React, {useState, useEffect} from 'react';
import { HMINodeFactory } from '../../hmi-node';
import { BaseModal } from '../base';
import { HMIGroupMenu } from './Menu';
import * as HMIIcons from '../../../assets/hmi-elements'
import { HMIGroupProvider } from './context';

const PORT_ANCHOR = {x: 300, y: 60}

export const HMIGroupModal = (props) => {

	const [ selected, setSelected ] = useState<{key?: string, id?: string}>({})

	const [ nodes, setNodes ] = useState<any[]>([]);
	const [ ports, setPorts ] = useState<any[]>([]);


	const onSubmit = () => {
		let ids = nodes.map((x) => x.id).concat(ports.map((x) => x.id))
		let coords = nodes.map((x) => ({x: x.x, y: x.y})).concat(ports.map((x) => ({x: PORT_ANCHOR.x + x.x, y: PORT_ANCHOR.y + x.y})))
// 
		// let datum = {x: Math.min(...coords.map((x) => x.x)), y: Math.min(...coords.map((x) => parseFloat(x.y)))}}
		
	
		let group = {
			nodes: nodes,
			ports: ports.map((port) => ({
				...port,
				x: PORT_ANCHOR.x + port.x,
				y: PORT_ANCHOR.y + port.y
			}))
		}

		props.onSubmit?.(group)
	}

	useEffect(() => {
		if(props.base){

			setNodes([{
				id: 'base',
				x: 300,
				y: 0,
				extras: {
					scaleX: 1,
					scaleY: 1,
					rotation: 0,
					iconStr: props.base,
					icon: HMIIcons[props.base]
				},
				type: 'hmi-node'
			}])
		}
	}, [props.base])

	

	return (
		<HMIGroupProvider value={{
			nodes,
			ports,
			selected: selected.id,
			addPort: () => {
				setPorts([...ports, {id: nanoid()}])
			},
			updatePort: (id, update) => {
				let p = ports.slice()
				let ix = p.map((x) => x.id).indexOf(id)
				if(ix > -1){
					p[ix] = {...p[ix], ...update}
				}

				setPorts(p)
			},
			updateNode: (id, update) => {
				let n = nodes.slice()
				let ix = n.map((x) => x.id).indexOf(id);
				if(ix > -1){
					n[ix].extras = {
						...n[ix].extras,
						...update
					}
					setNodes(n)
				}
			}
		}}>
			<BaseModal
				padding={"none"}
				gap={"none"}
				width="xlarge"
				title="Create HMI Grouping"
				open={props.open}
				onClose={props.onClose}
				onSubmit={onSubmit}>
				<Box 
					direction="row"
					height={{min: '400px'}}>
					<InfiniteCanvas
						editable={true}
						factories={[new HMINodeFactory()]}
						menu={(
							<HMIGroupMenu 
								selected={selected}
								
								nodeMenu={props.nodeMenu.map((x) => ({
									...x, 
									icon: (
										<Box style={{stroke: 'gray'}}>
											{x.icon}
										</Box>)
								}))} />
						)} 
						onSelect={(key, id) => {
							setSelected({key, id})
						}}
						onNodeUpdate={(node) => {
							let n = nodes.slice()
							let ix = nodes.map((x) => x.id).indexOf(node.id);
							if(ix > -1){
								n[ix].x = node.x;
								n[ix].y = node.y;
							}

							setNodes(n)
						}}
						
						onDrop={(position, data) => {
							data.extras.icon = HMIIcons[data.extras.icon]

							setNodes([...nodes, {
								id: nanoid(),
								x: position.x, 
								y: position.y,
								extras: {
									icon: data.extras.icon || 'Tank',
									rotation: 0
								},
								type: HMINodeFactory.TAG
							}])
						}}
						nodes={nodes.concat([{id: 'root', x: 300, y: 50, extras: {
							ports: ports || [],
							icon: () => <div />
						}, type: 'hmi-node'}])}
						
						paths={[]}
						/>
				</Box>
			</BaseModal>
		</HMIGroupProvider>
	)
}