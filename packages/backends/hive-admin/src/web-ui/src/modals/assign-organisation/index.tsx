import { BaseModal } from '@hexhive/ui/dist/modals/base-modal'
import { Select, TextInput } from 'grommet';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export interface AssignOrganisationModalProps {
    open: boolean;
    onClose?: () => void;
    onSubmit?: (org: any) => void;
    organisations?: any[];

    selected?: any;
}
export const AssignOrganisationModal : React.FC<AssignOrganisationModalProps> = (props) => {

    const [ trust, setTrust ] = useState<{
        id?: string;
        organisation?: string;
        roles?: string[];
    }>({})

    useEffect(() => {
        console.log(props.selected)
        setTrust({
            ...props.selected,
            organisation: props.selected?.issuer?.id,
            roles: props.selected?.roles?.map((x: any) => x.id)
        })
    }, [props.selected])

    const onSubmit = () => {
        props.onSubmit?.(trust)
    }

    return (
        <BaseModal
            title={'Assign Organisation'}
            open={props.open}
            onClose={props.onClose}
            onSubmit={onSubmit}
            >
            <Select
                options={props.organisations || []}
                labelKey="name"
                valueKey={{reduce: true, key: "id"}}
                value={trust.organisation}
                onChange={(event) => {
                    console.log({event: event.target.value})
                    setTrust({...trust, organisation: event.target.value})
                }}
                placeholder="Select an organisation" />
        
            <Select 
                options={props.organisations?.find((a) => a.id == trust.organisation)?.roles || []}
                labelKey="name"
                valueKey={{reduce: true, key: "id"}}
                value={trust.roles}
                onChange={({value}) => {
                    setTrust({...trust, roles: value})
                }}
                multiple
                placeholder="Roles" />
        </BaseModal>
    )
}