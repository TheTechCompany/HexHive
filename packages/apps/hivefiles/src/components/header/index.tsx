import { Box, Button, Header, Text } from 'grommet';
import { Menu, Folder, System } from 'grommet-icons'
import React from 'react';
import { BaseStyle } from '@hexhive/styles';

import {Hivelogo, Profile} from '../../assets';

export const BaseHeader : React.FC<any> = (props) => {

    return (
        <Header     
            style={{zIndex: 9}}
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
            <Button 
                onClick={() => props.onActionClick?.(props.path)}
                style={{borderRadius: 7}}
                hoverIndicator
                icon={props.path == "/" ? <Folder /> : <System />} />
        </Header>
    )
}