import React from 'react'

import { Box, Button, Text, TextInput } from 'grommet'

export default () => {
    return (
        <Box flex>
            
            <Box>
                <Text>Sign In</Text>
                <Box>
                    <Text size="small">Email address</Text>
                    <TextInput placeholder="Enter email"  />
                </Box>
                <Box>
                    <Text size="small">Password</Text>
                    <TextInput placeholder="Enter password" />
                </Box>
                <Button label="Submit" />
            </Box>

        </Box>
    )
}