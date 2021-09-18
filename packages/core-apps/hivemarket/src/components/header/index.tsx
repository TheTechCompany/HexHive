import { Box, Button, Header, Text, TextInput } from 'grommet';
import { Menu, Folder, System } from 'grommet-icons'
import React from 'react';
import { BaseStyle } from '@hexhive/styles';

import {Hivelogo, Profile} from '@hexhive/icons';

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
            <Box 
                focusIndicator={false}
                style={{ boxShadow: 'inset 0 0 5px #222' }}
                flex background="rgba(255, 255, 255, 0.2)">
                <TextInput 
                    focusIndicator={false}
                    placeholder="Search Apps..." />
            </Box>
            {/* <Button 
                onClick={() => props.onActionClick?.(props.path)}
                style={{borderRadius: 7}}
                hoverIndicator
                icon={props.path == "/" ? <Folder /> : <System />} /> */}
        </Header>
    )
}