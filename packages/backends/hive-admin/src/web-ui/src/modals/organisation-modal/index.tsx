import React from 'react';

import { BaseModal } from '@hexhive/ui/dist/modals/base-modal'
import { TextInput } from 'grommet';
import { useState } from 'react';

export interface OrgModalProps {
    open: boolean;
    onClose?: () => void;
    onSubmit?: (org: any) => void;
}

export const OrganisationModal : React.FC<OrgModalProps> = (props) => {

    const [ name, setName ] = useState('')

    const onSubmit = () => {
        props.onSubmit?.({name: name})
    }
    
    return (
        <BaseModal 
            title='Organisation'
            onClose={props.onClose}
            onSubmit={onSubmit}
            open={props.open}>
            <div>
                    <TextInput 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name" />
            </div>
        </BaseModal>
    )
}