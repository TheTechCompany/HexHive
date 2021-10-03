import { Box, Button, Select, TextInput } from 'grommet';
import React, { useEffect, useState } from 'react';
import { BaseModal } from '../base-modal';

export const UserModal = (props: any) => {

    const [ user, setUser ] = useState<{name?: string, username?: string, password?: string, organisation?: string}>({})
    const [ organisation, setOrganisation ] = useState<any[]>([])
    
    useEffect(() => {
        if(!props.open){
            setUser({})
        }
    }, [props.open])

    useEffect(() => {
        if(props.selected){
            setUser({...props.selected, organisation: props.selected.organisation ? props.selected.organisation.id : ''})
        }
    }, [props.selected])

    const onSubmit = () => {
        props.onSubmit({...user})
    }

    return (
        <BaseModal
            title="Add User"
            open={props.open}
            onClose={props.onClose}>
                
            <TextInput 
                value={user.name}
                onChange={(e) => setUser({...user, name: e.target.value})} 
                placeholder="Name" />
            <TextInput 
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="Username" />
            <TextInput 
                onChange={(e) => setUser({...user, password: e.target.value})}
                type="password" 
                placeholder="Password" />

            <Select   
                valueKey={{key: "id", reduce: true}}  
                labelKey="name"
                placeholder="Organisation"
                options={props.organisations || []}
                value={user?.organisation}
                onChange={({value}) => setUser({...user, organisation: value})}
                />

            <Box direction="row">
                <Button onClick={props.onClose} label="Close" />
                <Button onClick={onSubmit} primary label="Save" />
            </Box>
        </BaseModal>
    );
}