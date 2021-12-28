import React from 'react';
import Tree, { useTreeState, IUseTreeState } from 'react-hyper-tree';
import { Box, Text, Button } from 'grommet';
import { Add, CaretDownFill, CaretRightFill } from 'grommet-icons';
import { HyperTreeNode } from './HyperTreeNode'

export interface HyperTreeProps {
	id: string,
	data: IUseTreeState["data"];

	onSelect?: (node: any) => void;
	onCreate?: (node: any) => void;
}

export const HyperTree : React.FC<HyperTreeProps> = (props) => {
	const { required, handlers } = useTreeState({
		data: props.data,
		defaultOpened: true,
		id: props.id
	})
	return (
		<Box 
			flex >
			<Tree
			 disableTransitions
			 horizontalLineStyles={{
			   stroke: 'black',
			   strokeWidth: 1,
			   strokeDasharray: '1 1',
			 }}
			 verticalLineStyles={{
			   stroke: 'black',
			   strokeWidth: 1,
			   strokeDasharray: '1 1',
			 }}
				{...required}
				{...handlers} 
				
				renderNode={(node) => {
					console.log(node)
					return (
					<HyperTreeNode {...node} onSelect={(e : React.MouseEvent<any>) => {
						node.onSelect(e)
						props.onSelect?.(node.node)
					}} onCreate={props.onCreate} />
				)
				}}
			/>
		</Box>
	)
}