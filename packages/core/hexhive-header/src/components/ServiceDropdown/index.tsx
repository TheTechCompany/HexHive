import { Box, Text, Select, ThemeContext} from 'grommet';
import { Down } from 'grommet-icons'
import React from 'react';
import styled from 'styled-components';


export const BaseServiceDropdown = (props) => {
    return (
        <Box
            onClick={props.onClick}
             gap="xsmall" 
             direction="row" 
             align="center">
            <Text>Services</Text>
            <Down size="small" />
        </Box>

    )
}

export const ServiceDropdown = styled(BaseServiceDropdown)`
    ::placeholder{
        color: white;
    }
`