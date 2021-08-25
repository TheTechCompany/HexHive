import { Box, Button, Header, Text } from 'grommet';
import { Menu } from 'grommet-icons'
import React from 'react';
import { BaseStyle } from '@hexhive/styles';

import {Hivelogo, Profile} from '../../assets';
import { useAuth } from '@hexhive/auth-ui';

export const BaseHeader : React.FC<any> = (props) => {
    const  {activeUser} = useAuth();

    return (
        <Header 
            elevation="medium"
            pad={{ vertical: "xsmall", horizontal: 'xsmall'}}
            background="brand"
            direction="row">
            <Box align="center" direction="row">
            <Hivelogo 
                 onClick={() => window.location.href = "/dashboard" }
                 height="40px" 
                 width="80px" 
                 style={{cursor: 'pointer', fill: BaseStyle.global.colors['accent-1']}}/>
            {/* <Button size="small" hoverIndicator icon={         
} /> */}
            
            </Box>
            <Box align="center" gap="xsmall" direction="row">
                {activeUser?.name}
                <Profile height="25px" />

            </Box>
        </Header>
    )
}