import React, {useState, useContext} from 'react';

import { Box, Button, Collapsible, List, Text, TextInput } from 'grommet'
import { Nodes, Subtract, Connect, Add } from 'grommet-icons';
import { NodeDropdown } from '../../node-dropdown';
import SvgSettings from '../../../views/Editor/pages/program/Settings';
import { BumpInput } from 'core/hexhive-ui/src/components';
import { HMIGroupContext } from './context';

export const HMIGroupMenu = (props) => {
	const [ selectedMenu, setSelectedMenu ] = useState<string>(undefined);

	const [ selected, setSelected ] = useState<any>()

	const { selected: selectedNode, nodes, ports, updateNode, addPort, updatePort } = useContext(HMIGroupContext)

	const renderMenu = () => {
		let node = nodes.find((a) => a.id == selectedNode)

		switch(selectedMenu){
			case 'nodes':
				return (
					<NodeDropdown
						items={props.nodeMenu || []} />
				)
			case 'settings':
				return <Box>
					<BumpInput	
						value={node?.extras?.rotation || 0}
						leftIcon={<Subtract size="small" />}
						onLeftClick={() => {
							updateNode(selectedNode, {
								rotation: (node?.extras?.rotation || 0) - 90
							})
						}}
						onRightClick={() => {
							updateNode(selectedNode, {
								rotation: (node?.extras?.rotation || 0) + 90
							})
						}}
						onChange={(e) => {
							updateNode(selectedNode, {
								rotation: e
							})
						}}
						rightIcon={<Add size="small" />}
						placeholder="Rotation" />
					<BumpInput 
						type="number"
						value={node?.extras?.scaleX || 0}
						onLeftClick={() => {
							updateNode(selectedNode, {
								scaleX: parseFloat(node?.extras?.scaleX || 1) - 1
							})
						}}
						onRightClick={() => {
							updateNode(selectedNode, {
								scaleX: parseFloat(node?.extras?.scaleX || 1) + 1
							})
						}}
						onChange={(e) => {
							updateNode(selectedNode, {
								scaleX: parseFloat(e)
							})
						}}
						leftIcon={<Subtract size="small" />}
						rightIcon={<Add size="small" />}
						placeholder="Scale X" />
					<BumpInput 
						type="number"

						onLeftClick={() => {
								updateNode(selectedNode, {
									scaleY: parseFloat((node?.extras?.scaleY || 1)) - 1
								})
							}}
						onRightClick={() => {
								updateNode(selectedNode, {
									scaleY: parseFloat((node?.extras?.scaleY || 1)) + 1
								})
							}}
						onChange={(e) => {
							updateNode(selectedNode, {
								scaleY: parseFloat(e)
							})
						}}
						value={node?.extras?.scaleY || 0}
						leftIcon={<Subtract size="small" />}
						rightIcon={<Add size="small" />}
						placeholder="Scale Y" />
				</Box>
			case 'ports':
				return (
					<Box>
						<Box align="center" justify="between" direction="row">
							<Text size="small">Ports</Text>
							<Button 
								onClick={addPort}
								hoverIndicator
								plain 
								style={{padding: 6, borderRadius: 3}} 
								icon={<Add size="small" />} />
						</Box>
						<Box flex overflow="scroll">
							<List 
								pad="none"
								primaryKey="key"
								data={ports}>
								{(datum) => (
									<>
									<Box
										pad={{vertical: 'xsmall'}}
										flex
										onClick={() => setSelected(selected == datum.id ? undefined : datum.id)}
										direction="column">
										{/* <Text>{datum.key || "new port"}</Text>
									</Box>
									<Collapsible open={selected == datum.id}> */}
										<TextInput 
											onChange={(e) => updatePort(datum.id, {key: e.target.value})}
											placeholder="Port ID" 
											size="small" 
											value={datum.key} />
										<Box direction="row">
											<TextInput 
												onChange={(e) => updatePort(datum.id, {x: parseFloat(e.target.value) })}
												value={datum.x}
												placeholder="X" 
												type="number" />
											<TextInput 
												onChange={(e) => updatePort(datum.id, {y: parseFloat(e.target.value) })}
												value={datum.y}
												placeholder="Y" 
												type="number" />
										</Box>
										<Box direction="row">
											<TextInput 
												value={datum.height}
												onChange={(e) => updatePort(datum.id, { height: parseFloat(e.target.value) }) }
												placeholder="Length"
												type="number" />
										</Box>
										<TextInput 
											onChange={(e) => updatePort(datum.id, {rotation: parseFloat(e.target.value) })}
											value={datum.rotation}
											placeholder="Rotation" 
											type="number" />
									{/* </Collapsible> */}
									</Box>
									</>
								)}
							</List>
						</Box>
					</Box>
				)
			default:
				return;
		}
	}
	return (
		<>
		<Collapsible
			direction="horizontal"
			open={Boolean(selectedMenu)}
			>
			<Box overflow="scroll" pad={'xsmall'} width="small">
				{renderMenu()}
			</Box>
		</Collapsible>
		<Box elevation="small" background="accent-1">
			
			<Button
				active={selectedMenu == 'nodes'}
				hoverIndicator
				onClick={() => setSelectedMenu(selectedMenu == 'nodes' ? undefined : 'nodes')}
				icon={<Nodes />} />
			
			<Button
				active={selectedMenu == 'settings'}
				hoverIndicator
				onClick={() => setSelectedMenu(selectedMenu == 'settings' ? undefined : 'settings')}
				icon={<SvgSettings />} />

			<Button
				active={selectedMenu == 'ports'}
				hoverIndicator
				onClick={() => setSelectedMenu(selectedMenu == 'ports' ? undefined : 'ports')}
				icon={<Connect />} />
		</Box>
		</>
	)
}