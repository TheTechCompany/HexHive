import { Box, Text, Select, ThemeContext} from 'grommet';
import { Down, Up } from 'grommet-icons'
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
            {props.searching ? <Up size="small"/>  : <Down size="small" />}
        </Box>

    )
}

export const ServiceDropdown = styled(BaseServiceDropdown)`
    ::placeholder{
        color: white;
    }
`