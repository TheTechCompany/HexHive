import React from 'react';
import { Box, Text, Button } from 'grommet';
import { Add, CaretDownFill, CaretRightFill } from 'grommet-icons';
import styled from 'styled-components';

const TreeNode : React.FC<any> = (props) => {
	return (
		<Box 
			align="center"
			background={props.node.isSelected() ? 'neutral-2' : ''}
			direction="row"
			className={props.className}>

						<Box 
							flex
							direction="row">
							<Button
								size="small"
								plain
								style={{padding: 6, borderRadius: 3}}
								icon={((props.node.hasChildren() && props.node.children.length > 0) || props.node.options.async) 
										&& !props.node.isLoading() 
										&& (props.node.isOpened() && !!props.node.hasChildren()) ? (<CaretDownFill size="22px" />) : (<CaretRightFill size="22px" />)}
								hoverIndicator
								onClick={props.onToggle}
								/>
							<Box focusIndicator={false} direction="row" flex align="center" hoverIndicator onClick={props.onSelect}>
								<Text size="small">{props.node.data.name}</Text>
							</Box>
						</Box> 
						<Button size="small" onClick={() => props.onCreate?.(props.node)} className="create-action" plain style={{padding: 6, borderRadius: 3}} icon={<Add size="small" />} />

		</Box>
	)
}

export const HyperTreeNode = styled(TreeNode)`
	.create-action{
		display: none;
	}
	&:hover > .create-action{
		display: flex;
	}
`