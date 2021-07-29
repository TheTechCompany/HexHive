import { Box, Select } from 'grommet';
import React from 'react';

export interface SIUnitSelectorProps {
    value?: string;
    onChange?: (data: any) => void;
}

export const SIUnitSelector : React.FC<SIUnitSelectorProps> = (props) => {
    return (
        <Box>
            <Select
                onChange={({option}) => props.onChange?.(option)}
                value={props.value}
                options={["°C", "m/second", "bar", "psi"]} />
        </Box>
    )
}