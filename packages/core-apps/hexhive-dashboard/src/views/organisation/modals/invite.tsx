import { Box, Button, Layer, Text, TextInput } from 'grommet';
import { Close } from 'grommet-icons';
import React, { useState } from 'react';

export const InviteRow : React.FC<any> = (props) => (
    <Box direction="row" gap="xsmall">
        <TextInput placeholder="Name" />
        <TextInput placeholder="E-Mail" />
    </Box>
)

export const InviteModal : React.FC<any> = (props) => {
    const [ invites, setInvites ] = useState<string[]>(['', '', ''])
    return props.open ? (
        <Layer 
            onClickOutside={props.onClose}
            onEsc={props.onClose}
            modal={true}>
            <Box width="large" pad="small" gap="small">
                <Box align="center" justify="between" direction="row">
                    <Text>Invite Users</Text>
                    <Button hoverIndicator={true} size='small' onClick={props.onClose} icon={<Close size="small" />} />
                </Box>
                {invites.map((x) => (
                    <InviteRow />
                ))}
                <Box>
                    <Button primary label="Invite" />
                </Box> 
            </Box>
        </Layer>
    ) : null;
}