import React, { useState } from 'react';
import { Box, Heading, Button, TextInput, Form, Spinner } from 'grommet';
import Logo from '../../assets/hivelogo.svg';
import qs from 'qs';
import { useEffect } from 'react';
import { ConsentScreen } from './consent';
import { AuthorizationScreen } from './authorization';
import { Redirect } from 'react-router-dom';

export const Login = (props: any) => {

    // const [ stage, setStage ] = useState<'login' | 'consent'>('login')
    // const client = useAuth({
    //     authorizationServer: process.env.REACT_APP_API || "https://staging-api.hexhive.io" || 'http://localhost:7000',
    //     clientId: process.env.NEXT_PUBLIC_CLIENT_ID || 'hexhive.io',
    //     clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET || 'tester',
    //     redirectUri: new URL('/dashboard', `${(typeof(window) != 'undefined' && process.env.REACT_APP_API) ? window.location.href : 'http://localhost:3001'}`).toString()
    // });

    // const url = `${process.env.REACT_APP_API || "https://staging-api.hexhive.io"}/interaction/${qs.parse(window.location.search, {ignoreQueryPrefix: true}).token}`
    // const getInfo = () => {
    //     return fetch(`${url}`, {credentials: 'include'}).then((r) => r.json())
    // }

    // useEffect(() => {
    //     getInfo().then((info) => {
    //         setStage(info.type)
    //     })
    // }, [])

    return window.location.href = `https://${process.env.NODE_ENV == 'production' ? '' : 'staging-'}api.hexhive.io/login`
}
