import { Box, Button, Form, Heading, Spinner, TextInput } from 'grommet';
import qs from 'qs';
import React, { useState } from 'react';
import Logo from '../../assets/hivelogo.svg';

export const AuthorizationScreen = (props: any) => {
    const [ error, setError ] = useState<boolean>(false)
    const [ loading, setLoading ] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = () => {
        console.log("Login",email, password)
       // window.location.href = "/dashboard"
       setLoading(true);
       setError(false)

       let fd = new FormData();

       fd.append('email', email)
       fd.append('password', password)

       fetch(`${(process.env.REACT_APP_API || "https://staging-api.hexhive.io")}/interaction/${qs.parse(window.location.search,{ignoreQueryPrefix: true}).token}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password  
            }),
            redirect: 'manual'
        }).then((resp) => {
            if (resp.redirected) {
                window.location.href = resp.url;
                props.onConsent();
            }
            
            if(resp.status == 303){
              
                props.onConsent()
            }
            // console.log(asd)
        })
        // client?.getAuthorizationCode(email, password).then((response) => {

        //     if(response && response.code){
        //         const params = new URLSearchParams()
        //         params.set('code', response.code.authorizationCode);


        //         const url = new URL(response.code.redirectUri)
        //         url.searchParams.set('code', response.code.authorizationCode);
        //         setLoading(false)
        //     //   window.navigator.({}, '', url.toString())
        //         window.location.href = url.toString()
        //     }
        // }).catch((err) => {
        //     console.log(err);
        //     setError(true)
        //     setLoading(false)
        // })

    }

    
    return (
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

        <Form  onSubmit={login} >
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
                    onClick={login}
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
    );
}