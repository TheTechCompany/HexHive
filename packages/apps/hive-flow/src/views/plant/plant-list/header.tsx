import React from 'react';
import { Box, TextInput, Select } from 'grommet'

export interface PlantHeaderProps {

    filter?: string;
    onFilterChange?: (filter: string) => void;
}

export const PlantHeader : React.FC<PlantHeaderProps> = (props) => {
    return (
        <Box
        focusIndicator={false}
        align="center"
        pad={{horizontal: 'xsmall'}}
        margin={{bottom: 'xsmall'}}
        round="xsmall"
        height="50px"
        direction="row"
        background="accent-1"
        >
        <TextInput
            plain
            value={props.filter}
            onChange={(e: any) => props.onFilterChange?.(e.target.value)}
          focusIndicator={false}
          
          placeholder="Search Equipment..." />
        
      </Box>
    )
}