import { Box, Button, Header, Text } from 'grommet';
import { Menu } from 'grommet-icons'
import React from 'react';
import { BaseStyle } from 'shared/hexhive-styles/src/base';
import { ReactComponent as Profile } from '../../assets/profile.svg';
import { ReactComponent as HiveLogo } from './hivelogo.svg';

export const BaseHeader : React.FC<any> = (props) => {
    return (
        <Header 
            elevation="medium"
            pad={{ vertical: "xsmall", horizontal: 'xsmall'}}
            background="brand"
            direction="row">
            <Box align="center" direction="row">
            <HiveLogo 
                 onClick={() => window.location.href = "/dashboard" }
                 height="40px" 
                 width="80px" 
                 style={{cursor: 'pointer', fill: BaseStyle.global.colors['accent-1']}}/>
            {/* <Button size="small" hoverIndicator icon={         
} /> */}
            
            </Box>
            <Profile height="25px" />
        </Header>
    )
}