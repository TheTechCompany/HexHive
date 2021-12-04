import React from 'react';

import { Box, Text, Button, Layer, TextInput } from 'grommet'
import { useState } from 'react';
import { BaseModal, FormControl } from '@hexhive/ui';

export interface WorkflowModalProps {
    open: boolean;
    onClose?: () => void;
    onSubmit?: (app: { name: string, template: string }) => void;
    templates?: any[];
}
export const CreateMachineModal: React.FC<WorkflowModalProps> = (props) => {
    const [machine, setMachine] = useState<any>({})

    const onSubmit = () => {
        props.onSubmit(machine)
    }
    return (
        <BaseModal
            title="Create Machine"
            open={props.open}
            onClose={props.onClose}
            onSubmit={onSubmit}
        >

            <TextInput
                value={machine.name}
                onChange={(e) => setMachine({ ...machine, name: e.target.value })}
                placeholder="Name" />

            <FormControl
                placeholder="Template"
                labelKey="name"
                valueKey="id"
                value={machine.template}
                onChange={(e) => setMachine({ ...machine, template: e })}
                options={props.templates} />

        </BaseModal>
    )
}