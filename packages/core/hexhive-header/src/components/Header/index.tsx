import { Box, Button, Collapsible, Header as GrommetHeader, Layer, Select, Text, TextInput } from 'grommet';
import { Menu, Folder, System, Search } from 'grommet-icons'
import React, { useRef, useState } from 'react';
import { BaseStyle } from '@hexhive/styles';
import {Hivelogo, Profile} from '@hexhive/icons';
import { matchPath, withRouter } from 'react-router-dom';
import { UserDropdown } from '../UserDropdown';
import { ServiceDropdown } from '../ServiceDropdown';
import { SearchDropdown } from '../SearchDropdown';

export const BaseHeader : React.FC<any> = (props) => {
    const [ searching, setSearching ] = useState<boolean>(false);
    const searchInput = useRef()
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
            elevation="large"
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
                onFocus={() => setSearching(true)}
                onBlur={() => setSearching(false)}
                style={{position: 'relative'}}
                ref={searchInput}
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
                    placeholder={<Text color="white">Search for services, features...</Text>}/>
                
                <Box
                   onFocus={() => setSearching(true)}
                   onBlur={() => setSearching(false)}
                    background="neutral-3" 
                    style={{position: 'absolute', left: 0, right: 0, zIndex: -1, top: 34}}>
                <Collapsible
                         onFocus={() => setSearching(true)}
                         onBlur={() => setSearching(false)}
                    open={searching}>
                    <SearchDropdown 
                      onFocus={() => setSearching(true)}
                      onBlur={() => setSearching(false)}
                        />
                </Collapsible>
                </Box>
            
            </Box>
            <UserDropdown />
        </GrommetHeader>
    )
}

export const Header = BaseHeader