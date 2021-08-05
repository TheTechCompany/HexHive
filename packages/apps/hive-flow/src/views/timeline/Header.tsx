import { Box, Text, Select, Button } from 'grommet';
import React from 'react';
import { Add } from 'grommet-icons';

export interface TimelineProps{
    onAdd?: () => void; 
    view?: TimelineView;
    onViewChange?: (view: TimelineView) => void;
}

export type TimelineView = "Projects" | "People" | "Estimates" ;
export const TimelineHeader: React.FC<TimelineProps> = (props) => {
    console.log(props.view)
    return (
        <Box
            round="xsmall"
            background="accent-1"
            pad={'xsmall'}
            direction="row"
            align="center"
            justify="between">
            <Box background="#ffffff42" round="xsmall">

                <Select
                    placeholder="View"
                    plain
                    value={props.view || "Projects"}
                    onChange={({ option }) => {
                        props.onViewChange?.(option)
                    }}
                    options={["Projects", "People", "Estimates"]} />
            </Box>
            <Box background="#ffffff42" round="xsmall">
                {(props.view == "Projects" || props.view == "People") && <Button onClick={props.onAdd} icon={<Add />} />}
            </Box>
        </Box>
    );
}