import { Box, Button, Select, TextInput } from 'grommet';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { BaseModal } from '../base-modal';

export const AppModal : React.FC<{open: boolean, onClose: any, onSubmit: any}> = (props: any) => {
    
    const [ name, setName ] = useState<string>('')

    useEffect(() => {
        if(!props.open){
            setName('')
        }
    }, [props.open])
    const onSubmit = () => {
        props.onSubmit({name: name})
    }

    return (
        <BaseModal
            title="Add App"
            open={props.open}
            onClose={props.onClose}>
                
            <TextInput  
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="App Name" />

            <Box direction="row">
                <Button onClick={props.onClose} label="Close" />
                <Button onClick={onSubmit} primary label="Save" />
            </Box>
        </BaseModal>
    );
}