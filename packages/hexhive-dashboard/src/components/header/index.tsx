import { Box, Header, Text } from 'grommet';
import React from 'react';
import { ReactComponent as Profile } from '../../assets/profile.svg';

export const BaseHeader : React.FC<any> = (props) => {
    return (
        <Header 
            elevation="medium"
            pad="small"
            background="brand"
            direction="row">
            <Text>HexHive</Text>
            <Profile height="25px" />
        </Header>
    )
}