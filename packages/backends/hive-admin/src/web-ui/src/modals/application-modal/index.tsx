import React from 'react';

import { BaseModal } from '@hexhive/ui/dist/modals/base-modal'
import { TextInput } from 'grommet';
import { useState } from 'react';

export interface ApplicationModalProps {
    open: boolean;
    onClose?: () => void;
    onSubmit?: (app: any) => void;
}

export const ApplicationModal : React.FC<ApplicationModalProps> = (props) => {

    const [ application, setApplication ] = useState<{
        name?: string,
        slug?: string,
        entrypoint?: string,
        staging_entrypoint?: string,
    }>({})

    const onSubmit = () => {
        props.onSubmit?.(application)
    }

    return (
        <BaseModal 
            title='Application'
            onClose={props.onClose}
            onSubmit={onSubmit}
            open={props.open}>
            <div>
                <TextInput 
                    value={application.name}
                    onChange={(e) => setApplication({...application, name: e.target.value})}
                    placeholder="Name" />

                <TextInput 
                    value={application.slug}
                    onChange={(e) => setApplication({...application, slug: e.target.value})}
                    placeholder="Slug" />

                <TextInput 
                     value={application.entrypoint}
                     onChange={(e) => setApplication({...application, entrypoint: e.target.value})}
                    placeholder="Entrypoint" />

                <TextInput 
                    value={application.staging_entrypoint}
                    onChange={(e) => setApplication({...application, staging_entrypoint: e.target.value})}
                    placeholder="Entrypoint (staging)" />
            </div>
        </BaseModal>
    )
}