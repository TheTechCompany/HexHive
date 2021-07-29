import { TextInput , Text} from 'grommet';
import { Layer } from 'grommet';
import { ConditionBuilder, ConditionColumn } from '../../components/condition-builder';
import React, { useState } from 'react';
import { BaseModal } from '../base';
import { useContext } from 'react';
import { EditorContext } from '../../context';

export interface StateMachineModalProps {
    open: boolean;
    title?: string;
    onClose?: () => void;

    cols?: ConditionColumn[]
}

export const StateMachineModal : React.FC<StateMachineModalProps> = (props) => {
    const { state, dispatch } = useContext(EditorContext)

    const [ conditions, setConditions ] = useState<any[]>([])

    return (
        <BaseModal
            title={props.title}
            open={props.open}
            onClose={props.onClose}>
            
            <TextInput placeholder="Label" />

            <Text>
                Actions
            </Text>

            <ConditionBuilder 
                conditions={conditions}
                cols={props.cols}
                onChange={(conditions) => setConditions(conditions)}
                onAdd={() => setConditions(conditions.concat([{device: '', action: ''}])) } />
        </BaseModal>
    )
}