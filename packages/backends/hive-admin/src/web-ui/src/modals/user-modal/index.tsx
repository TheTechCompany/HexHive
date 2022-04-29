import React from 'react';

import { BaseModal } from '@hexhive/ui/dist/modals/base-modal'
import { TextInput } from 'grommet';

export interface UserModalProps {
    open: boolean;
    onClose?: () => void;
}

export const UserModal : React.FC<UserModalProps> = (props) => {
    return (
        <BaseModal 
            title='User'
            onClose={props.onClose}
            open={props.open}>
            <TextInput placeholder="Name" />
            <TextInput placeholder="E-Mail" />
            <TextInput placeholder="Password" type={"password"} />
        </BaseModal>
    )
}