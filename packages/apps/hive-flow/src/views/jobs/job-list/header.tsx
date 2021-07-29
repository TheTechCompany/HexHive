import React from 'react';
import { Box, TextInput, Select } from 'grommet'
import { Maybe } from '../../../gqless';

export interface JobHeaderProps {
    jobs?: Maybe<{
        status?: Maybe<string>;
    }>[]

    filter?: {search?: string, status?: string};
    onFilterChange?: (filter: {search?: string, status?: string}) => void;
}

export const JobHeader : React.FC<JobHeaderProps> = (props) => {
    return (
        <Box
        align="center"
        margin={{bottom: 'xsmall'}}
        round="xsmall"
        height="50px"
        direction="row"
        background="light-1"
        >
        <TextInput
            value={props.filter?.search}
            onChange={(e) => props.onFilterChange?.({search: e.target.value, status: props.filter?.status})}
          focusIndicator={false}
          plain
          placeholder="Search Jobs" />
        <Select  
            value={props.filter?.status}
            onChange={({option}) => props.onFilterChange?.({search: props.filter?.search, status: option })}
          plain
          placeholder="Status"
          options={["All", Array.from(new Set(props.jobs?.map((x: any) => x.status || '')))]} 
          />
        
      </Box>
    )
}