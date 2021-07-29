import React from 'react';
import { Button, Text, Box, Avatar } from 'grommet'
import { Close } from 'grommet-icons'

export const UserRow = (props: any) => {
    return (
        <Box 
            focusIndicator={false}
            align="center"
            direction="row">
            <Box flex align="center" direction="row">
                <Avatar
                    size="medium"
                    src={props.avatar} />
                <Box 
                    margin={{left: 'small'}}
                    align="start"
                    direction="column">
                    <Text>{props.name}</Text>
                    <Text size="small">{props.email}</Text>
                </Box>
            </Box>
            <Box
                width="medium"
                justify="between"
                align="center"
                direction="row">
                <Text margin={{right: 'small'}}>
                    {props.role}
                </Text>
                <Button icon={<Close />} label="Remove" />
            </Box>
            
        </Box>
    )
}