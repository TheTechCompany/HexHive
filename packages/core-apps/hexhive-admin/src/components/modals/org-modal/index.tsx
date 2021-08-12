import { Box, Button, Select, TextInput } from 'grommet';
import React, { useEffect, useState } from 'react';
import { BaseModal } from '../base-modal';

export const OrgModal = (props: any) => {
    const [ org, setOrg ] = useState<any>({})
    
    useEffect(() => {
        if(!props.open){
            setOrg({name: '', users: [], apps: []})
        }
    }, [props.open])

    useEffect(() => {
        if(props.selected){
            console.log(props.selected)
            setOrg(props.selected)
            // setOrg({...props.selected, users: props.selected.users.map((x: any) => x.id), apps: props.selected.apps.map((x: any) => x.id) })
        }

    }, [props.selected])
    const onSubmit = () => {
        props.onSubmit(org)
    }
    return (
        <BaseModal
            title="Add Organisation"
            open={props.open}
            onClose={props.onClose}>

            <TextInput 
                value={org.name}
                onChange={(e) => setOrg({...org, name: e.target.value}) }
                placeholder="Organisation Name" />

            <Select     
                placeholder="Users"
                labelKey="name"
                closeOnChange={false}
                valueKey={{key: "id", reduce: true}}
                onChange={({value}) => setOrg({...org, users: value})}
                options={props.users || []}
                value={org.users}
                multiple/>

            <Select     
                placeholder="Apps"
                labelKey="name"
                valueKey={{key: "id", reduce: true}}
                closeOnChange={false}
                onChange={({value}) => setOrg({...org, apps: value})}
                options={props.apps || []}
                value={org.apps}
                multiple={true}/>

            <Box gap="xsmall" direction="row">
                <Button onClick={props.onClose} label="Close" />
                <Button onClick={onSubmit} primary label="Save" />
            </Box>
        </BaseModal>
    );
}