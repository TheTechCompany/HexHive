import { Box, Divider, Typography, TextField, ListItem, ListItemButton, Button, IconButton, List } from '@mui/material';
import { Add, MoreVert } from '@mui/icons-material'
import React, { useMemo } from 'react';

export interface CRUDListProps {
	data?: any[]
	displayKeys?: string[];
	onClick?: (item: any) => void;
	onMore?: (item: any) => void;

	onCreate?: () => void;

	onSearch?: (search: string) => void;
	search?: string;

	elevation?: string;
}

export const CRUDList: React.FC<CRUDListProps> = ({
	data = [],
	onClick,
	onCreate,
	onMore,
	onSearch,
	search,
	displayKeys = []
}) => {

	const header = useMemo(() => {

		const rightAction = onCreate ? (<IconButton onClick={onCreate}><Add /></IconButton>) : null;

		const middle = (onSearch || search) ? (
			<TextField
				size="small"
				fullWidth
				value={search}
				onChange={(e) => onSearch(e.target.value)} 
				label="Search..." />
		) : null;

		return (middle || rightAction) ? (
			<>
				<Box sx={{display: 'flex', justifyContent: rightAction && !middle ? 'flex-end' : undefined}}>
					{middle}
					{rightAction}
				</Box>
				<Divider sx={{marginTop: '6px', marginBottom: '6px'}} />
			</>
		) : null;
	}, [onSearch, search, onCreate])


	return (
		<Box
			sx={{ flex: 1, display: 'flex', minHeight: 0, flexDirection: 'column' }}
		>
			{header}
			<Box
				sx={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
				<List>
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
