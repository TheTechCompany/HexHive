import { Box, Button, Heading, TextInput } from 'grommet';
import React from 'react';
import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import Logo from '../../assets/logo.svg'

export default () => (
    <Box
        fill
        flex
        direction="row"
        align="center"
        justify="center"
        className="antialiased text-gray-600">
        <Meta title={AppConfig.title} description={AppConfig.description} />

        <Box
            pad="small"
            round="small"
            elevation="small"
            background="light-2"
            gap="small"
            width="medium"
            direction="column"
            justify="center"
        >
            <Box direction="row" align="center" justify="between">
                <img width={70} src={Logo.src} />
                <Heading size='small'>Signup</Heading>
            </Box>

            <TextInput placeholder="E-Mail" />
            <TextInput placeholder="Password" type="password" />
            <TextInput placeholder="Confirm Password" type="password" />

            <Box
                justify="end"
                direction="row">
                <Button primary label="Signup" />
            </Box>
        </Box>
    </Box>
);
