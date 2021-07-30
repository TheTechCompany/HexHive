import { Box, Button, Header, Text } from 'grommet';
import { Menu } from 'grommet-icons'
import React from 'react';
import { ReactComponent as Profile } from '../../assets/profile.svg';

export const BaseHeader : React.FC<any> = (props) => {
    return (
        <Header 
            elevation="medium"
            pad={{ vertical: "xsmall", horizontal: 'xsmall'}}
            background="accent-2"
            direction="row">
            <Box align="center" direction="row">
                <Button size="small" hoverIndicator icon={<Menu size="small" />} />
                <Text margin={{left: 'xsmall'}}>HexHive</Text>
            </Box>
            <Profile height="25px" />
        </Header>
    )
}