import React, { useState } from 'react';
import { Box, Heading, Button, TextInput, Form } from 'grommet';
import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import Logo from '../../assets/logo.svg';

export default () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = () => {
        console.log("Login",email, password)
    }

    return (
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
                    <Heading size='small'>Login</Heading>
                </Box>

                <Form onSubmit={login} >
                    <Box gap="small">

                    <TextInput
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-Mail" />
                    <TextInput
                        value={password}
                        onKeyDown={(e) => e.key == 'Enter' && login()}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password" />
                    
                    <Box
                        justify="end"
                        direction="row">
                        <Button
                            onClick={login}
                            primary
                            label="Login" />
                    </Box>
                    </Box>
                </Form>
            </Box>
        </Box>
    );
}

