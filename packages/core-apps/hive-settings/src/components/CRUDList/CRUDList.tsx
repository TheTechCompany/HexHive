import { Box, Divider, Typography, ListItem, ListItemButton, Button, IconButton, List } from '@mui/material';
import { Add, MoreVert } from '@mui/icons-material'
import React from 'react';

export interface CRUDListProps {
	data?: any[]
	displayKeys?: string[];
	onClick?: (item: any) => void;
	onMore?: (item: any) => void;

	onCreate?: () => void;
	elevation?: string;
}

export const CRUDList: React.FC<CRUDListProps> = ({
	data = [],
	onClick,
	onCreate,
	onMore,
	displayKeys = []
}) => {
	return (
		<Box
			sx={{ flex: 1 }}
		>
			{onCreate ? (<>
				<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
					<IconButton
						onClick={onCreate}>
						<Add />
					</IconButton>
				</Box>
				<Divider />
			</>) : null}
			<Box
				sx={{ flex: 1 }}>
				<List

				>
					{data.map((datum) => (
						<ListItem
							secondaryAction={onMore ? (
								<IconButton onClick={() => onMore?.(datum)}>
									<MoreVert />
								</IconButton>
							) : null}
							sx={{ display: 'flex' }}>
							<ListItemButton onClick={() => onClick?.(datum)}>
								{displayKeys?.map((key) => (
									<Typography>{datum[key]}</Typography>
								))}
							</ListItemButton>

						</ListItem>
					))}
				</List>
			</Box>
		</Box>
	)
}
