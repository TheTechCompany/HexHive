import { Box, Button, Header as GrommetHeader, Select, Text, TextInput } from 'grommet';
import { Menu, Folder, System, Search } from 'grommet-icons'
import React from 'react';
import { BaseStyle } from '@hexhive/styles';
import {Hivelogo, Profile} from '@hexhive/icons';
import { matchPath, withRouter } from 'react-router-dom';
import { UserDropdown } from '../UserDropdown';
import { ServiceDropdown } from '../ServiceDropdown';

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
            style={{zIndex: 222, position: 'absolute', height: '42px', left: 0, top: 0, right: 0}}
            elevation="medium"
            height={"42px"}
            pad={{ vertical: "xsmall", horizontal: 'xsmall'}}
            background="brand"
            direction="row">
            <Box  
                style={{zIndex: 222}}
                align="center" direction="row">
                <Hivelogo 
                    onClick={() => window.location.href = "/dashboard" }
                    height="40px" 
                    width="80px" 
                    style={{cursor: 'pointer', fill: BaseStyle.global.colors['accent-1'], marginRight: 8}}/>
                <ServiceDropdown
                    onClick={() => {}} />
                {/* <Select options={["HiveFlow"]} placeholder="Services"/> */}
            {/* <Button size="small" hoverIndicator icon={         
} /> */}
            
            </Box>
            <Box 
                height="100%"
                flex
                align="center"
                round="xsmall"
                border={{size: 'small', color: "accent-1"}}
                gap="small" 
                pad={{left: 'small'}}
                direction="row">
                <Search size="small" />
                <TextInput  
                    plain
                    focusIndicator={false}
                    style={{padding: 3, color: 'white'}}
                    height="small" 
                    color="neutral-1"
                    suggestions={["HiveFlow", "HiveCommand"]}
                    placeholder={<Text color="white">Search for services, features...</Text>}/>
            </Box>
            <UserDropdown />
        </GrommetHeader>
    )
}

export const Header = BaseHeader