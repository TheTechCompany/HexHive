import { BaseModal } from '@hexhive/ui/dist/modals/base-modal'
import { Select, TextInput } from 'grommet';
import React from 'react'
import { useState } from 'react';

export interface AssignApplicationModalProps {
    open: boolean;
    onClose?: () => void;
    onSubmit?: (org: any) => void;
    applications?: any[];
}
export const AssignApplicationModal : React.FC<AssignApplicationModalProps> = (props) => {

    const [ application, setApplication ] = useState('');

    const onSubmit = () => {
        props.onSubmit?.({application: application})
    }

    return (
        <BaseModal
            title={'Assign Application'}
            open={props.open}
            onClose={props.onClose}
            onSubmit={onSubmit}
            >
            <Select
                options={props.applications || []}
                labelKey="name"
                valueKey={{reduce: true, key: "id"}}
                value={application}
                onChange={(event) => {
                    console.log({event: event.target.value})
                    setApplication(event.target.value)
                }}
                placeholder="Select an application" />
        </BaseModal>
    )
}