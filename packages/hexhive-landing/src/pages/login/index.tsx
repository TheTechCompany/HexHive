import React, { useState } from 'react';
import { Box, Heading, Button, TextInput, Form } from 'grommet';
import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import Logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/useAuth';

export default () => {

    const client = useAuth({
        authorizationServer: process.env.NEXT_PUBLIC_API || 'http://localhost:8090',
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID || 'command-hexhive.io',
        clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET || 'tester',
        redirectUri: new URL('/dashboard', `${typeof(window) == 'undefined' ? 'http://localhost:3001' /*`window.location.href`*/ : 'http://localhost:3001'}`).toString()
    });

    // const { client } = useContext(AuthContext)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = () => {
        console.log("Login",email, password)
       // window.location.href = "/dashboard"
       console.log(client)
        client?.getAuthorizationCode(email, password).then((response) => {
            console.log(response.code);

            const params = new URLSearchParams()
            params.set('code', response.code.authorizationCode);


            const url = new URL(response.code.redirectUri)
            url.searchParams.set('code', response.code.authorizationCode);
         //   window.navigator.({}, '', url.toString())
            window.location.href = url.toString()
        })
    }

    return (
        <Box
            background="light-4"
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
