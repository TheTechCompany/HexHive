import { useAuth } from '@hexhive/auth-ui';
import { Box, Text, Collapsible, Layer, List, Menu } from 'grommet';
import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import { Profile } from '../../assets';

export const UserDropdown = () => {
    const { activeUser } = useAuth()
    const [ open, setOpen ] = useState<boolean>(false);
    
    console.log("user dropdown", activeUser)
    return <>
        <Box 
        
            focusIndicator={false}
        onClick={() => setOpen(!open)}
        style={{cursor: 'pointer', position: 'relative', zIndex: 9}}
        background="rgba(255, 255, 255, 0.2)"
        align="center" 
        pad={{horizontal: 'small', vertical: 'xsmall'}}
        round="medium"
        gap="xsmall" 
        direction="row">
        
        {activeUser?.name || process.env.NODE_ENV == 'production' ? activeUser?.name : 'Test User'}
        <Profile height="25px" />
        

        {/* <Box 
            background="neutral-1"
            style={{position: 'absolute', top: '110%', left: 0, right: 0}}>
            <Collapsible direction="vertical" open={open}>
                <List data={["Organisation", "Profile", "Settings", "Log out"]} />
            </Collapsible>
        </Box> */}

    </Box>
            {open ? <Layer
                
                modal={false}
                onClickOutside={() => setOpen(false)}
                onEsc={() => setOpen(false)}
                position="right"
                 animation="slide">
                <Box                 style={{zIndex: 1}}
 width="small" background="neutral-1" height="100vh">
                <Box 
                    height="50px"
                    border={{side: 'bottom', size: 'xsmall', color: 'accent-2'}}
                    direction="row" 
                    align="center" pad="xsmall">
                  <Text>{activeUser?.name || process.env.NODE_ENV == 'production' ? activeUser?.name : 'Test User'}</Text>
                </Box>
    
                </Box>
            </Layer> : null}
            </>
}   