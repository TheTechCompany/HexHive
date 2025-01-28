import { useState } from 'react'
import { gql, useMutation, useQuery } from "@apollo/client"
import { Add } from "@mui/icons-material"
import { Box, Divider, IconButton, List, ListItem, ListItemButton, Paper, Typography } from "@mui/material"
import { APIKeyModal } from "./modal"

export const APIKeyList = () => {

    const [ modalOpen, openModal ] = useState(false);

    const [ selected, setSelected ] = useState<any>(null);

    const { data } = useQuery(gql`
        query OrgKeys {
            organisation{
                apiKeys {
                    id
                    apiKey
                    roles{
                        id
                    }
                    name
                }
            }

            roles {
				id
				name
            }
        }
        `)

    
    const [ createKey ] = useMutation(gql`
        mutation CreateKey($name: String, $roles: [String]) {
            createAPIKey(input: {name: $name, roles: $roles}){
                id
            }
        }    
    `, {
        refetchQueries :['OrgKeys']
    })

    const [ updateKey ] = useMutation(gql`
        mutation UpdateKey($id: ID, $name: String, $roles: [String]) {
            updateAPIKey(id: $id, input: {name: $name, roles: $roles}){
                id
            }
        }    
    `, {
        refetchQueries :['OrgKeys']
    })

    const apiKeys = data?.organisation?.apiKeys || [];

    const roles = data?.roles || [];

    return (
        <Paper sx={{
            flex: 1,
        }}>
            <APIKeyModal
                selected={selected}
                open={modalOpen}
                roles={roles}
                onClose={() => {
                    openModal(false)
                    setSelected(null);
                }}
                onSubmit={(apiKey) => {
                    if(apiKey.id){
                        updateKey({variables: {id: apiKey.id, name: apiKey.name, roles: apiKey.roles}}).then(() => {
                            openModal(false);
                            setSelected(null);
                        })
                    }else{
                        createKey({variables: {name: apiKey.name, roles: apiKey.roles}}).then(() => {
                            openModal(false);
                            setSelected(null);
                        })
                    }
                }}
                />
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px'
            }}>
                <Typography>API Keys</Typography>
                <IconButton onClick={() => openModal(true)} size="small">
                    <Add fontSize="inherit" />
                </IconButton>
            </Box>
            <Divider />
            <List>
                {apiKeys?.map((key) => (
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            setSelected(key)
                            openModal(true)
                        }}>
                            {key.name}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
}