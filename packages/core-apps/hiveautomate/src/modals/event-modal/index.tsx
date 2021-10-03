import { BaseModal } from '@hexhive/ui';
import { TextInput } from 'grommet';
import React from 'react';

export interface EventModalProps {
    open: boolean;
    onClose?: () => void;
}

export const EventModal : React.FC<EventModalProps> = (props) => {
    return (
        <BaseModal 
            title="Create event"
            onClose={props.onClose}
            open={props.open}>
            <TextInput placeholder="Event name" />
            <TextInput placeholder="Service" />
        </BaseModal>
    )
}