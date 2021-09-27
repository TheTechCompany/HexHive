import { Box, Button, Collapsible, Header as GrommetHeader, Layer, Select, Text, TextInput } from 'grommet';
import { Menu, Folder, System, Search } from 'grommet-icons'
import React, { useRef, useState } from 'react';
import { BaseStyle } from '@hexhive/styles';
import { Hivelogo, Profile } from '@hexhive/icons';
import { matchPath, withRouter } from 'react-router-dom';
import { UserDropdown } from '../UserDropdown';
import { ServiceDropdown } from '../ServiceDropdown';
import { SearchDropdown } from '../SearchDropdown';

export const BaseHeader: React.FC<any> = (props) => {
    const [ searchText, setSearchText ] = useState<string>('')
    const [searching, setSearching] = useState<boolean>(false);
    const searchInput = useRef()
    const views = [
        {
            path: '/flow',
            label: "HiveFlow"
        },
        {
            path: '/command',
            label: "HiveCommand"
        },
        {
            path: '/automate',
            label: "HiveAutomate"
        },
        {
            path: '/files',
            label: "HiveFiles"
        },
        {
            path: '/market',
            label: "HiveMarket"
        }
    ]

    console.log(props.match, window.location)

    return (
        <GrommetHeader
            style={{ zIndex: 222, position: 'absolute', height: '42px', left: 0, top: 0, right: 0 }}
            elevation="large"
            height={"42px"}
            pad={{ vertical: "xsmall", horizontal: 'xsmall' }}
            background="brand"
            direction="row">

            <Box style={{ position: 'relative' }} flex direction="row" align="center">
                <Hivelogo
                    onClick={() => window.location.href = "/dashboard"}
                    height="40px"
                    width="80px"
                    style={{ cursor: 'pointer', fill: BaseStyle.global.colors['accent-1'], marginRight: 4 }} />
               <Box  gap="xsmall" flex style={{position: 'relative'}} direction="row" align="center">
                <ServiceDropdown
                    searching={searching}
                    onClick={() => { 
                        setSearching(!searching)
                    }} />
                <Box
                    onFocus={() => setSearching(true)}
                    onBlur={() => setSearching(false)}
                    style={{ position: 'relative', marginLeft: 4 }}
                    ref={searchInput}
                    height="100%"
                    flex
                    align="center"
                    round="xsmall"
                    border={{ size: 'small', color: "accent-1" }}
                    gap="small"
                    pad={{ left: 'small' }}
                    direction="row">

                    <Search size="small" />
                    <TextInput
                        plain
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        focusIndicator={false}
                        style={{ padding: 3, color: 'white' }}
                        height="small"
                        color="neutral-1"
                        placeholder={<Text color="white">Search for services, features...</Text>} />
                </Box>
                <Box
                    onFocus={() => setSearching(true)}
                    onBlur={() => setSearching(false)}
                    background="neutral-3"
                    style={{ position: 'absolute', left: 0, right: 0, zIndex: -1, top: 34 }}>
                    <Collapsible
                        onFocus={() => setSearching(true)}
                        onBlur={() => setSearching(false)}
                        open={searching}>
                        <SearchDropdown
                            search={searchText}
                            views={views}
                            onSelect={(item) => {
                                console.log(item)
                                window.location.href = `/dashboard${item.path}`
                            }}
                            onFocus={() => setSearching(true)}
                            onBlur={() => setSearching(false)}
                        />
                    </Collapsible>
                </Box>
                </Box>

    
            </Box>
            <UserDropdown />
        </GrommetHeader>
    )
}

export const Header = BaseHeader