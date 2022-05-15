import { BaseModal } from '@hexhive/ui/dist/modals/base-modal';
import { Select, TextInput } from 'grommet';
import React from 'react';
import { useState } from 'react';

export interface RoleModalProps {
    open: boolean;
    applications?: any[];
    onClose?: () => void;
    onSubmit?: (role: any) => void;
}

export const RoleModal : React.FC<RoleModalProps> = (props) => {
    
    const [ role, setRole ] = useState<{
        name?: string,
        applications?: string[]
    }>({})

    const onSubmit = () => {
        props.onSubmit?.(role)
    }

    return (
        <BaseModal
            title='Create Role'
            open={props.open}
            onClose={props.onClose}
            onSubmit={onSubmit}
            >
            <TextInput 
                value={role.name}
                onChange={(e) => setRole({...role, name: e.target.value})}
                placeholder="Name" />
            <Select 
                multiple
                labelKey={"name"}
                valueKey={{reduce: true, key: "id"}}
                value={role.applications}
                onChange={({value}) => {
                    setRole({...role, applications: value})
                    
                    console.log(value)

                }}
                options={props.applications || []}
                placeholder="Applications" />
        </BaseModal>
    )
}