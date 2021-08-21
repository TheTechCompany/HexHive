import React, { useState } from 'react';
import { Box, Heading, Button, TextInput, Form, Spinner } from 'grommet';
import Logo from '../../assets/hivelogo.svg';
import { useAuth } from '../../hooks/useAuth';
import qs from 'qs';

export const Login = () => {

    const [ error, setError ] = useState<boolean>(false)
    const [ loading, setLoading ] = useState<boolean>(false);

    const client = useAuth({
        authorizationServer: process.env.REACT_APP_API || "https://staging-api.hexhive.io" || 'http://localhost:7000',
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

                <Form method="POST" action={`${(process.env.REACT_APP_API || "https://staging-api.hexhive.io")}/interaction/${qs.parse(window.location.search,{ignoreQueryPrefix: true}).token}/login`} >
                    <Box gap="small">

                    <TextInput
                        required 
                        type="email" 
                        name="email" 
                        style={{borderColor: !error ? 'initial' : 'red'}}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-Mail" />
                    <TextInput
                        required 
                        type="password"
                        name="password"
                        style={{borderColor: !error ? 'initial' : 'red'}}
                        value={password}
                        onKeyDown={(e) => e.key == 'Enter' && login()}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />
                    
                    <Box
                        justify="end"
                        direction="row">
                        <Button
                            type="submit"
                            disabled={loading}
                            primary
                            icon={loading ? <Spinner size="small" />: undefined}
                            label={"Login"}>
                        </Button>
                    </Box>
                    </Box>
                </Form>
                <Box>
                    <a href={`${process.env.REACT_APP_API}/interaction/${qs.parse(window.location.search, {ignoreQueryPrefix:true}).token}/abort`}>[ Cancel ]</a>
                    <a href={`/tos`}>[ Terms of Service ]</a>
                    <a href={`/privacy-policy`}>[ Privacy Policy ]</a>
                </Box>
            </Box>
        </Box>
    );
}
