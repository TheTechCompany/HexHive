import { useAuth } from '@hexhive/auth-ui';
import { Box, Text, Collapsible, Layer, List, Menu } from 'grommet';
import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import { Profile } from '@hexhive/icons';

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
        pad={{horizontal: 'small', vertical: 'xxsmall'}}
        round="medium"
        gap="xsmall" 
        direction="row">
        
        <Text size="small">
            {activeUser?.name || process.env.NODE_ENV == 'production' ? activeUser?.name : 'Test User'}
        </Text>
        <Profile height="15px" />
        

        {/* <Box 
            background="neutral-1"
            style={{position: 'absolute', top: '110%', left: 0, right: 0}}>
            <Collapsible direction="vertical" open={open}>
                <List data={["Organisation", "Profile", "Settings", "Log out"]} />
            </Collapsible>
        </Box> */}

    </Box>
        
            </>
}   