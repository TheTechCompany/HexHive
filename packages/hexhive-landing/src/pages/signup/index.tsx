import { Box, Button, Form, Heading, TextInput } from 'grommet';
import React, { useState } from 'react';
import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import Logo from '../../assets/logo.svg'

export default () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirm, setConfirm] = useState<string>('')


    const signup = () => {
        window.location.href = "/dashboard"
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
                    <Heading size='small'>Signup</Heading>
                </Box>

                <Form onSubmit={signup}>
                    <Box
                        gap='small'
                        direction="column">

                        <TextInput
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-Mail" />
                        <TextInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password" type="password" />
                        <TextInput
                            onKeyDown={(e) => e.key == 'Enter' && signup()}
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            placeholder="Confirm Password" type="password" />

                        <Box
                            justify="end"
                            direction="row">
                            <Button
                                onClick={signup}
                                primary label="Signup" />
                        </Box>
                    </Box>

                </Form>


            </Box>
        </Box>
    );

}