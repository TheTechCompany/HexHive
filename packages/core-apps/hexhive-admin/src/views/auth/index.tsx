import React from "react";
import { Box, Button, TextInput } from 'grommet'
import { useState } from "react";


export const AuthView = () => {
    const [ username, setUsername ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')

    return (
        <Box 
            background="dark-1"
            flex 
            justify="center" 
            align="center">
            <Box 
                gap="xsmall"
                background="light-1" 
                round="xsmall" 
                pad="xsmall">
                <TextInput
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username" />
                <TextInput 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password" />
                <Box
                    justify="end"
                    direction="row">
                    <Button primary label="Sign in"/>
                </Box>
            </Box>
        </Box>
    );
}