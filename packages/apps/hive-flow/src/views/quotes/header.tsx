import React from 'react';
import { Box, TextInput, Select } from 'grommet'
import { Maybe } from '../../gqless';

export interface QuoteHeaderProps {
    quotes?: any[]
    filter?: {search?: string, status?: string};
    onFilterChange?: (filter: {search?: string, status?: string}) => void;
}

export const QuoteHeader : React.FC<QuoteHeaderProps> = (props) => {
    return (
        <Box
        align="center"
        margin={{bottom: 'xsmall'}}
        round="xsmall"
        height="50px"
        direction="row"
        background="accent-1"
        >
        <TextInput 
            value={props.filter?.search}
            onChange={(e: any) => props.onFilterChange?.({search: e.target.value})}
          focusIndicator={false}
          plain
          placeholder="Search Quotes" />
         <Select  
            value={props.filter?.status}
            onChange={({option}) => props.onFilterChange?.({search: props.filter?.search, status: option })}
          plain
          placeholder="Status"
          options={["All"].concat(Array.from(new Set(props.quotes?.filter((a) => a != undefined).map((x: any) => x.status || ''))))} 
          />
      </Box>
    )
}