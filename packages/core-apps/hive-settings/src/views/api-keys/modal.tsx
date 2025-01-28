import { Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

export const APIKeyModal = (props: any) => {

    const [ apiKey, setApiKey ] = useState<any>({});

    useEffect(() => {
        setApiKey({
            ...props.selected,
            roles: props.selected?.roles?.map((x) => x.id)
        })
    }, [props.selected])

    const submit = () => {
        props.onSubmit?.(apiKey)
    }

    return (
        <Dialog 
            maxWidth='md'
            fullWidth
            open={props.open} 
            onClose={props.onClose}>
            <DialogTitle>{apiKey?.id ? "Update": "Create"} API Key</DialogTitle>
            <DialogContent>
                <Box sx={{paddingTop: '8px', gap: '12px', display: 'flex', flexDirection: 'column'}}>
                    <TextField 
                        size="small"
                        value={apiKey.name || ''}
                        onChange={(e) => setApiKey({...apiKey, name: e.target.value})}
                        label="Name" />
                    <Autocomplete
                        multiple
                        value={props.roles?.filter((a) => (apiKey.roles || []).indexOf(a.id) > -1)}
                        onChange={(e, newValue) => setApiKey({...apiKey, roles: newValue.map((x) => x.id)})}
                        options={props.roles || []} 
                        getOptionLabel={(option) => typeof(option) == 'string' ? option : option.name}
                        renderInput={(params) => <TextField {...params} size="small" label="Roles" />}
                        />
                    
                    {apiKey.apiKey ? <TextField 
                        size="small"
                        disabled
                        value={apiKey.apiKey}
                        label="API Key" /> : null}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancel</Button>
                <Button variant='contained' onClick={submit}>{apiKey?.id ? "Save" : "Create"}</Button>
            </DialogActions>
        </Dialog>
    )
}