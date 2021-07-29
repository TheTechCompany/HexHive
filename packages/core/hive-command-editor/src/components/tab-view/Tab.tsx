import { Box, Button } from 'grommet';
import React from 'react';
import styled from 'styled-components'

export interface TabProps {
    label?: string | any;
    background?: string;
    selected?: boolean;
    onSelect?: () => void;
    className?: string;
}
export const BaseTab : React.FC<TabProps> = (props) => {
    return (
        <Box
            border={{side: 'right', size: '1px', color: 'dark-3'}}>
        <Box 
            className={props.className}
            height="40px"
            border={{side: 'top', size: props.selected ? '2px': '0px', color: 'accent-2'}}
            background={{color: props.background, opacity: !props.selected ? 0.6 : 1}}>
            <Button 
                onClick={props.onSelect}
                margin={{horizontal: 'xsmall'}}
                fill
                plain
                icon={typeof(props.label) != 'string' && props.label}
                label={typeof(props.label) == 'string' && props.label}></Button>
        </Box>
        </Box>
    )
}

export const Tab = styled(BaseTab)`
    &:hover{
        opacity: 1;
    }
`