import { useAuth } from '@hexhive/auth-ui';
import { Box, Collapsible, List, Menu } from 'grommet';
import React, { useState } from 'react';
import { Profile } from '../../assets';

export const UserDropdown = () => {
    const { activeUser } = useAuth()
    const [ open, setOpen ] = useState<boolean>(false);
    
    return (
        <Box 
            focusIndicator={false}
        onClick={() => setOpen(!open)}
        style={{cursor: 'pointer', position: 'relative'}}
        background="rgba(255, 255, 255, 0.2)"
        align="center" 
        pad={{horizontal: 'small', vertical: 'xsmall'}}
        round="medium"
        gap="xsmall" 
        direction="row">
        
        {activeUser?.name || process.env.NODE_ENV == 'production' ? '' : 'Test User'}
        <Profile height="25px" />
        
        {/* <Box 
            background="neutral-1"
            style={{position: 'absolute', top: '110%', left: 0, right: 0}}>
            <Collapsible direction="vertical" open={open}>
                <List data={["Organisation", "Profile", "Settings", "Log out"]} />
            </Collapsible>
        </Box> */}

    </Box>
    );
}   