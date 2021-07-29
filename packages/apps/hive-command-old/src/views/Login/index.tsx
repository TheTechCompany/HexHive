import { Box } from 'grommet';
import { LoginForm } from '@thetechcompany/live-ui';
import React from 'react';
import HiveFlowLogo from '../../assets/hive-flow-logo.png'

export interface LoginProps {
    history?: any;
}

export const Login: React.FC<LoginProps> = (props) => {
   
    return (
        <Box
            direction="column"
            flex
            justify="center"
            align="center">
            <Box
                elevation="2"
                background="light-1"
                justify="center"
                round="small"
                direction="column"
                width="30vw"
                height="25vw">
            <img src={HiveFlowLogo} style={{width: 'auto', height: 50, margin: '0 auto'}} />
            <LoginForm 
                onSubmit={(attempt) => {
                    props.history.push('/dashboard')
                    return {success: true}
                }}
                />
                </Box>
        </Box>
    )
}