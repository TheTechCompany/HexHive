import React from 'react';
import { Box } from 'grommet'

export interface GridListProps {
	data?: any[]
	renderItem?: (item: any) => any;
}

export const GridList : React.FC<GridListProps> = (props) => {
	return (
		<Box 
			wrap={true}
			direction="row">
			
			{props.data?.map((item) => props.renderItem?.(item))}
		</Box>	
	)
}