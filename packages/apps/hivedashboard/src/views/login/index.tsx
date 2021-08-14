import React, { useState } from 'react';
import { Box, Heading, Button, TextInput, Form, Spinner } from 'grommet';
import Logo from '../../assets/hivelogo.svg';
import { useAuth } from '../../hooks/useAuth';

export const Login = () => {

    const [ error, setError ] = useState<boolean>(false)
    const [ loading, setLoading ] = useState<boolean>(false);

    const client = useAuth({
        authorizationServer: process.env.REACT_APP_API || 'http://localhost:7000',
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID || 'hexhive.io',
        clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET || 'tester',
        redirectUri: new URL('/dashboard', `${(typeof(window) != 'undefined' && process.env.REACT_APP_API) ? window.location.href : 'http://localhost:3001'}`).toString()
    });

    // const { client } = useContext(AuthContext)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = () => {
        console.log("Login",email, password)
       // window.location.href = "/dashboard"
       console.log(client)
       setLoading(true);
       setError(false)
        client?.getAuthorizationCode(email, password).then((response) => {

            if(response && response.code){
                const params = new URLSearchParams()
                params.set('code', response.code.authorizationCode);


                const url = new URL(response.code.redirectUri)
                url.searchParams.set('code', response.code.authorizationCode);
                setLoading(false)
            //   window.navigator.({}, '', url.toString())
                window.location.href = url.toString()
            }
        }).catch((err) => {
            console.log(err);
            setError(true)
            setLoading(false)
        })

    }

    return (
        <Box
            background="light-4"
            flex
            direction="row"
            align="center"
            justify="center"
            className="antialiased text-gray-600">

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
                    <img width={70} src={Logo} />
                    <Heading margin="none" size='small'>Login</Heading>
                </Box>

                <Form onSubmit={login} >
                    <Box gap="small">

                    <TextInput
                        style={{borderColor: !error ? 'initial' : 'red'}}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-Mail" />
                    <TextInput
                        style={{borderColor: !error ? 'initial' : 'red'}}
                        value={password}
                        onKeyDown={(e) => e.key == 'Enter' && login()}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password" />
                    
                    <Box
                        justify="end"
                        direction="row">
                        <Button
                            disabled={loading}
                            onClick={login}
                            primary
                            icon={loading ? <Spinner size="small" />: undefined}
                            label={"Login"}>
                        </Button>
                    </Box>
                    </Box>
                </Form>
            </Box>
        </Box>
    );
}
