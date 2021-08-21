import React, { useState } from 'react';
import { Box, Heading, Button, TextInput, Form, Spinner } from 'grommet';
import Logo from '../../assets/hivelogo.svg';
import { useAuth } from '../../hooks/useAuth';
import qs from 'qs';
import { useEffect } from 'react';
import { ConsentScreen } from './consent';
import { AuthorizationScreen } from './authorization';

export const Login = () => {

    const [ stage, setStage ] = useState<'login' | 'consent'>('login')
    const client = useAuth({
        authorizationServer: process.env.REACT_APP_API || "https://staging-api.hexhive.io" || 'http://localhost:7000',
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID || 'hexhive.io',
        clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET || 'tester',
        redirectUri: new URL('/dashboard', `${(typeof(window) != 'undefined' && process.env.REACT_APP_API) ? window.location.href : 'http://localhost:3001'}`).toString()
    });

    const url = `${process.env.REACT_APP_API || "https://staging-api.hexhive.io"}/interaction/${qs.parse(window.location.search, {ignoreQueryPrefix: true}).token}`
    const getInfo = () => {
        return fetch(`${url}`, {credentials: 'include'}).then((r) => r.json())
    }

    useEffect(() => {
        getInfo().then((info) => {
            setStage(info.type)
        })
    }, [])

    return (
        <Box
            background="light-4"
            flex
            direction="row"
            align="center"
            justify="center"
            className="antialiased text-gray-600">

            {stage  == 'login' ? (<AuthorizationScreen onConsent={() => setStage('consent')}/>) : (<ConsentScreen />)}
        </Box>
    );
}
