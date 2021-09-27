import { Box } from 'grommet';
import React from 'react';

export interface SearchDropdownProps {
	onFocus: any;
	onBlur: any;
}

export const SearchDropdown : React.FC<SearchDropdownProps> = (props) => {
	return (
		<Box
		onFocus={props.onFocus}
		onBlur={props.onBlur}
			height="200px"
			width="44vw">
			Search
			
		</Box>
	)
}