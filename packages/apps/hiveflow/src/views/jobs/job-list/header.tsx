import React from 'react';
import { Box, TextInput, Select } from 'grommet'
import { Maybe } from '@hexhive/client';

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
            pad={{horizontal: 'xsmall'}}
        align="center"
        margin={{bottom: 'xsmall'}}
        round="xsmall"
        height="50px"
        direction="row"
        background="accent-1"
        gap="xsmall"
        >
        <Box 
            overflow="hidden"
            flex
            background={'#ffffff42'}
            round="xsmall">
        <TextInput
            value={props.filter?.search}
            onChange={(e) => props.onFilterChange?.({search: e.target.value, status: props.filter?.status})}
          focusIndicator={false}
          plain
          placeholder="Search Projects..." />
        </Box>
        <Box 
            overflow="hidden"
            background={"#ffffff42"}
            round="xsmall">
        <Select  
            value={props.filter?.status}
            onChange={({option}) => props.onFilterChange?.({search: props.filter?.search, status: option })}
          plain
          placeholder="Status"
          options={["All"].concat(Array.from(new Set(props.jobs?.map((x: any) => x.status || ''))))} 
          />
        </Box>
      </Box>
    )
}