import React from 'react';
import { Box, TextInput, Select } from 'grommet'

export interface StaffSearchHeaderProps {

    filter?: string;
    onFilterChange?: (filter: string) => void;
}

export const StaffSearchHeader : React.FC<StaffSearchHeaderProps> = (props) => {
    return (
        <Box
        align="center"
        pad={{horizontal: 'xsmall'}}
        margin={{bottom: 'xsmall'}}
        round="xsmall"
        height="50px"
        direction="row"
        background="accent-1"
        >
        <Box 
            background="#ffffff42"
            flex round="xsmall">

        <TextInput 
            value={props.filter}
            onChange={(e: any) => props.onFilterChange?.(e.target.value)}
          focusIndicator={false}
          plain
          placeholder="Search People..." />
        
      </Box>        
      
      </Box>

    )
}