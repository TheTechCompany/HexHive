import { Box, Text, Select } from 'grommet';
import React from 'react';

export type TimelineView = "Projects" | "Estimates";
export const TimelineHeader : React.FC<{view?: TimelineView, onViewChange?: (view: TimelineView) => void}> = (props) => {
    return (
        <Box
            round="xsmall"
            background="accent-1"
            pad={'xsmall'}
            direction="row"
            align="center"
            justify="between">
           <Text weight="bold">
                Timeline
            </Text> 
            <Box background="#ffffff42" round="xsmall">
            <Select 
                placeholder="View"
                plain
                value={props.view || "Projects"}
                onChange={({option}) => {
                    props.onViewChange?.(option)
                }}
                options={["Projects", "Estimates"]} />
            </Box>
        </Box>
    );
}