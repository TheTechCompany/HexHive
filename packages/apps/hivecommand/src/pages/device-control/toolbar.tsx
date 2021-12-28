import React from 'react';
import { Box, Button } from 'grommet'

export default (props: {
	items?: {id: string, icon: any}[], 
	active?: string,
	onItemClick?: (item) => void;
}) => {
	console.log(props.active)
	return (
		<Box
			background="accent-1"
			>
			{props.items.map((item) => (
				<Button
					onClick={() => props.onItemClick && props.onItemClick(item)}
					active={item.id == props.active}
					hoverIndicator
					icon={item.icon} />
			))}
		</Box>
	)
}