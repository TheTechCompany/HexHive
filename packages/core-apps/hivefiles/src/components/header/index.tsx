import { Box, Button, Header as GrommetHeader, Text } from 'grommet';
import { Menu, Folder, System } from 'grommet-icons'
import React from 'react';
import { BaseStyle } from '@hexhive/styles';

import {Hivelogo, Profile} from '../../assets';
import { matchPath, withRouter } from 'react-router-dom';

export const BaseHeader : React.FC<any> = (props) => {

    const views = [
        {
            path: '/',
            label: "Explorer"
        },
        {
            path: '/workflows',
            label: "Workflows"
        },
        {
            path: '/tasks',
            label: "Tasks"
        }
    ]

    console.log(props.match, window.location)

    return (
        <GrommetHeader     
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
                height="100%"
                gap="small" direction="row">
                {views.map((view) => (
                    <Button 
                        active={matchPath(window.location.pathname, {path: `${process.env.PUBLIC_URL}${view.path}`, exact: true}) != null}
                        style={{borderRadius: 4, paddingLeft: 8, paddingRight: 8}} 
                        hoverIndicator 
                        plain 
                        onClick={() => props.history.push(view.path)}
                        label={view.label}></Button>
                ))}
            </Box>
            <Button 
                onClick={() => props.onActionClick?.(props.path)}
                style={{borderRadius: 7}}
                hoverIndicator
                icon={props.path == "/" ? <Folder /> : <System />} />
        </GrommetHeader>
    )
}

export const Header = withRouter(BaseHeader)