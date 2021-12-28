import { Box, Button, Header, Text } from 'grommet';
import { Menu } from 'grommet-icons'
import React from 'react';
import { BaseStyle } from '@hexhive/styles';

import {Hivelogo, Profile} from '../../assets';
import { useAuth } from '@hexhive/auth-ui';
import { UserDropdown } from '../user-dropdown';
import { matchPath } from 'react-router-dom';

export const BaseHeader : React.FC<any> = (props) => {
    const  {activeUser} = useAuth();

    return (
        <Header     
            style={{zIndex: 9}}
            elevation="medium"
            pad={{ vertical: "xsmall", horizontal: 'xsmall'}}
            background="brand"
            direction="row">
            <Box 
                hoverIndicator
                align="center" direction="row">
                
            <Hivelogo 
                 onClick={() => {
                    const match = matchPath(window.location.pathname, '/dashboard') 
                    if(match){
                        props.onMenu?.()
                    }else{
                        window.location.href = "/dashboard" 
                    }

                 }}
                 height="40px" 
                 width="80px" 
                 style={{cursor: 'pointer', fill: BaseStyle.global.colors['accent-1']}}/>
            {/* <Button size="small" hoverIndicator icon={         
} /> */}
            
            </Box>
            <UserDropdown />
        </Header>
    )
}