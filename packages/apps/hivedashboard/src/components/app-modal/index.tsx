import React from 'react';
import { BaseModal } from '@hexhive/ui'
import { Layer, List, Text, TextInput} from 'grommet';
import { useState } from 'react';

export const AppModal : React.FC<any> = (props) => {
    const [ search, setSearch ] = useState<string>('')

    return (
        <BaseModal 
            width="medium"
            title="Select application"
            open={props.open}
            onClose={props.onClose}>
            <TextInput 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search ..." />
            <List
                data={["HiveFlow", "HiveCommand"].filter((a) => a.indexOf(search) > -1)} />
        </BaseModal>
    )
}