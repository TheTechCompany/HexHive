import React from 'react'
import { BaseModal, FormInput } from '@hexhive/ui'
import { useState } from 'react';
import { useEffect } from 'react';

export interface ServiceAccountModalProps {
    onClose?: () => void;
    open: boolean;
    onSubmit?: (serviceAccount: any) => void;

    selected?: any;
}

export const ServiceAccountModal : React.FC<ServiceAccountModalProps> = (props) => {

    const [ serviceAccount, setServiceAccount ] = useState<any>({name: ''});

    const onSubmit = () => {
        props.onSubmit?.(serviceAccount)
    }

    useEffect(() => {
        setServiceAccount({
            ...props.selected
        })
    }, [props.selected])

    return (
        <BaseModal
            onClose={props.onClose}
            title="Create Service Account"
            open={props.open}
            onSubmit={onSubmit}
            >
            <FormInput
                value={serviceAccount?.name}
                onChange={(value) => setServiceAccount({...serviceAccount, name: value})}
                placeholder='Account name' />
            {serviceAccount.apiKey && <FormInput placeholder='API Key' value={serviceAccount.apiKey} />}
        </BaseModal>
    )
}