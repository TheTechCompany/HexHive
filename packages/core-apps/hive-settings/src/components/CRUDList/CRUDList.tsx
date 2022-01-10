import { Box, Text, Button, List } from 'grommet';
import { Add, MoreVertical } from 'grommet-icons'
import React from 'react';

export interface CRUDListProps { 
	data?: any[]
	displayKeys?: string[];
	onClick?: (item: any) => void;
	onMore?: (item: any) => void;

	onCreate?: () => void;
	elevation?: string;
}

export const CRUDList : React.FC<CRUDListProps> = (props) => {
	return (
		<Box
			elevation={props.elevation || 'small'}
			flex 
			overflow="hidden"
			background="neutral-1" 
			round="xsmall">
			<Box background="accent-2" direction="row" justify="end" align="center">
				<Button 	
					onClick={props.onCreate}
					hoverIndicator 
					icon={<Add />} />
			</Box>
			<Box
				overflow="scroll"
				flex>
			<List 
				pad="none"
				data={props.data}
				border={false} 
					>
				{(datum) => (
					<Box align="center" justify="between" direction="row">
						<Box hoverIndicator pad="small" flex onClick={() => props.onClick?.(datum)}>
							{props.displayKeys?.map((key) => (
								<Text>{datum[key]}</Text>
							))}
						</Box>
						<Button onClick={() => props.onMore?.(datum)} icon={<MoreVertical size="15px" />} hoverIndicator />
					</Box>
				)}
			</List>
			</Box>
		</Box>
	)
}
