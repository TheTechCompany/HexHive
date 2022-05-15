import React from 'react';

import { BaseModal } from '@hexhive/ui/dist/modals/base-modal'
import { TextInput } from 'grommet';
import { useState } from 'react';

export interface UserModalProps {
    open: boolean;
    onClose?: () => void;

    onSubmit?: (user: any) => void;
}

export const UserModal : React.FC<UserModalProps> = (props) => {

    const [ user, setUser ] = useState<{
        id?: string,
        name?: string,
        email?: string,
        password?: string
    }>({})

    const onSubmit = () => {
        props.onSubmit?.(user)
    }

    return (
        <BaseModal 
            title='User'
            onSubmit={onSubmit}
            onClose={props.onClose}
            open={props.open}>
            <TextInput 
                value={user.name}
                onChange={(e) => setUser({...user, name: e.target.value})}
                placeholder="Name" />
            <TextInput 
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="E-Mail" />
            <TextInput 
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="Password" 
                type={"password"} />
        </BaseModal>
    )
}