import { Box, Text, Select, Button } from 'grommet';
import React from 'react';
import { Add } from 'grommet-icons';
import styled from 'styled-components';

export interface TimelineProps{
    onAdd?: () => void; 
    view?: TimelineView;
    onViewChange?: (view: TimelineView) => void;
    className?: string;
}

export type TimelineView = "Projects" | "People" | "Estimates" ;
export const BaseTimelineHeader: React.FC<TimelineProps> = (props) => {
    console.log(props.view)
    return (
        <Box
            className={props.className}
            height="42px"
            round="xsmall"
            background="accent-1"
            pad={'xsmall'}
            direction="row"
            align="center"
            justify="between">
            <Box background="#ffffff42" round="xsmall">

                <Select
                    size="small"
                    placeholder="View"
                    plain
                    value={props.view || "Projects"}
                    onChange={({ option }) => {
                        props.onViewChange?.(option)
                    }}
                    options={["Projects", "People", "Estimates"]} />
            </Box>
            <Box background="#ffffff42" round="xsmall">
                {(props.view == "Projects" || props.view == "People") && <Button plain style={{padding: 6}} size="small" onClick={props.onAdd} icon={<Add size="20px" />} />}
            </Box>
        </Box>
    );
}

export const TimelineHeader = styled(BaseTimelineHeader)`
    input {
        padding: 6px;
    }
`