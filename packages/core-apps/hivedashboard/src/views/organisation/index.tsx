import { Box, Text, DataTable, Button, List } from 'grommet'
import { Close } from 'grommet-icons'
import React, { useState } from 'react'
import { BaseHeader } from '../../components/header';
import { UserRow } from '../../components/user-row';
import { InviteModal } from './modals/invite';
import { UpdateModal } from './modals/update';

export const Organisation  : React.FC<any> = (props) => {
    const [ inviteModal, openInvite ] = useState<boolean>(false);
    const [ updateModal, openUpdate ] = useState<boolean>(false);

    return (
        <Box
            direction="column" 
            flex>
                  <BaseHeader />

            <InviteModal open={inviteModal} onClose={() => openInvite(false)} />
            <UpdateModal open={updateModal} onClose={() => openUpdate(false)} />
            <Box
                margin={{top: 'xsmall'}} 
                justify="between"
                pad={{horizontal: 'small'}}
                align="center"
                direction="row">
                <Text>Organisation Members</Text>
                <Button label="Invite Members" primary onClick={() => openInvite(true)} />
            </Box>
            <Box 
            
                focusIndicator={false}
                overflow="scroll"
                round="xsmall"
                flex 
                margin="small" 
                background="neutral-2">
            <List 
                onClickItem={() => {openUpdate(true)}}
                data={[
                    {
                        avatar: 'http://s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80',
                        name: "Ross Leitch",
                        role: 'Admin',
                        email: 'ross@gfsystems.co.nz'
                    }

                ]}
            > 
            {(item: any) => (
                <UserRow {...item} />
            )}
            </List>
                </Box>
        </Box>
    );
}